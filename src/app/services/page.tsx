import { Container } from "@/components/layout/container";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { buttonVariants } from "@/components/ui/button";
import {
  engagementProcess,
  engagementTypes,
  faqs,
  serviceGroups,
  whyPoints,
} from "@/content/services";
import { calUrl, site } from "@/content/site";
import { pageMetadata, professionalServiceJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { Boxes, Cable, Cloud, Cpu, LayoutDashboard, type LucideIcon } from "lucide-react";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Hire a Next.js and full-stack developer in India for SaaS, AI features, integrations, and deployment. Book a call or hire on Upwork.",
  path: "/services",
});

const groupIcons: Record<(typeof serviceGroups)[number]["title"], LucideIcon> = {
  "Full-stack development": Boxes,
  "SaaS development": LayoutDashboard,
  "AI development": Cpu,
  "API and integration development": Cable,
  "Cloud and delivery": Cloud,
};

export default function ServicesPage() {
  const bookingHref = calUrl() || "/contact#book";
  return (
    <Container className="py-16">
      <p className="font-mono text-xs tracking-wide text-muted uppercase">Services</p>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-ink md:text-6xl">
        Need someone who can build the whole product?
      </h1>
      <p className="mt-5 max-w-2xl text-secondary">
        I work across frontend, backend, integrations, AI, and deployment. One engineer who can work across every
        layer of your product.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <TrackedLink
          href={bookingHref}
          event="booking_started"
          className={cn(buttonVariants({ variant: "primary", size: "wide" }))}
        >
          Book a 30-min call
        </TrackedLink>
        <Link href="/contact" className={cn(buttonVariants({ variant: "secondary", size: "wide" }))}>
          Send a project brief
        </Link>
        <TrackedLink href={site.links.upwork} event="upwork_click" external className="text-sm text-accent sm:ml-2">
          Hire me on Upwork
        </TrackedLink>
      </div>

      <section className="mt-20" aria-labelledby="services-list">
        <h2 id="services-list" className="font-display text-4xl text-ink">
          What I take on
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {serviceGroups.map((group) => {
            const Icon = groupIcons[group.title];
            return (
              <section key={group.title} className="rounded-2xl border border-border bg-surface p-6">
                <Icon className="size-5 text-accent" aria-hidden />
                <h3 className="mt-4 font-display text-2xl text-ink">{group.title}</h3>
                <ul className="mt-3 space-y-1 text-secondary">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {"note" in group && group.note ? <p className="mt-3 text-sm text-muted">{group.note}</p> : null}
              </section>
            );
          })}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="engagements">
        <h2 id="engagements" className="font-display text-4xl text-ink">
          Engagement types
        </h2>
        <p className="mt-3 text-secondary">Project pricing depends on scope, complexity, and timeline.</p>
        <dl className="mt-8 divide-y divide-border border-y border-border">
          {engagementTypes.map((type) => (
            <div key={type.title} className="grid gap-2 py-5 md:grid-cols-12">
              <dt className="font-display text-2xl text-ink md:col-span-4">{type.title}</dt>
              <dd className="text-secondary md:col-span-8">{type.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-20" aria-labelledby="process">
        <h2 id="process" className="font-display text-4xl text-ink">
          How an engagement runs
        </h2>
        <p className="mt-3 text-secondary">
          {site.location} ({site.timezoneLabel}). {site.replyTime}.
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {engagementProcess.map((step, index) => (
            <li key={step} className="rounded-2xl border border-border bg-surface p-5">
              <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-ink">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20" aria-labelledby="faq">
        <h2 id="faq" className="font-display text-4xl text-ink">
          Questions
        </h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-ink [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="font-mono text-muted group-open:hidden" aria-hidden>
                    +
                  </span>
                  <span className="hidden font-mono text-muted group-open:inline" aria-hidden>
                    –
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-20" aria-labelledby="why">
        <h2 id="why" className="font-display text-4xl text-ink">
          Why this scope
        </h2>
        <ul className="mt-6 max-w-2xl list-disc space-y-3 pl-5 text-secondary">
          {whyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd()) }}
      />
    </Container>
  );
}
