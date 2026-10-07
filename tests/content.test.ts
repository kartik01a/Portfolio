import { feedback } from "@/content/feedback";
import { site } from "@/content/site";
import { adjacentProjects, featuredProjects, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { rateLimit } from "@/lib/rate-limit";
import { briefSchema } from "@/lib/validation";
import { describe, expect, it, vi } from "vitest";

const featuredOrder = ["brandradar", "monudesk", "optimate", "toolmorph", "inception-financial"];

describe("briefSchema", () => {
  const valid = {
    name: "Ada Lovelace",
    email: "ada@example.com",
    company: "",
    projectType: "New product" as const,
    budget: "",
    timeline: "",
    message: "We need a product from the interface through to production.",
    honeypot: "",
    turnstileToken: "",
  };

  it("accepts a valid brief and a filled honeypot", () => {
    expect(briefSchema.safeParse(valid).success).toBe(true);
    expect(briefSchema.safeParse({ ...valid, projectType: "" }).success).toBe(true);
    expect(briefSchema.safeParse({ ...valid, honeypot: "https://spam.example" }).success).toBe(true);
  });

  it("rejects a short message and an oversized name", () => {
    expect(briefSchema.safeParse({ ...valid, message: "too short" }).success).toBe(false);
    expect(briefSchema.safeParse({ ...valid, name: "a".repeat(121) }).success).toBe(false);
  });
});

describe("rateLimit", () => {
  it("blocks once the window is full and allows a new window", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-05T00:00:00Z"));
    const key = "window-test";
    expect(rateLimit(key, 2, 1_000).ok).toBe(true);
    expect(rateLimit(key, 2, 1_000).ok).toBe(true);
    expect(rateLimit(key, 2, 1_000).ok).toBe(false);
    vi.setSystemTime(new Date("2026-10-05T00:00:02Z"));
    expect(rateLimit(key, 2, 1_000).ok).toBe(true);
    vi.useRealTimers();
  });
});

describe("projects", () => {
  it("keeps featured work in public order", () => {
    expect(featuredProjects().map((project) => project.slug)).toEqual(featuredOrder);
  });

  it("walks adjacent case studies in that same order", () => {
    const slugs = [featuredOrder[0]];
    let cursor = adjacentProjects(featuredOrder[0]).next;
    while (cursor) {
      slugs.push(cursor.slug);
      cursor = adjacentProjects(cursor.slug).next;
    }
    expect(slugs).toEqual(featuredOrder);
  });

  it("publishes only https live urls", () => {
    for (const project of projects) {
      if (project.liveUrl) expect(project.liveUrl.startsWith("https://")).toBe(true);
    }
  });
});

describe("pageMetadata", () => {
  it("sets an absolute canonical for the path", () => {
    const metadata = pageMetadata({
      title: "About",
      description: "About Kartik.",
      path: "/about",
    });
    expect(metadata.alternates?.canonical).toBe(`${site.url}/about`);
  });
});

describe("feedback", () => {
  it("counts one card per feedback entry", () => {
    expect(feedback.filter((item) => item.project && item.source)).toHaveLength(feedback.length);
  });
});
