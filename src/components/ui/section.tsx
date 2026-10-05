import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-20", className)} aria-labelledby={title && id ? `${id}-title` : undefined}>
      <Container>
        {eyebrow ? <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">{eyebrow}</p> : null}
        {title ? (
          <h2 id={id ? `${id}-title` : undefined} className="mt-3 max-w-3xl font-display text-4xl text-ink md:text-5xl">
            {title}
          </h2>
        ) : null}
        {intro ? <p className="mt-3 max-w-xl text-secondary">{intro}</p> : null}
        {children}
      </Container>
    </section>
  );
}
