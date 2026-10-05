import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { hasPortrait, Portrait } from "@/components/hero/portrait";
import { HeroDiagram } from "@/components/projects/product-frame";
import { ProjectCard } from "@/components/projects/project-card";
import { buttonVariants } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { FeedbackRail } from "@/components/home/feedback-rail";
import { featuredProjects } from "@/content/projects";
import { StackIcon } from "@/components/stack/stack-icon";
import { stack } from "@/content/stack";
import { site, calUrl } from "@/content/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

const help = [
  {
    title: "Full-stack applications",
    detail: "One engineer across the interface, the API, and the data.",
    href: "/work/monudesk",
  },
  {
    title: "SaaS and product work",
    detail: "MVPs, dashboards, customer portals, admin systems, and product workflows.",
    href: "/work/monudesk",
  },
  {
    title: "AI features",
    detail: "Dashboards, visualization, and AI workflows on BrandRadar, which measures how brands appear in LLM answers.",
    href: "/work/brandradar",
  },
  {
    title: "Delivery",
    detail: "Production deploys, from the repository through to a live release.",
    href: "/services",
  },
];

export default function HomePage() {
  const bookingHref = calUrl() || "/contact#book";
  const featured = featuredProjects();

  return (
    <>
      <section className="border-b border-border">
        <Container className="relative py-12 lg:py-16">
          <div className={cn(hasPortrait() && "lg:pr-[26.5rem]")}>
            <p className="font-mono text-xs tracking-wide text-muted uppercase">{site.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-display text-[2.5rem] leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
              {site.headline}
            </h1>
            <p className="mt-5 max-w-xl text-secondary">{site.supporting}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={bookingHref}
                event="booking_started"
                className={cn(buttonVariants({ variant: "primary", size: "wide" }), "md:hidden")}
              >
                Book a 30-min call
              </TrackedLink>
              <Link href="/contact" className={cn(buttonVariants({ variant: "secondary", size: "wide" }))}>
                Send a project brief
              </Link>
            </div>
            <p className="mt-6 max-w-xl text-sm text-secondary">
              <Link href="/work/monudesk" className="underline underline-offset-4">
                Integrations for MonuDesk (QuickBooks, payments)
              </Link>
              {" · "}
              <Link href="/work/toolmorph" className="underline underline-offset-4">
                Launched ToolMorph (18+ tools)
              </Link>
              {" · "}
              <TrackedLink href={site.links.upwork} event="upwork_click" external className="underline underline-offset-4">
                {site.upwork.rating} on Upwork ({site.upwork.reviewCount} reviews)
              </TrackedLink>
            </p>
            <p className="mt-4 flex gap-4 text-sm">
              <TrackedLink href={site.links.upwork} event="upwork_click" external className="text-accent">
                Upwork
              </TrackedLink>
              <a href={site.links.linkedin} className="text-accent" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
          <div className="mt-10 lg:absolute lg:inset-y-16 lg:right-8 lg:mt-0 lg:flex lg:w-[380px] lg:flex-col">
            {hasPortrait() ? (
              <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] shadow-[0_12px_40px_rgba(17,19,24,0.08)] lg:aspect-auto lg:min-h-0 lg:flex-1">
                <Portrait priority fill />
              </div>
            ) : null}
            <div className={cn("shrink-0", hasPortrait() && "mt-4")}>
              <HeroDiagram />
              <p className="mt-3 font-mono text-xs text-muted">
                {site.location} · {site.timezoneLabel}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20" aria-labelledby="work-heading">
        <Container>
          <FadeIn>
            <h2 id="work-heading" className="font-display text-4xl md:text-5xl">
              Selected work
            </h2>
            <p className="mt-3 max-w-xl text-secondary">
              Owned products are labeled as owned. Client work is labeled as a contribution.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-16">
            {featured.map((project) => (
              <FadeIn key={project.slug}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
          <Link href="/work" className="mt-10 inline-block text-sm text-accent">
            All work
          </Link>
        </Container>
      </section>

      <section className="border-t border-border py-20" aria-labelledby="stack-heading">
        <Container>
          <p className="font-mono text-xs tracking-wide text-muted uppercase">Stack</p>
          <h2 id="stack-heading" className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
            Tools I ship with.
          </h2>
          <p className="mt-3 max-w-xl text-secondary">Taken from the projects above and the resume. Not a wishlist.</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[18px] border border-border bg-border sm:grid-cols-2 xl:grid-cols-6">
            {stack.map((group) => (
              <article
                key={group.title}
                className={cn(
                  "bg-background p-6 md:p-8",
                  group.index === "04" || group.index === "05" ? "xl:col-span-3" : "xl:col-span-2",
                  group.index === "05" && "sm:col-span-2",
                )}
              >
                <h3 className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  <span className="text-accent">{group.index}</span>
                  <span className="mx-2 text-border" aria-hidden>
                    /
                  </span>
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                        <StackIcon name={item} />
                      </span>
                      <span className="font-display text-[1.65rem] leading-tight text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden border-y border-border bg-surface py-20" aria-labelledby="proof-heading">
        <Container>
          <FeedbackRail />
        </Container>
      </section>

      <section className="py-20" aria-labelledby="help-heading">
        <Container>
          <h2 id="help-heading" className="font-display text-4xl md:text-5xl">
            One engineer across the product.
          </h2>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {help.map((item) => (
              <div key={item.title} className="grid gap-2 py-6 md:grid-cols-12">
                <dt className="font-display text-2xl md:col-span-4">{item.title}</dt>
                <dd className="text-secondary md:col-span-6">{item.detail}</dd>
                <dd className="md:col-span-2 md:text-right">
                  <Link href={item.href} className="text-sm text-accent">
                    See the work
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container>
          <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">Have an idea worth building?</h2>
          <p className="mt-5 max-w-xl text-secondary">
            Tell me what you&apos;re working on. I&apos;ll help you figure out what to build, how to build it, and what
            it takes to get it into production.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </Container>
      </section>
    </>
  );
}
