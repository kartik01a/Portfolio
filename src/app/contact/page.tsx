import { BookingPanel } from "@/components/booking/booking-panel";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/layout/container";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Send Kartik Singh Bisht a project brief or book a 30-minute call. Based in Chandigarh, India (IST), with replies within one business day.",
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
    <Container className="grid gap-16 py-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <h1 className="font-display text-5xl leading-tight">Send a project brief.</h1>
        <p className="mt-4 text-secondary">
          {site.location} ({site.timezoneLabel}). {site.replyTime}.
        </p>
        <ul className="mt-8 space-y-3 text-sm">
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
      </div>
      <div className="lg:col-span-7">
        <ContactForm />
        <div className="mt-12">
          <BookingPanel />
        </div>
      </div>
    </Container>
  );
}
