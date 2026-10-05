import type { Project } from "@/content/projects";
import { ownershipLabel } from "@/content/projects";

export function ProductFrame({ project }: { project: Project }) {
  return (
    <div className="flex flex-col border border-border bg-muted-surface p-6">
      <p className="font-mono text-xs tracking-wide text-muted uppercase">
        {ownershipLabel[project.ownership]}
        {project.year ? ` · ${project.year}` : ""}
      </p>
      <div className="mt-6">
        <p className="font-display text-4xl text-ink">{project.name}</p>
        <p className="mt-2 max-w-md text-secondary">{project.shortDescription}</p>
      </div>
      {project.diagram ? (
        <p className="mt-6 font-mono text-xs text-muted">{project.diagram.join(" → ")}</p>
      ) : null}
    </div>
  );
}

export function HeroDiagram() {
  const steps = ["UI", "API", "Data", "Integrations"];
  return (
    <figure>
      <figcaption className="font-mono text-xs tracking-wide text-muted uppercase">
        How the work is structured
      </figcaption>
      <ol className="mt-2 flex flex-wrap gap-x-2 font-mono text-sm text-ink">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span>{step}</span>
            {index < steps.length - 1 ? (
              <span className="text-muted" aria-hidden>
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
