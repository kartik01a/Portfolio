"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export type TimelineRole = {
  company: string;
  role: string;
  dates: string;
  summary: string;
  points: string[];
  projects: { slug: string; name: string }[];
};

export function ExperienceTimeline({ roles }: { roles: TimelineRole[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative mt-8 pl-8">
      <motion.div
        aria-hidden
        className="absolute top-1 bottom-1 left-[5px] w-px origin-top bg-accent"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <ol className="space-y-10">
        {roles.map((role) => (
          <li key={role.company} className="relative">
            <span className="absolute top-1.5 -left-8 size-3 rounded-full border-2 border-accent bg-background" />
            <p className="font-mono text-xs text-muted">{role.dates}</p>
            <h3 className="mt-1 font-display text-2xl text-ink">{role.role}</h3>
            <p className="text-secondary">{role.company}</p>
            <p className="mt-3 max-w-2xl text-secondary">{role.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-secondary">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {role.projects.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {role.projects.map((project) => (
                  <li key={project.slug}>
                    <Link href={`/work/${project.slug}`} className="text-accent">
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
