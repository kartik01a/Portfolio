import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { smallerEngagements, upworkProfileUrl } from "@/content/engagements";
import { featuredProjects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { TrackedLink } from "@/components/analytics/tracked-link";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Selected products by Kartik Singh Bisht: ToolMorph, MonuDesk, BrandRadar, Optimate, and Inception Financial, with ownership labeled on every project.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <Container className="py-16">
      <h1 className="font-display text-5xl md:text-6xl">Work</h1>
      <p className="mt-4 max-w-2xl text-secondary">
        A visual index. Case studies are separate pages, so this one stays short. Owned work and client contributions
        are labeled differently.
      </p>
      <div className="mt-14 grid gap-16">
        {featuredProjects().map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <section className="mt-20 border-t border-border pt-10" aria-labelledby="smaller-heading">
        <h2 id="smaller-heading" className="font-display text-3xl">
          Smaller engagements
        </h2>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {smallerEngagements.map((engagement) => (
            <li key={engagement.title} className="grid gap-2 py-4 md:grid-cols-12">
              <p className="font-medium md:col-span-4">{engagement.title}</p>
              <p className="text-secondary md:col-span-8">{engagement.detail}</p>
            </li>
          ))}
        </ul>
        <TrackedLink href={upworkProfileUrl} event="upwork_click" external className="mt-4 inline-block text-sm text-accent">
          View on Upwork
        </TrackedLink>
      </section>
    </Container>
  );
}
