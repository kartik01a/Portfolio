import { Resend } from "resend";
import type { BriefInput } from "@/lib/validation";

export async function sendBriefEmail(brief: BriefInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? "kartiksinghbisht1@gmail.com";
  const from = process.env.RESEND_FROM ?? "Kartik Singh Bisht <onboarding@resend.dev>";
  if (process.env.CONTACT_EMAIL_MODE === "test" && process.env.NODE_ENV !== "production") {
    return { ok: true as const };
  }

  if (!apiKey) {
    return { ok: false as const, error: "Email is not configured yet." };
  }

  const resend = new Resend(apiKey);
  const lines = [
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Company: ${brief.company || "—"}`,
    `Project type: ${brief.projectType || "—"}`,
    `Budget: ${brief.budget || "—"}`,
    `Timeline: ${brief.timeline || "—"}`,
    "",
    brief.message,
  ];

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: brief.email,
    subject: `New portfolio enquiry from ${brief.name}`,
    text: lines.join("\n"),
  });

  if (error) {
    return { ok: false as const, error: "The message could not be sent. Please email directly." };
  }
  return { ok: true as const };
}
