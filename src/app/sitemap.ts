import type { MetadataRoute } from "next";
import { detailProjects, getProject } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/work", "/services", "/contact", "/resume", "/now", "/privacy"];
  const projectPaths = detailProjects().map((project) => `/work/${project.slug}`);
  return [...staticPaths, ...projectPaths].map((path) => {
    const slug = path.startsWith("/work/") ? path.slice("/work/".length) : "";
    const project = slug ? getProject(slug) : undefined;
    return {
      url: new URL(path || "/", site.url).toString(),
      lastModified: new Date(project?.updatedAt ?? site.contentUpdatedAt),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/work/") ? 0.8 : 0.6,
    };
  });
}
