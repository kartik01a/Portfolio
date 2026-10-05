import { ProjectCover } from "@/components/projects/project-cover";
import { ownershipLabel, type Project } from "@/content/projects";
import Link from "next/link";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const studyHref = project.caseStudy === "none" ? undefined : `/work/${project.slug}`;
  const body = (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_12px_40px_var(--shadow)] transition duration-300 hover:-translate-y-0.5 hover:border-accent/40">
      <ProjectCover project={project} priority={priority} />
      <div className="p-5 md:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl text-ink md:text-3xl">{project.name}</h3>
          <p className="font-mono text-[11px] tracking-wide text-muted uppercase">
            {ownershipLabel[project.ownership]}
            {project.year ? ` · ${project.year}` : ""}
          </p>
        </div>
        <p className="mt-2 max-w-xl text-secondary">{project.description}</p>
        <p className="mt-3 font-mono text-xs text-muted">{project.technologies.join(" · ")}</p>
      </div>
    </article>
  );

  return (
    <div>
      {studyHref ? (
        <Link href={studyHref} className="block">
          {body}
          <span className="sr-only">View {project.name} case study</span>
        </Link>
      ) : (
        body
      )}
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          className="mt-3 inline-block text-sm text-ink underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          Visit project
        </a>
      ) : null}
    </div>
  );
}
