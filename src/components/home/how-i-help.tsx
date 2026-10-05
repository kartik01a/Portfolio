import { Section } from "@/components/ui/section";
import { Boxes, Cloud, Cpu, LayoutDashboard } from "lucide-react";
import Link from "next/link";

const help = [
  {
    title: "Full-stack applications",
    detail: "One engineer across the interface, the API, and the data.",
    href: "/work/monudesk",
    icon: Boxes,
  },
  {
    title: "SaaS and product work",
    detail: "MVPs, dashboards, customer portals, admin systems, and product workflows.",
    href: "/work/monudesk",
    icon: LayoutDashboard,
  },
  {
    title: "AI features",
    detail: "Dashboards, visualization, and AI workflows on BrandRadar.",
    href: "/work/brandradar",
    icon: Cpu,
  },
  {
    title: "Delivery",
    detail: "Production deploys, from the repository through to a live release.",
    href: "/services",
    icon: Cloud,
  },
];

export function HowIHelp() {
  return (
    <Section id="help" title="One engineer across the product.">
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {help.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent/40"
            >
              <Icon className="size-5 text-accent" aria-hidden />
              <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-2 text-secondary">{item.detail}</p>
              <p className="mt-4 text-sm text-accent">See the work</p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
