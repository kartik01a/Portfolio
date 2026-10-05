import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/ui/section";
import { featuredProjects } from "@/content/projects";
import Link from "next/link";

export function SelectedWork() {
  const featured = featuredProjects();
  return (
    <Section
      id="work"
      eyebrow="Work"
      title="Selected work"
      intro="Owned products are labeled as owned. Client work is labeled as a contribution."
    >
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featured.map((project, index) => (
          <Reveal key={project.slug} className={index === 0 ? "md:col-span-2" : undefined} delay={index * 0.05}>
            <ProjectCard project={project} priority={index === 0} />
          </Reveal>
        ))}
      </div>
      <Link href="/work" className="mt-8 inline-block text-sm text-accent">
        All work
      </Link>
    </Section>
  );
}
