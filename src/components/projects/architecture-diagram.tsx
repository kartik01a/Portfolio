export function ArchitectureDiagram({ steps, label }: { steps: readonly string[]; label?: string }) {
  return (
    <figure className="border border-border bg-surface p-5">
      {label ? (
        <figcaption className="mb-4 font-mono text-xs tracking-wide text-muted uppercase">
          {label}
        </figcaption>
      ) : null}
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={step}>
            <p className="font-mono text-sm text-ink">{step}</p>
            {index < steps.length - 1 ? (
              <p className="mt-2 font-mono text-xs text-muted" aria-hidden>
                ↓
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
