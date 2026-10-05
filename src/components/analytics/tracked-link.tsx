"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

export function TrackedLink({
  href,
  event,
  className,
  children,
  external = false,
}: {
  href: string;
  event: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={() => track(event)}
    >
      {children}
    </a>
  );
}
