import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { detailProjects } from "../src/content/projects";

const routes = ["/", "/about", "/work", "/services", "/contact", "/resume", "/now", "/privacy", "/missing-page"];

async function setTheme(page: Page, theme: "light" | "dark") {
  await page.addInitScript((value) => {
    localStorage.setItem("theme", value);
  }, theme);
}

test("desktop navigation reaches work, services, and about", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });
  await nav.getByRole("link", { name: "Work" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Work" })).toBeVisible();
  await nav.getByRole("link", { name: "Services" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("whole product");
  await nav.getByRole("link", { name: "About" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "About" })).toBeVisible();
});

test("mobile menu is opaque, Escape closes it, and focus returns", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menuButton = page.getByRole("button", { name: "Open menu" });
  await menuButton.click();
  const menu = page.locator("#mobile-nav");
  await expect(menu).toBeVisible();
  const background = await menu.evaluate((node) => getComputedStyle(node).backgroundColor);
  expect(background).not.toBe("rgba(0, 0, 0, 0)");
  expect(background).not.toBe("transparent");
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
  await expect(menuButton).toBeFocused();
});

test("theme choice persists across reload", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("radio", { name: "Dark theme" }).click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("contact form reports a validation error and a successful send", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("Name").fill("Ada Lovelace");
  await page.getByLabel("Email").fill("ada@example.com");
  await page.getByLabel("Project type").selectOption("New product");
  await page.getByLabel("Message").fill("Too short");
  await page.getByRole("button", { name: "Send a project brief" }).click();
  await expect(page.getByText("Add a few sentences about the project.")).toBeVisible();

  await page.getByLabel("Message").fill("We need a product from the interface through to production.");
  await page.getByRole("button", { name: "Send a project brief" }).click();
  await expect(page.getByRole("status")).toContainText("your brief has been sent");
});

test("unknown routes render the 404 page", async ({ page }) => {
  await page.goto("/missing-page");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("haven't built yet");
});

test("every case study renders", async ({ page }) => {
  for (const project of detailProjects()) {
    await page.goto(`/work/${project.slug}`);
    await expect(page.getByRole("heading", { level: 1, name: project.name })).toBeVisible();
  }
});

for (const theme of ["light", "dark"] as const) {
  test(`axe passes on public routes in ${theme}`, async ({ page }) => {
    await setTheme(page, theme);
    for (const route of routes) {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations, `${route} ${theme}`).toEqual([]);
    }
  });
}
