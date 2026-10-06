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
  const opensNewTab = external || href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noreferrer" : undefined}
      onClick={() => track(event)}
    >
      {children}
    </a>
  );
}
