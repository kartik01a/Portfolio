export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-ink">{value}</p>
      <p className="mt-1 font-mono text-[11px] tracking-wide text-muted uppercase">{label}</p>
    </div>
  );
}
