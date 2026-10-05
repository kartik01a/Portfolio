import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kartik Singh Bisht, full-stack and AI developer";

export default function Image() {
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
        <div style={{ fontSize: 24, color: "#5C6570" }}>kartiksinghbisht.com</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05 }}>Kartik Singh Bisht</div>
          <div style={{ marginTop: 16, fontSize: 32, color: "#596273" }}>Full-Stack + AI Developer</div>
        </div>
        <div style={{ fontSize: 22, color: "#1E3A8A" }}>UI → API → Data → Integrations</div>
      </div>
    ),
    size,
  );
}
