import { TrackedLink } from "@/components/analytics/tracked-link";
import { feedback, feedbackProfileUrl } from "@/content/feedback";
import { site } from "@/content/site";
import { Star } from "lucide-react";

export function FeedbackRail() {
  const loop = [...feedback, ...feedback];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="proof-heading" className="font-display text-4xl md:text-5xl">
            Clients on Upwork
          </h2>
          <p className="mt-3 text-secondary">
            {site.upwork.topRated ? "Top Rated. " : ""}
            {site.upwork.rating} from {site.upwork.reviewCount} reviews.
          </p>
        </div>
        <TrackedLink href={feedbackProfileUrl} event="upwork_click" external className="text-sm text-accent">
          Read the reviews on Upwork
        </TrackedLink>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <ul className="flex w-max gap-4 motion-safe:animate-[feedback_42s_linear_infinite] hover:[animation-play-state:paused]">
          {loop.map((item, index) => (
            <li
              key={`${item.project}-${index}`}
              aria-hidden={index >= feedback.length}
              className="w-[280px] shrink-0 border border-border bg-background p-6 sm:w-[320px]"
            >
              <p className="flex gap-1 text-accent" aria-label="5 out of 5">
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} className="size-3.5 fill-current" aria-hidden />
                ))}
              </p>
              <p className="mt-5 font-display text-2xl leading-tight text-ink">{item.project}</p>
              <p className="mt-3 font-mono text-xs tracking-wide text-muted uppercase">
                {site.upwork.rating} · {item.source}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
