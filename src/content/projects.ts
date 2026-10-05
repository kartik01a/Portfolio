export type Ownership = "owned" | "led" | "contributed";
export type CaseStudyLevel = "full" | "brief" | "none";

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  year: string;
  role: string;
  ownership: Ownership;
  caseStudy: CaseStudyLevel;
  status: "live" | "private" | "archived";
  featured: boolean;
  technologies: string[];
  liveUrl?: string;
  contribution: string[];
  context?: string;
  decisions?: string[];
  challenge?: string[];
  outcome?: string[];
  diagram?: string[];
  confidential?: boolean;
  updatedAt: string;
  cover?: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const projects: Project[] = [
  {
    slug: "brandradar",
    name: "BrandRadar",
    shortDescription: "AI brand intelligence platform",
    description:
      "Contributed the product experience for an AI platform that measures how brands appear inside LLM-generated answers.",
    year: "Apr 2025 – Nov 2025",
    role: "Product engineer",
    ownership: "contributed",
    caseStudy: "full",
    status: "private",
    featured: true,
    updatedAt: "2025-11-30",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI APIs"],
    liveUrl: "https://www.brandradar.ai/",
    contribution: [
      "Interactive dashboards",
      "Data visualization",
      "Responsive frontend",
      "AI workflows",
      "API integrations",
      "Product experience",
    ],
    context:
      "BrandRadar analyzes LLM responses to understand brand visibility and compare mentions against competitors. This page covers Kartik's contribution to the product experience. He does not own BrandRadar. Internal screenshots and metrics are not published.",
    diagram: ["Dashboards", "AI workflows", "OpenAI APIs", "Brand and competitor mentions"],
    confidential: true,
    seoTitle: "Product experience for an AI brand intelligence platform",
    seoDescription:
      "Kartik Singh Bisht contributed dashboards, data visualization, and AI workflows on BrandRadar, a platform that measures how brands appear in LLM answers.",
  },
  {
    slug: "monudesk",
    name: "MonuDesk",
    shortDescription: "Order management SaaS",
    description:
      "Contributed to an order management SaaS, including QuickBooks, payments, authentication, and product workflows.",
    year: "2025–2026",
    role: "Full-stack contributor",
    ownership: "contributed",
    caseStudy: "full",
    status: "private",
    featured: true,
    updatedAt: "2026-06-01",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    liveUrl: "https://monudesk.com/",
    contribution: [
      "SaaS features across the frontend and backend",
      "Authentication and database workflows",
      "QuickBooks integration",
      "Payment integrations",
      "Support and product workflow integrations",
    ],
    context:
      "Client product. Kartik contributed to the application. He does not own MonuDesk. Screenshots, customer data, and internal metrics are not published.",
    challenge: [
      "Connecting product workflows to QuickBooks and payment providers without publishing the client's internal architecture.",
    ],
    outcome: [
      "Shipped contribution across authentication, data workflows, QuickBooks, and payments inside the production SaaS.",
    ],
    diagram: ["Client", "Next.js", "Node.js services", "PostgreSQL", "QuickBooks and payments"],
    confidential: true,
    seoTitle: "QuickBooks and payment integrations for an order management SaaS",
    seoDescription:
      "How Kartik Singh Bisht contributed to MonuDesk, an order management SaaS: QuickBooks, payments, authentication, and product workflows.",
  },
  {
    slug: "optimate",
    name: "Optimate",
    shortDescription: "Property services platform",
    description:
      "Contributing to Optimate's production web application: product workflows, frontend and backend features, and integrations.",
    year: "2026",
    role: "Product engineer",
    ownership: "contributed",
    caseStudy: "brief",
    status: "private",
    featured: true,
    updatedAt: "2026-10-01",
    technologies: ["Web application", "Product workflows", "Integrations"],
    liveUrl: "https://www.optimate.fi/",
    contribution: [
      "Product workflows",
      "Frontend and backend features",
      "Integrations",
    ],
    context:
      "Optimate is a platform for housing-company service procurement and cost analysis. This page covers Kartik's contribution, not ownership of the product. Detailed technical claims stay unpublished until they are confirmed as public-safe.",
    confidential: true,
    seoTitle: "Contribution to Optimate's production web application",
    seoDescription:
      "Kartik Singh Bisht contributes to Optimate's production web application across product workflows, features, and integrations.",
  },
  {
    slug: "toolmorph",
    name: "ToolMorph",
    shortDescription: "Developer tools platform",
    description:
      "Built and launched a platform of 18+ browser-based utilities for developer workflows.",
    year: "2025–2026",
    role: "Founder and engineer",
    ownership: "owned",
    caseStudy: "full",
    status: "live",
    featured: true,
    updatedAt: "2026-10-01",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://toolmorph.in/",
    contribution: [
      "Product direction and interface",
      "Engineering and deployment",
      "A public directory of browser-based tools",
    ],
    context:
      "Independent product. Kartik designs, builds, and maintains ToolMorph, including the docs and the public site.",
    decisions: [
      "Tools run in the browser whenever they can, so input stays on the visitor's device.",
      "No accounts. The product is a curated set of utilities, not a signup-gated suite.",
    ],
    challenge: [
      "Making everyday utilities fast and understandable without sending private input to a server.",
      "Giving each tool a stable URL so developers can find and return to it.",
    ],
    outcome: [
      "ToolMorph is live at toolmorph.in with 18+ browser-based developer utilities.",
    ],
    diagram: ["Browser", "Next.js", "In-browser tools", "No stored input when a tool runs locally"],
    confidential: false,
    seoTitle: "ToolMorph, a browser-based developer tools platform",
    seoDescription:
      "Case study of ToolMorph, a developer tools platform Kartik Singh Bisht built and launched with Next.js. 18+ browser-based utilities, no accounts.",
  },
  {
    slug: "inception-financial",
    name: "Inception Financial",
    shortDescription: "Clean energy finance client application",
    description:
      "Contributed to the client application, including solar calculation workflows and a Google Sheets integration, while at 75way Technologies.",
    year: "2024",
    role: "Associate software developer",
    ownership: "contributed",
    caseStudy: "brief",
    status: "private",
    featured: true,
    updatedAt: "2024-12-31",
    technologies: ["React", "JavaScript", "Google Sheets", "REST APIs"],
    liveUrl: "https://www.inception.financial/",
    contribution: [
      "Solar calculation workflows in the client application",
      "Google Sheets integration",
    ],
    context:
      "Work done at 75way Technologies. Inception Financial is a clean-energy finance company. Kartik contributed to the client application. He did not own the product.",
    confidential: true,
    seoTitle: "Solar calculation workflows and Google Sheets integration",
    seoDescription:
      "Kartik Singh Bisht contributed to Inception Financial's client application at 75way Technologies, including solar calculations and Google Sheets.",
  },
];

export const ownershipLabel: Record<Ownership, string> = {
  owned: "Owned",
  led: "Led",
  contributed: "Contributed",
};

export function publishedProjects() {
  return projects.filter((project) => project.caseStudy !== "none");
}

export function featuredProjects() {
  return projects.filter((project) => project.featured);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function detailProjects() {
  return projects.filter((project) => project.caseStudy === "full" || project.caseStudy === "brief");
}

export function adjacentProjects(slug: string) {
  const list = detailProjects();
  const index = list.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? list[index - 1] : undefined,
    next: index < list.length - 1 ? list[index + 1] : undefined,
  };
}
