import { TrackedLink } from "@/components/analytics/tracked-link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { calUrl } from "@/content/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function FinalCta() {
  const bookingHref = calUrl() || "/contact#book";
  return (
    <section className="relative overflow-hidden border-t border-border bg-accent py-24 text-accent-foreground">
      <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <Container className="relative">
        <h2 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">Have an idea worth building?</h2>
        <p className="mt-5 max-w-xl text-accent-foreground/80">
          Tell me what you&apos;re working on. I&apos;ll help you figure out what to build, how to build it, and what it
          takes to get it into production.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            href={bookingHref}
            event="booking_started"
            className={cn(buttonVariants({ variant: "secondary", size: "wide" }))}
          >
            Book a 30-min call
          </TrackedLink>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "wide" }), "border border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-white/10")}
          >
            Send a project brief
          </Link>
        </div>
      </Container>
    </section>
  );
}
