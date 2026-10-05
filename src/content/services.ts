export const serviceGroups = [
  {
    title: "Full-stack development",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    title: "SaaS development",
    items: [
      "MVP development",
      "Customer portals",
      "Admin dashboards",
      "Authentication",
      "Role-based access",
      "Subscription and product workflows",
    ],
  },
  {
    title: "AI development",
    items: [
      "LLM integrations",
      "AI-powered features inside existing products",
      "Structured AI workflows",
    ],
    note: "BrandRadar is the published AI product work: dashboards and workflows that read LLM responses for brand visibility. ToolMorph's public site treats earlier AI experiments as historical, so this list does not describe a live AI suite there.",
  },
  {
    title: "API and integration development",
    items: [
      "REST APIs",
      "Payment systems",
      "Accounting integrations (QuickBooks on MonuDesk)",
      "External APIs",
      "Google integrations (Sheets on Inception Financial)",
      "Webhooks",
      "Data synchronization",
    ],
  },
  {
    title: "Cloud and delivery",
    items: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Deployment"],
  },
] as const;

export const engagementTypes = [
  {
    title: "Build from scratch",
    detail: "For founders who have an idea, a design, or a specification.",
  },
  {
    title: "Improve an existing product",
    detail: "For teams that need features, performance work, integrations, or fixes.",
  },
  {
    title: "Take over an existing codebase",
    detail: "For companies that need an engineer who can understand an application and continue it.",
  },
  {
    title: "Long-term development",
    detail: "For startups that need an ongoing engineering partner.",
  },
] as const;

export const engagementProcess = [
  "Discovery call (30 minutes)",
  "Written scope, timeline, and estimate",
  "Build with weekly demos and async updates",
  "Handoff: repository access, documentation, and deployment notes",
] as const;

export const faqs = [
  {
    question: "How is pricing set?",
    answer:
      "Project pricing depends on scope, complexity, and timeline. There is no public rate card. A discovery call is where that gets specific.",
  },
  {
    question: "What timezone do you work in?",
    answer:
      "India (IST, UTC+5:30). Bookable hours overlap EU morning (1:30–4:30 PM IST) and US East morning (6:30–9:30 PM IST), Monday to Friday.",
  },
  {
    question: "How do we communicate?",
    answer: "Async updates plus a weekly demo, by email or in the tool the client already uses.",
  },
  {
    question: "Who owns the code?",
    answer:
      "The client owns the code and IP for paid work. An NDA is fine before a detailed discussion.",
  },
  {
    question: "Direct contract or Upwork?",
    answer: "Either. Upwork is available when the client wants escrow.",
  },
  {
    question: "Can you take over an existing codebase?",
    answer: "Yes. Taking over an existing codebase is one of the engagement types.",
  },
] as const;

export const whyPoints = [
  "End-to-end work on an independent product (ToolMorph) and a defined scope on client products (BrandRadar, MonuDesk, Inception Financial).",
  "Production SaaS work, described as a contribution where Kartik did not own the product.",
  "Named integrations: QuickBooks and payments on MonuDesk, Google Sheets on Inception Financial.",
  "Cloud delivery that matches shipped work and the resume: AWS, Docker, and GitHub Actions.",
  "Comfortable working inside an existing codebase.",
] as const;
