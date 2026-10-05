"use client";

export function PrintButton() {
  return (
    <button type="button" className="text-accent" onClick={() => window.print()}>
      Print
    </button>
  );
}
