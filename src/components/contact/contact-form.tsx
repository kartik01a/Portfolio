"use client";

import { sendProjectBrief } from "@/app/contact/actions";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { buttonVariants } from "@/components/ui/button";
import { calUrl, site } from "@/content/site";
import { projectTypes } from "@/lib/validation";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";

const fieldClass =
  "mt-2 w-full rounded-[14px] border border-border bg-surface px-3 py-2.5 text-base text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "pending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const bookingHref = calUrl() || "#book";

  useEffect(() => {
    if (!siteKey || document.querySelector("script[data-turnstile]")) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.dataset.turnstile = "true";
    document.body.appendChild(script);
  }, [siteKey]);

  return (
    <div>
      <form
        className="space-y-5"
        onSubmit={async (event) => {
          event.preventDefault();
          setStatus("pending");
          setError("");
          const result = await sendProjectBrief(new FormData(event.currentTarget));
          if (result.ok) {
            setStatus("sent");
            track("contact_form_submitted");
            event.currentTarget.reset();
            return;
          }
          setStatus("error");
          setError(result.error);
        }}
      >
        <div className="absolute -left-[9999px]" aria-hidden>
          <label>
            Company website
            <input name="company_website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <label className="block text-sm">
          Name
          <input name="name" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-sm">
          Email
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
        <label className="block text-sm">
          Company <span className="text-muted">(optional)</span>
          <input name="company" autoComplete="organization" className={fieldClass} />
        </label>
        <label className="block text-sm">
          Project type
          <select name="projectType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm">
            Budget range <span className="text-muted">(optional)</span>
            <input name="budget" className={fieldClass} />
          </label>
          <label className="block text-sm">
            Timeline <span className="text-muted">(optional)</span>
            <input name="timeline" className={fieldClass} />
          </label>
        </div>
        <label className="block text-sm">
          Message
          <textarea name="message" required rows={6} className={fieldClass} />
        </label>
        {siteKey ? <div className="cf-turnstile" data-sitekey={siteKey} /> : null}
        <button type="submit" className={buttonVariants({ variant: "primary" })} disabled={status === "pending"}>
          {status === "pending" ? "Sending…" : "Send a project brief"}
        </button>
        {status === "sent" ? (
          <p role="status" className="text-sm text-ink">
            Thanks — your brief has been sent. I&apos;ll reply within one business day.
          </p>
        ) : null}
        {status === "error" ? (
          <p role="alert" className="text-sm text-ink">
            {error} You can also email {site.email}.
          </p>
        ) : null}
      </form>
      <p className="mt-8 text-sm text-secondary">
        Prefer to talk first?{" "}
        <TrackedLink href={bookingHref} event="booking_started" className={cn("text-accent")}>
          Book a 30-min call
        </TrackedLink>
        .
      </p>
    </div>
  );
}
