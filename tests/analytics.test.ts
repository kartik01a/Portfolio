/** @vitest-environment jsdom */
import { readGaId, trackEvent } from "@/lib/analytics";
import { afterEach, describe, expect, it } from "vitest";

describe("readGaId", () => {
  it("accepts a GA4 measurement id and trims whitespace", () => {
    expect(readGaId({ GA_MEASUREMENT_ID: " G-AB12CD34EF \n" })).toBe("G-AB12CD34EF");
  });

  it("returns empty for a missing or malformed id", () => {
    expect(readGaId({})).toBe("");
    expect(readGaId({ GA_MEASUREMENT_ID: "UA-12345-1" })).toBe("");
    expect(readGaId({ GA_MEASUREMENT_ID: "G-abc\"><script>" })).toBe("");
  });
});

describe("trackEvent", () => {
  afterEach(() => {
    delete window.dataLayer;
  });

  it("does nothing when Google Analytics is not loaded", () => {
    expect(() => trackEvent("resume_download")).not.toThrow();
    expect(window.dataLayer).toBeUndefined();
  });
});
