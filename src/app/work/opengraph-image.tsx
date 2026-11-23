import { OgCard } from "@/lib/og-card";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Selected work by Kartik Singh Bisht";

export default function Image() {
  return new ImageResponse(
    <OgCard kicker="Work" title="Selected work" subtitle="TriageFox, BrandRadar, MonuDesk, Optimate, ToolMorph" />,
    size,
  );
}
