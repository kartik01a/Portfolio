import { OgCard } from "@/lib/og-card";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "About Kartik Singh Bisht, full-stack developer in India";

export default function Image() {
  return new ImageResponse(
    <OgCard kicker="About" title="Kartik Singh Bisht" subtitle="Full-stack developer in Chandigarh, India" />,
    size,
  );
}
