import { Bot, Braces, Cloud, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { brandPaths } from "@/components/stack/brand-paths";

const fallbacks: Record<string, LucideIcon> = {
  AWS: Cloud,
  "OpenAI APIs": Bot,
  "LLM integrations": Sparkles,
  "REST APIs": Braces,
};

export function StackIcon({ name }: { name: string }) {
  const path = brandPaths[name];
  if (path) {
    return (
      <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden>
        <path d={path} fill="currentColor" />
      </svg>
    );
  }
  const Icon = fallbacks[name];
  if (!Icon) return null;
  return <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden />;
}
