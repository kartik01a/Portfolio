import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface shadow-[0_12px_40px_var(--shadow)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/40",
        className,
      )}
      {...props}
    />
  );
}
