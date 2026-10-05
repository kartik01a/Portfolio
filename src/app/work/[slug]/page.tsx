import { Container } from "@/components/layout/container";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { ProductFrame } from "@/components/projects/product-frame";
import { buttonVariants } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import MonudeskStudy from "@/content/case-studies/monudesk.mdx";
import ToolmorphStudy from "@/content/case-studies/toolmorph.mdx";
import { adjacentProjects, detailProjects, getProject, ownershipLabel } from "@/content/projects";
import { calUrl } from "@/content/site";
import { creativeWorkJsonLd, pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const studies = {
  toolmorph: ToolmorphStudy,
  monudesk: MonudeskStudy,
} as const;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return detailProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.caseStudy === "none") return {};
  return pageMetadata({
    title: { absolute: `${project.seoTitle} — Kartik Singh Bisht` },
    description: project.seoDescription,
    path: `/work/${project.slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.caseStudy === "none") notFound();

  const Study = project.caseStudy === "full" ? studies[slug as keyof typeof studies] : null;
  const { previous, next } = adjacentProjects(slug);
  const bookingHref = calUrl() || "/contact#book";
  const jsonLd = creativeWorkJsonLd(slug);

  return (
    <article>
      <Container className="py-16">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          {[ownershipLabel[project.ownership], project.year, project.role].filter(Boolean).join(" · ")}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl">{project.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-secondary">{project.description}</p>
        <p className="mt-4 font-mono text-xs text-muted">{project.technologies.join(" · ")}</p>
        {project.liveUrl ? (
          <a href={project.liveUrl} className="mt-6 inline-block text-sm text-accent" target="_blank" rel="noreferrer">
            Visit project
          </a>
        ) : null}
        <div className="mt-10">
          <ProductFrame project={project} />
        </div>
        {Study ? <Study /> : <BriefBody project={project} />}
        {project.diagram ? (
          <div className="mt-14">
            <ArchitectureDiagram steps={project.diagram} label="Architecture" />
          </div>
        ) : null}
        <section className="mt-14">
          <h2 className="font-display text-3xl">Tech</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="border border-border px-3 py-1 font-mono text-xs text-ink">
                {tech}
              </li>
            ))}
          </ul>
        </section>
        <nav className="mt-14 flex flex-wrap justify-between gap-4 border-t border-border pt-6 text-sm" aria-label="More projects">
          {previous ? <Link href={`/work/${previous.slug}`}>Previous: {previous.name}</Link> : <span />}
          {next ? <Link href={`/work/${next.slug}`}>Next: {next.name}</Link> : null}
        </nav>
        <section className="mt-16">
          <h2 className="font-display text-4xl">Have a product in mind?</h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={bookingHref}
              event="booking_started"
              className={cn(buttonVariants({ variant: "primary", size: "wide" }))}
            >
              Book a 30-min call
            </TrackedLink>
            <Link href="/contact" className={cn(buttonVariants({ variant: "secondary", size: "wide" }))}>
              Send a project brief
            </Link>
          </div>
        </section>
      </Container>
      {jsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
    </article>
  );
}

function BriefBody({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  return (
    <div className="mt-12 max-w-2xl">
      <h2 className="font-display text-3xl">Context</h2>
      <p className="mt-4 text-secondary">{project.context}</p>
      <h2 className="mt-10 font-display text-3xl">What I did</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary">
        {project.contribution.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
