import { OgCard } from "@/lib/og-card";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Services from Kartik Singh Bisht, Next.js and full-stack developer";

export default function Image() {
  return new ImageResponse(
    <OgCard kicker="Services" title="Build the whole product" subtitle="Next.js, SaaS, integrations, and AI" />,
    size,
  );
}
