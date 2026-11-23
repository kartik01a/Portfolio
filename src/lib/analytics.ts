import { sendGAEvent } from "@next/third-parties/google";

/** Runtime read, so the ID can be set on Cloud Run without rebuilding the image. */
export function readGaId(env: Record<string, string | undefined> = process.env) {
  const id = (env.GA_MEASUREMENT_ID || "").trim();
  return /^G-[A-Z0-9]+$/.test(id) ? id : "";
}

/** Sends a GA4 event. Does nothing when Google Analytics is not configured (local dev, tests). */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  sendGAEvent("event", name, params);
}
