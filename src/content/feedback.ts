import { site } from "@/content/site";

/** Written Upwork reviews only. PrefAI stays off until its role is confirmed. */
export const feedback = [
  { project: "Stripe / Next.js", source: "Upwork", quote: "" },
  { project: "React / Redux bug-fix", source: "Upwork", quote: "" },
  { project: "Sportcraft", source: "Upwork", quote: "" },
] as const;

export const feedbackProfileUrl = site.links.upwork;
