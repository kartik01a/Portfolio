"use client";

import { calUrl, site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const bookingHref = calUrl() || "/contact#book";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="font-display text-2xl text-ink">
          {site.wordmark}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-secondary hover:text-ink">
              {link.label}
            </Link>
          ))}
          <Link href="/resume" className={cn(buttonVariants({ variant: "ghost" }), "h-10")}>
            Resume
          </Link>
          <a
            href={bookingHref}
            className={cn(buttonVariants({ variant: "primary" }), "h-10")}
            onClick={() => track("booking_started")}
          >
            Book a 30-min call
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-background md:hidden">
          <nav className="flex h-full flex-col gap-2 px-5 py-8" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-2xl font-display"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/resume" className="py-3 text-2xl font-display" onClick={() => setOpen(false)}>
              Resume
            </Link>
            <a
              href={bookingHref}
              className={cn(buttonVariants({ variant: "primary" }), "mt-6")}
              onClick={() => {
                track("booking_started");
                setOpen(false);
              }}
            >
              Book a 30-min call
            </a>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "secondary" }), "mt-3")}
              onClick={() => setOpen(false)}
            >
              Send a project brief
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
