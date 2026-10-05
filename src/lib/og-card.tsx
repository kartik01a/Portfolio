export function OgCard({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
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
      <div style={{ fontSize: 24, color: "#5C6570" }}>{kicker}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 64, lineHeight: 1.05 }}>{title}</div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#596273" }}>{subtitle}</div>
      </div>
      <div style={{ fontSize: 22, color: "#1E3A8A" }}>UI → API → Data → Integrations</div>
    </div>
  );
}
