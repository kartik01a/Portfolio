import { StackIcon } from "@/components/stack/stack-icon";
import { Section } from "@/components/ui/section";
import { stack } from "@/content/stack";
import { cn } from "@/lib/utils";
import { Bot, Cloud, Monitor, Server, Wrench } from "lucide-react";

const icons = {
  Frontend: Monitor,
  Backend: Server,
  Cloud,
  AI: Bot,
  Tools: Wrench,
} as const;

export function StackSection() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Tools I ship with."
      intro="Taken from the projects above and the resume. Not a wishlist."
      className="border-t border-border"
    >
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-6">
        {stack.map((group) => {
          const Icon = icons[group.title];
          return (
            <article
              key={group.title}
              className={cn(
                "bg-background p-6 transition hover:bg-surface md:p-8",
                group.index === "04" || group.index === "05" ? "xl:col-span-3" : "xl:col-span-2",
                group.index === "05" && "sm:col-span-2",
              )}
            >
              <h3 className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                <Icon className="size-3.5 text-accent" aria-hidden />
                <span className="text-accent">{group.index}</span>
                <span aria-hidden>/</span>
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                      <StackIcon name={item} />
                    </span>
                    <span className="font-display text-2xl leading-tight text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
