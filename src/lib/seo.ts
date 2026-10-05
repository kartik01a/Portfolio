import { site } from "@/content/site";
import { detailProjects, type Project } from "@/content/projects";
import { skills } from "@/content/stack";
import type { Metadata } from "next";

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, site.url).toString();
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string | { absolute: string };
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = typeof title === "string" ? title : title.absolute;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chandigarh",
        addressCountry: "IN",
      },
    },
    image: absoluteUrl("/images/profile/kartik.png"),
    knowsAbout: [...skills],
    alumniOf: {
      "@type": "Organization",
      name: "75way Technologies",
    },
    sameAs: [
      site.links.linkedin,
      site.links.github,
      site.links.upwork,
      site.links.x,
      site.links.youtube,
      site.links.devto,
    ],
  };
}

export function profilePageJsonLd() {
  const person = personJsonLd();
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: absoluteUrl("/about"),
    mainEntity: { ...person, "@context": undefined },
  };
}

export function breadcrumbJsonLd(project: Pick<Project, "name" | "slug">) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Work", item: absoluteUrl("/work") },
      { "@type": "ListItem", position: 3, name: project.name, item: absoluteUrl(`/work/${project.slug}`) },
    ],
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — full-stack development`,
    url: absoluteUrl("/services"),
    areaServed: "Worldwide",
    provider: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
  };
}

export function creativeWorkJsonLd(slug: string) {
  const project = detailProjects().find((item) => item.slug === slug);
  if (!project) return null;
  return {
    "@context": "https://schema.org",
    "@type": project.ownership === "owned" ? "SoftwareApplication" : "CreativeWork",
    name: project.name,
    description: project.seoDescription,
    url: absoluteUrl(`/work/${project.slug}`),
    applicationCategory: project.ownership === "owned" ? "DeveloperApplication" : undefined,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
  };
}
