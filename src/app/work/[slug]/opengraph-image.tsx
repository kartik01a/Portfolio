import { ImageResponse } from "next/og";
import { getProject } from "@/content/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.name ?? "Work";
  const subtitle = project?.shortDescription ?? "Kartik Singh Bisht";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF7",
          color: "#111318",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 24, color: "#5C6570" }}>Kartik Singh Bisht</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>{title}</div>
          <div style={{ marginTop: 16, fontSize: 28, color: "#596273" }}>{subtitle}</div>
        </div>
        <div style={{ fontSize: 22, color: "#1E3A8A" }}>UI → API → Data → Integrations</div>
      </div>
    ),
    size,
  );
}
