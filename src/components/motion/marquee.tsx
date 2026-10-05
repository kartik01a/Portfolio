import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="marquee-track flex w-max gap-4 motion-safe:animate-[feedback_42s_linear_infinite] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {children}
      </div>
    </div>
  );
}
