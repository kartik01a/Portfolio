import { z } from "zod";

export const projectTypes = [
  "New product",
  "Existing product",
  "Integration",
  "AI feature",
  "Full-time role",
] as const;

export const briefSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  projectType: z.enum(projectTypes),
  budget: z.string().trim().max(120).optional().or(z.literal("")),
  timeline: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(5000),
  honeypot: z.string(),
  turnstileToken: z.string().optional().or(z.literal("")),
});

export type BriefInput = z.infer<typeof briefSchema>;
