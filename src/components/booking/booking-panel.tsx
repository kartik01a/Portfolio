import { TrackedLink } from "@/components/analytics/tracked-link";
import { site } from "@/content/site";
import { calEmbedUrl, calUrl } from "@/lib/cal-url";

export async function BookingPanel() {
  const url = await calUrl();
  const embedUrl = url ? calEmbedUrl(url) : "";
  return (
    <section id="book" className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6">
      <h2 className="font-display text-3xl">Book a 30-min call</h2>
      <p className="mt-3 text-secondary">
        {site.location} ({site.timezoneLabel}). {site.replyTime}. Slots are shown in your local timezone.
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {site.bookingWindows.map((window) => (
          <li key={window.label}>
            <span className="text-ink">{window.label}</span>
            <span className="text-muted"> · Monday–Friday · {window.audience}</span>
          </li>
        ))}
      </ul>
      {url ? (
        <div className="mt-6 overflow-hidden border border-border">
          <iframe title="Book a 30-minute call" src={embedUrl} className="h-[680px] w-full" />
        </div>
      ) : (
        <p className="mt-6 text-sm text-secondary">
          The scheduler is not connected on this deployment yet. Send a project brief, or email {site.email}.
        </p>
      )}
      {url ? (
        <TrackedLink href={url} event="booking_started" external className="mt-4 inline-block text-sm text-accent">
          Open the scheduler
        </TrackedLink>
      ) : null}
    </section>
  );
}
