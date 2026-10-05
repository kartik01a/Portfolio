"use server";

import { headers } from "next/headers";
import { sendBriefEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { briefSchema } from "@/lib/validation";

function clientIp(headerList: { get(name: string): string | null }) {
  return headerList.get("x-real-ip")?.trim() || headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return process.env.NODE_ENV !== "production";
  }
  try {
    const body = new URLSearchParams({
      secret,
      response: token,
      remoteip: ip,
    });
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
    });
    const data = (await response.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export async function sendProjectBrief(formData: FormData) {
  const parsed = briefSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") ?? "",
    projectType: formData.get("projectType"),
    budget: formData.get("budget") ?? "",
    timeline: formData.get("timeline") ?? "",
    message: formData.get("message"),
    honeypot: String(formData.get("company_website") ?? ""),
    turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
  });

  if (!parsed.success) {
    return { ok: false as const, error: "Check the form and try again." };
  }

  if (parsed.data.honeypot) {
    return { ok: true as const };
  }

  const headerList = await headers();
  const ip = clientIp(headerList);
  const limit = rateLimit(ip);
  if (!limit.ok) {
    return { ok: false as const, error: "Too many messages. Please email instead." };
  }

  const token = parsed.data.turnstileToken ?? "";
  const turnstileOk = await verifyTurnstile(token, ip);
  if (!turnstileOk) {
    return { ok: false as const, error: "The spam check failed. Please try again." };
  }

  const sent = await sendBriefEmail(parsed.data);
  if (!sent.ok) return sent;
  return { ok: true as const };
}
