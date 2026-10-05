/** @vitest-environment jsdom */
import { Badge } from "@/components/ui/badge";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Badge", () => {
  it("renders its label", () => {
    render(<Badge>Open</Badge>);
    expect(screen.getByText("Open")).toBeTruthy();
  });
});
