import { OgCard } from "@/lib/og-card";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kartik Singh Bisht, Next.js and full-stack developer in India";

export default function Image() {
  return new ImageResponse(
    <OgCard kicker="kartiksinghbisht.com" title="Kartik Singh Bisht" subtitle="Next.js and full-stack developer" />,
    size,
  );
}
