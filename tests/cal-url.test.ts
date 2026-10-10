import { calEmbedUrl, readCalUrl } from "@/lib/cal-url";
import { describe, expect, it } from "vitest";

describe("readCalUrl", () => {
  it("prefers the runtime CAL_URL over the public variable", () => {
    expect(
      readCalUrl({
        CAL_URL: "https://cal.com/kartik/30min",
        NEXT_PUBLIC_CAL_URL: "https://cal.com/other/30min",
      }),
    ).toBe("https://cal.com/kartik/30min");
  });

  it("falls back to NEXT_PUBLIC_CAL_URL when CAL_URL is unset", () => {
    expect(readCalUrl({ NEXT_PUBLIC_CAL_URL: " https://cal.com/kartik/30min " })).toBe(
      "https://cal.com/kartik/30min",
    );
  });

  it("returns an empty string when neither variable is set", () => {
    expect(readCalUrl({})).toBe("");
  });
});

describe("calEmbedUrl", () => {
  it("adds the cal.com embed flag", () => {
    expect(calEmbedUrl("https://cal.com/kartik/30min")).toBe("https://cal.com/kartik/30min?embed=true");
  });
});
