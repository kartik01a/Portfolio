"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { calUrl, site } from "@/content/site";
import { useMounted } from "@/lib/use-mounted";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useMounted();
  const open = openPath === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const bookingHref = calUrl() || "/contact#book";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = menuRef.current;
    const button = buttonRef.current;
    const items = root ? [...root.querySelectorAll<HTMLElement>("a, button")] : [];
    items[0]?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        return;
      }
      if (event.key !== "Tab" || items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      button?.focus();
    };
  }, [open]);

  const menu = open ? (
    <div id="mobile-nav" ref={menuRef} className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-background md:hidden">
      <nav className="flex h-full flex-col gap-2 px-5 py-8" aria-label="Mobile">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
            className="py-3 font-display text-2xl"
            onClick={() => setOpenPath(null)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/resume" className="py-3 font-display text-2xl" onClick={() => setOpenPath(null)}>
          Resume
        </Link>
        <ThemeToggle className="mt-4 w-fit" />
        <a
          href={bookingHref}
          className={cn(buttonVariants({ variant: "primary" }), "mt-6")}
          onClick={() => {
            track("booking_started");
            setOpenPath(null);
          }}
        >
          Book a 30-min call
        </a>
        <Link href="/contact" className={cn(buttonVariants({ variant: "secondary" }), "mt-3")} onClick={() => setOpenPath(null)}>
          Send a project brief
        </Link>
      </nav>
    </div>
  ) : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border transition-colors",
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-background",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="font-display text-2xl text-ink">
          {site.wordmark}
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className={cn(
                "text-sm transition-colors hover:text-ink",
                isCurrent(pathname, link.href) ? "text-ink" : "text-secondary",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/resume" className={cn(buttonVariants({ variant: "ghost" }), "h-10")}>
            Resume
          </Link>
          <ThemeToggle />
          <a
            href={bookingHref}
            className={cn(buttonVariants({ variant: "primary" }), "h-10")}
            onClick={() => track("booking_started")}
          >
            Book a 30-min call
          </a>
        </nav>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath((value) => (value === pathname ? null : pathname))}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {mounted && menu ? createPortal(menu, document.body) : null}
    </header>
  );
}
