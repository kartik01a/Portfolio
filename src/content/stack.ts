export const stack = [
  {
    index: "01",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    index: "03",
    title: "Cloud",
    items: ["AWS", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    index: "04",
    title: "AI",
    items: ["OpenAI APIs", "LLM integrations"],
  },
  {
    index: "05",
    title: "Tools",
    items: ["Git", "GitHub", "REST APIs"],
  },
] as const;

export const skills = stack.flatMap((group) => [...group.items]);
