import { Container } from "@/components/layout/container";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { ProjectCover } from "@/components/projects/project-cover";
import { buttonVariants } from "@/components/ui/button";
import { TrackedLink } from "@/components/analytics/tracked-link";
import BrandradarStudy from "@/content/case-studies/brandradar.mdx";
import MonudeskStudy from "@/content/case-studies/monudesk.mdx";
import ToolmorphStudy from "@/content/case-studies/toolmorph.mdx";
import { adjacentProjects, detailProjects, getProject, ownershipLabel, type Project } from "@/content/projects";
import { calUrl } from "@/content/site";
import { breadcrumbJsonLd, creativeWorkJsonLd, pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const studies = {
  brandradar: BrandradarStudy,
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
  const jsonLd = [creativeWorkJsonLd(slug), breadcrumbJsonLd(project)].filter(Boolean);

  return (
    <article>
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div>
            <p className="font-mono text-xs tracking-wide text-muted uppercase">
              {[ownershipLabel[project.ownership], project.year, project.role].filter(Boolean).join(" · ")}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-ink md:text-6xl">{project.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-secondary">{project.description}</p>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <ProjectCover project={project} priority />
            </div>
            {Study ? <Study /> : <BriefBody project={project} />}
            {project.gallery && project.gallery.length > 0 ? (
              <section className="mt-14" aria-labelledby="gallery-title">
                <h2 id="gallery-title" className="font-display text-3xl text-ink">
                  Gallery
                </h2>
                <div className="mt-6 grid gap-4">
                  {project.gallery.map((image) => (
                    <div key={image.src} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 800px, 100vw" />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
            {project.diagram ? (
              <div className="mt-14">
                <ArchitectureDiagram steps={project.diagram} label="Architecture" />
              </div>
            ) : null}
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-24">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">Role</dt>
                <dd className="mt-1 text-ink">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">Dates</dt>
                <dd className="mt-1 text-ink">{project.year || "—"}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-border px-2 py-1 font-mono text-[11px] text-ink">
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            {project.liveUrl ? (
              <a href={project.liveUrl} className="mt-6 inline-block text-sm text-accent" target="_blank" rel="noreferrer">
                Visit project
              </a>
            ) : null}
          </aside>
        </div>
        <nav className="mt-14 flex flex-wrap justify-between gap-4 border-t border-border pt-6 text-sm" aria-label="More projects">
          {previous ? <Link href={`/work/${previous.slug}`}>Previous: {previous.name}</Link> : <span />}
          {next ? <Link href={`/work/${next.slug}`}>Next: {next.name}</Link> : null}
        </nav>
        <section className="mt-16">
          <h2 className="font-display text-4xl text-ink">Have a product in mind?</h2>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}

function BriefBody({ project }: { project: Project }) {
  return (
    <div className="mt-12 max-w-2xl">
      <h2 className="font-display text-3xl text-ink">Context</h2>
      <p className="mt-4 text-secondary">{project.context}</p>
      <h2 className="mt-10 font-display text-3xl text-ink">What I did</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary">
        {project.contribution.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
