import { Container } from "@/components/layout/container";
import { site } from "@/content/site";
import Link from "next/link";

const pages = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/now", label: "Now" },
  { href: "/privacy", label: "Privacy" },
];

const socials = [
  { href: site.links.github, label: "GitHub" },
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.upwork, label: "Upwork" },
  { href: site.links.x, label: "X" },
  { href: site.links.youtube, label: "YouTube" },
  { href: site.links.devto, label: "Dev.to" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-2 text-sm text-secondary">{site.role}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className="text-secondary hover:text-ink">
              {page.label}
            </Link>
          ))}
        </nav>
        <ul className="flex flex-col gap-2 text-sm">
          {socials.map((social) => (
            <li key={social.href}>
              <a href={social.href} className="text-secondary hover:text-ink" rel="me noreferrer" target="_blank">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container className="border-t border-border py-4 text-xs text-muted">
        <p>© {new Date().getFullYear()} {site.name}. Built with Next.js · TypeScript</p>
      </Container>
    </footer>
  );
}
