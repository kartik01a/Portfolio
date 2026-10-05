import { Portrait, hasPortrait } from "@/components/hero/portrait";
import { SystemDiagram } from "@/components/motion/system-diagram";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { Container } from "@/components/layout/container";
import { site, calUrl } from "@/content/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  const bookingHref = calUrl() || "/contact#book";
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"
      />
      <div aria-hidden className="pointer-events-none absolute -top-24 right-0 size-[420px] rounded-full bg-accent/20 blur-3xl" />
      <Container className="relative py-14 lg:py-20">
        <div className={cn("lg:grid lg:items-stretch lg:gap-12", hasPortrait() && "lg:grid-cols-[minmax(0,1fr)_380px]")}>
          <div>
            <Badge>
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              {site.availability}
            </Badge>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              I build and ship SaaS products <span className="font-serif font-normal italic">end to end</span>: frontend,
              backend, integrations and AI.
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
          </div>
          {hasPortrait() ? (
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-[18px] shadow-[0_20px_60px_var(--glow)] ring-1 ring-border lg:mt-0 lg:aspect-auto">
              <Portrait priority fill />
            </div>
          ) : null}
        </div>
        <div className="mt-8 max-w-3xl">
          <SystemDiagram />
        </div>
      </Container>
    </section>
  );
}
