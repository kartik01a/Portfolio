import { ProductFrame } from "@/components/projects/product-frame";
import { ownershipLabel, type Project } from "@/content/projects";
import Link from "next/link";

export function ProjectCard({ project }: { project: Project }) {
  const studyHref = project.caseStudy === "none" ? undefined : `/work/${project.slug}`;
  return (
    <article className="group">
      <div className="overflow-hidden">
        <div className="transition-transform duration-300 group-hover:scale-[1.01]">
          <ProductFrame project={project} />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-3xl text-ink">{project.name}</h3>
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          {ownershipLabel[project.ownership]}
          {project.year ? ` · ${project.year}` : ""}
        </p>
      </div>
      <p className="mt-2 max-w-xl text-secondary">{project.description}</p>
      <p className="mt-3 font-mono text-xs text-muted">{project.technologies.join(" · ")}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {studyHref ? (
          <Link href={studyHref} className="text-accent hover:text-accent-hover">
            View case study
            <span aria-hidden> ↗</span>
          </Link>
        ) : null}
        {project.liveUrl ? (
          <a href={project.liveUrl} className="text-ink underline underline-offset-4" target="_blank" rel="noreferrer">
            Visit project
          </a>
        ) : null}
      </div>
    </article>
  );
}
