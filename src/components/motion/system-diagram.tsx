const steps = ["UI", "API", "Data", "Integrations"];

export function SystemDiagram() {
  return (
    <figure className="rounded-2xl border border-border bg-surface/80 p-4 backdrop-blur">
      <figcaption className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
        How the work is structured
      </figcaption>
      <svg viewBox="0 0 520 72" className="mt-3 w-full" role="img" aria-label="UI to API to Data to Integrations">
        <line
          x1="58"
          y1="28"
          x2="462"
          y2="28"
          stroke="currentColor"
          className="text-border motion-safe:animate-[dash_1.6s_linear_infinite]"
          strokeWidth="1.5"
          strokeDasharray="5 7"
        />
        {steps.map((step, index) => {
          const x = 40 + index * 140;
          return (
            <g key={step}>
              <circle cx={x + 18} cy="28" r="16" className="fill-accent-soft stroke-accent" strokeWidth="1.5" />
              <text
                x={x + 18}
                y="58"
                textAnchor="middle"
                className="fill-ink"
                style={{ fontSize: 12, fontFamily: "var(--font-geist-mono), monospace" }}
              >
                {step}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
