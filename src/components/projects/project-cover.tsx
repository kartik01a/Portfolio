import type { Project } from "@/content/projects";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ViewTransition } from "react";

function coverFile(project: Project) {
  if (project.cover) return project.cover;
  const file = path.join(process.cwd(), "public/images/projects", project.slug, "cover.png");
  if (!fs.existsSync(file)) return null;
  return {
    src: `/images/projects/${project.slug}/cover.png`,
    alt: `${project.name} interface`,
  };
}

export function ProjectCover({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const cover = coverFile(project);
  console.log(cover,"cover")
  return (
    <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
      <div className="relative aspect-[16/9] overflow-hidden bg-muted-surface">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <Mock slug={project.slug} name={project.name} />
        )}
      </div>
    </ViewTransition>
  );
}

function Mock({ slug, name }: { slug: string; name: string }) {
  return (
    <div className="flex h-full flex-col bg-[radial-gradient(circle_at_top_left,var(--glow),transparent_55%)] p-5">
      <p className="font-mono text-[11px] tracking-wide text-muted uppercase">{name}</p>
      <div className="mt-4 flex-1">
        {slug === "brandradar" ? <BrandRadarMock /> : null}
        {slug === "monudesk" ? <MonuDeskMock /> : null}
        {slug === "optimate" ? <OptimateMock /> : null}
        {slug === "toolmorph" ? <ToolMorphMock /> : null}
        {slug === "inception-financial" ? <InceptionMock /> : null}
      </div>
    </div>
  );
}

function BrandRadarMock() {
  const rows = [
    ["Brand", "72%"],
    ["Rival A", "41%"],
    ["Rival B", "28%"],
  ];
  return (
    <div className="grid h-full gap-3">
      {rows.map(([label, value]) => (
        <div key={label}>
          <div className="flex justify-between font-mono text-xs text-secondary">
            <span>{label}</span>
            <span>{value}</span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-border">
            <div className="h-2 rounded-full bg-accent" style={{ width: value }} />
          </div>
        </div>
      ))}
      <p className="font-mono text-[11px] text-muted">ChatGPT · Gemini · Claude</p>
    </div>
  );
}

function MonuDeskMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface text-xs">
      {["#1042 · Paid", "#1048 · Packing", "#1051 · QuickBooks"].map((row) => (
        <p key={row} className="border-b border-border px-3 py-2 font-mono text-secondary last:border-0">
          {row}
        </p>
      ))}
    </div>
  );
}

function OptimateMock() {
  return (
    <div className="grid grid-cols-3 gap-2 text-center">
      {[
        ["Bid A", "€12.4k"],
        ["Bid B", "€9.8k"],
        ["Bid C", "€11.1k"],
      ].map(([label, value]) => (
        <div key={label} className="rounded-xl border border-border bg-surface p-3">
          <p className="font-mono text-[11px] text-muted">{label}</p>
          <p className="mt-1 font-display text-lg text-ink">{value}</p>
        </div>
      ))}
    </div>
  );
}

function ToolMorphMock() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {["JSON", "Base64", "UUID", "Regex", "Diff", "Hash"].map((tool) => (
        <div key={tool} className="rounded-lg border border-border bg-surface px-2 py-3 text-center font-mono text-xs text-ink">
          {tool}
        </div>
      ))}
    </div>
  );
}

function InceptionMock() {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="font-mono text-[11px] text-muted uppercase">Solar estimate</p>
      <p className="mt-2 font-display text-3xl text-ink">18.4 kW</p>
      <p className="mt-2 font-mono text-xs text-secondary">Sheets sync · ready</p>
    </div>
  );
}
