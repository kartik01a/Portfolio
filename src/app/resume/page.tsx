import { Container } from "@/components/layout/container";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { experience } from "@/content/experience";
import { skills } from "@/content/stack";
import { projects, ownershipLabel } from "@/content/projects";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { PrintButton } from "@/components/resume/print-button";
import fs from "node:fs";
import path from "node:path";

export const metadata = pageMetadata({
  title: "Resume",
  description:
    "Resume of Kartik Singh Bisht, full-stack developer in Chandigarh, India. Freelance since January 2025. Associate software developer at 75way Technologies, 2024.",
  path: "/resume",
});

export default function ResumePage() {
  const pdfPath = path.join(process.cwd(), "public/resume/Kartik-Singh-Bisht-Resume.pdf");
  const hasPdf = fs.existsSync(pdfPath);

  return (
    <Container className="py-16">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className="font-display text-5xl">{site.name}</h1>
          <p className="mt-2 text-secondary">{site.role}</p>
          <p className="mt-1 text-sm text-muted">
            {site.location} · {site.timezoneLabel}
          </p>
        </div>
        <div className="no-print flex flex-wrap gap-4 text-sm">
          {hasPdf ? (
            <TrackedLink href="/resume/Kartik-Singh-Bisht-Resume.pdf" event="resume_download" className="text-accent">
              Download PDF
            </TrackedLink>
          ) : null}
          <a href={site.links.linkedin} className="text-accent" target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
          <TrackedLink href={site.links.upwork} event="upwork_click" external className="text-accent">
            View Upwork
          </TrackedLink>
          <PrintButton />
        </div>
      </div>
      <p className="no-print mt-4 text-sm text-muted">
        Print this page from the browser.{" "}
        {hasPdf ? null : "The PDF download appears when public/resume/Kartik-Singh-Bisht-Resume.pdf is added."}
      </p>

      <p className="mt-8 max-w-2xl text-secondary">{site.supporting}</p>
      <p className="mt-3 text-sm text-secondary">
        {site.openToFullTime
          ? `Open to full-time roles. ${site.remotePreference}. Notice period: ${site.noticePeriod}.`
          : "Not looking for a full-time role right now."}
      </p>
      <p className="mt-2 text-sm">
        <a href={`mailto:${site.email}`} className="text-accent">
          {site.email}
        </a>
      </p>

      <section className="mt-12">
        <h2 className="font-display text-3xl">Experience</h2>
        {experience.map((role) => (
          <article key={role.company} className="mt-6">
            <h3 className="text-lg">
              {role.role}, {role.company}
            </h3>
            <p className="font-mono text-xs text-muted">{role.dates}</p>
            <ul className="mt-2 list-disc pl-5 text-secondary">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl">Selected work</h2>
        <ul className="mt-4 space-y-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <a href={`/work/${project.slug}`} className="text-ink underline underline-offset-4">
                {project.name}
              </a>
              <span className="text-muted">
                {" "}
                · {ownershipLabel[project.ownership]}
                {project.year ? ` · ${project.year}` : ""}
              </span>
              <p className="text-secondary">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-3xl">Skills</h2>
        <p className="mt-4 text-secondary">{skills.join(" · ")}</p>
      </section>
    </Container>
  );
}
