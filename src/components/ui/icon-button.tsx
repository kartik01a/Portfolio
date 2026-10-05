import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export function IconButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition hover:border-accent/40 hover:text-accent",
        className,
      )}
      {...props}
    />
  );
}
