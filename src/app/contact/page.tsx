import { BookingPanel } from "@/components/booking/booking-panel";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Send a Next.js or full-stack project brief, or book a 30-minute call. Kartik Singh Bisht is based in Chandigarh, India (IST), and replies within one business day. Hire on Upwork.",
  path: "/contact",
});

const links = [
  { href: `mailto:${site.email}`, label: site.email, event: "" },
  { href: site.links.linkedin, label: "LinkedIn", event: "linkedin_click" },
  { href: site.links.upwork, label: "Hire me on Upwork", event: "upwork_click" },
  { href: site.links.github, label: "GitHub", event: "github_click" },
  { href: site.links.x, label: "X", event: "" },
];

export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="font-display text-5xl leading-tight text-ink">Send a project brief.</h1>
      <p className="mt-4 max-w-xl text-secondary">
        {site.location} ({site.timezoneLabel}). {site.replyTime}.
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            {link.event ? (
              <TrackedLink href={link.href} event={link.event} external={link.href.startsWith("http")} className="text-accent">
                {link.label}
              </TrackedLink>
            ) : (
              <a href={link.href} className="text-accent" target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
        <ContactForm />
        <BookingPanel />
      </div>
    </Container>
  );
}
