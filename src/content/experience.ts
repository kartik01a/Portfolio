export type ExperienceRole = {
  role: string;
  company: string;
  dates: string;
  summary: string;
  points: string[];
  projectSlugs: string[];
};

export const experience: ExperienceRole[] = [
  {
    role: "Freelance full-stack software engineer",
    company: "Upwork",
    dates: "Jan 2025 — Present",
    summary: "Production SaaS, integrations, and AI-powered features for clients.",
    points: [
      "SaaS development",
      "AI-powered application features",
      "React, Next.js, and Node.js",
      "PostgreSQL and MongoDB",
      "Third-party integrations",
      "Production releases",
    ],
    projectSlugs: ["brandradar", "monudesk", "optimate", "toolmorph"],
  },
  {
    role: "Associate software developer",
    company: "75way Technologies",
    dates: "Jan 2024 — Dec 2024",
    summary: "Financial, education, and ecommerce applications with the product team.",
    points: [
      "Financial, education, and ecommerce applications",
      "React and JavaScript",
      "REST APIs",
      "Reusable frontend and backend patterns",
      "Collaboration with QA, design, and product",
    ],
    projectSlugs: ["inception-financial"],
  },
];
