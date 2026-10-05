import { Container } from "@/components/layout/container";
import { Portrait } from "@/components/hero/portrait";
import { experience } from "@/content/experience";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Kartik Singh Bisht is a full-stack developer in Chandigarh, India. Freelance on Upwork since 2025, previously an associate software developer at 75way Technologies.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
        <div className="contents lg:block lg:min-w-0 lg:flex-1">
          <div>
            <h1 className="font-display text-5xl md:text-6xl">About</h1>
            <p className="mt-6 text-secondary">
              I&apos;m {site.shortName}, a full-stack developer in {site.location} ({site.timezoneLabel}). I work on
              production web applications: frontend, backend, integrations, and deployment. Independent products and
              existing codebases are both in scope.
            </p>
          </div>

          <section className="order-3 mt-16 lg:order-none" aria-labelledby="experience">
        <h2 id="experience" className="font-display text-4xl">
          Experience
        </h2>
        <ol className="mt-8 space-y-10 border-l border-border pl-6">
          {experience.map((role) => (
            <li key={role.company}>
              <p className="font-mono text-xs text-muted">{role.dates}</p>
              <h3 className="mt-1 font-display text-2xl">{role.role}</h3>
              <p className="text-secondary">{role.company}</p>
              <p className="mt-3 max-w-2xl text-secondary">{role.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-secondary">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {role.projectSlugs.map((slug) => {
                  const project = getProject(slug);
                  if (!project) return null;
                  return (
                    <li key={slug}>
                      <Link href={`/work/${slug}`} className="text-accent">
                        {project.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
          </section>
        </div>
        <div className="order-2 mt-10 lg:order-none lg:mt-0 lg:w-[340px] lg:shrink-0">
          <Portrait large />
        </div>
      </div>

      <section className="mt-16 max-w-2xl" aria-labelledby="roles">
        <h2 id="roles" className="font-display text-4xl">
          Open to full-time roles
        </h2>
        {site.openToFullTime ? (
          <p className="mt-4 text-secondary">
            Yes. {site.remotePreference}. Notice period: {site.noticePeriod}. Location: {site.location}.
          </p>
        ) : (
          <p className="mt-4 text-secondary">Not looking for a full-time role right now.</p>
        )}
        <p className="mt-4 flex gap-4 text-sm">
          <Link href="/resume" className="text-accent">
            Resume
          </Link>
          <a href={site.links.linkedin} className="text-accent" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </section>

      <section className="mt-16 max-w-2xl" aria-labelledby="focus">
        <h2 id="focus" className="font-display text-4xl">
          Current focus
        </h2>
        <p className="mt-4 text-secondary">
          Contributing to Optimate&apos;s production web application, and learning AWS, Kubernetes, and Jenkins,
          alongside freelance full-stack work. ToolMorph is the independent product.
        </p>
      </section>

      <section className="mt-16 max-w-2xl" aria-labelledby="beyond">
        <h2 id="beyond" className="font-display text-4xl">
          Beyond code
        </h2>
        <p className="mt-4 text-secondary">
          Badminton, manga, and independent projects. I occasionally publish on{" "}
          <a href={site.links.youtube} className="text-accent" target="_blank" rel="noreferrer">
            YouTube
          </a>{" "}
          and{" "}
          <a href={site.links.devto} className="text-accent" target="_blank" rel="noreferrer">
            Dev.to
          </a>
          .
        </p>
      </section>
    </Container>
  );
}
