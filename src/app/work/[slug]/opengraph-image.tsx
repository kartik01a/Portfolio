import { OgCard } from "@/lib/og-card";
import { getProject } from "@/content/projects";
import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.name ?? "Work";
  const subtitle = project?.shortDescription ?? "Kartik Singh Bisht";
  const coverPath = path.join(process.cwd(), "public/images/projects", slug, "cover.webp");
  const cover = fs.existsSync(coverPath)
    ? `data:image/webp;base64,${fs.readFileSync(coverPath).toString("base64")}`
    : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAFAF7",
          color: "#111318",
        }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <OgCard kicker="Kartik Singh Bisht" title={title} subtitle={subtitle} />
        </div>
        {cover ? (
          <img
            alt=""
            src={cover}
            width={420}
            height={630}
            style={{ width: 420, height: 630, objectFit: "cover" }}
          />
        ) : null}
      </div>
    ),
    size,
  );
}
