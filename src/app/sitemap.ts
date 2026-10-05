import type { MetadataRoute } from "next";
import { detailProjects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/work", "/services", "/contact", "/resume", "/now", "/privacy"];
  const projectPaths = detailProjects().map((project) => `/work/${project.slug}`);
  return [...staticPaths, ...projectPaths].map((path) => ({
    url: new URL(path || "/", site.url).toString(),
    lastModified: new Date("2026-10-05"),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/work/") ? 0.8 : 0.6,
  }));
}
