"use client";

import { useMounted } from "@/lib/use-mounted";
import { cn } from "@/lib/utils";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const options = [
  { id: "light", icon: Sun, label: "Light theme" },
  { id: "dark", icon: Moon, label: "Dark theme" },
  { id: "system", icon: Monitor, label: "System theme" },
] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className={cn("h-10 w-[7.75rem]", className)} aria-hidden />;
  }

  return (
    <div
      className={cn("flex rounded-full border border-border bg-surface p-0.5", className)}
      role="radiogroup"
      aria-label="Color theme"
    >
      {options.map((option) => {
        const Icon = option.icon;
        const active = theme === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.label}
            onClick={() => setTheme(option.id)}
            className={cn(
              "grid size-8 place-items-center rounded-full transition-colors",
              active ? "bg-accent text-accent-foreground" : "text-muted hover:text-ink",
            )}
          >
            <Icon className="size-3.5" aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
