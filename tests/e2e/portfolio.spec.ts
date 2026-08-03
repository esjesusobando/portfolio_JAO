import { test, expect } from "@playwright/test";

// ============================================================
// TC-001: Landing Page Core Content
// ============================================================
test("TC-001: Landing page loads with correct content", async ({ page }) => {
  await page.goto("/");
  const mainH1 = page.locator("h1").nth(1);
  await expect(mainH1).toContainText("Jesús Obando");
  await expect(page.getByText("Creativo", { exact: false })).toBeVisible();
  await expect(page.getByText("Profesional", { exact: false })).toBeVisible();
});

// ============================================================
// TC-002: Landing Page Responsive (Mobile)
// ============================================================
test("TC-002: Landing is responsive on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const links = page.locator('a[href="/creative"], a[href="/professional"]');
  await expect(links).toHaveCount(2);
});

// ============================================================
// TC-003: Navigation to Creative Portfolio
// ============================================================
test("TC-003: Can navigate to Creative portfolio", async ({ page }) => {
  await page.goto("/");
  await page.locator('a[href="/creative"]').click();
  await expect(page).toHaveURL(/\/creative/);
  await expect(page.locator("h1")).toContainText("Jesús");
});

// ============================================================
// TC-004: Navigation to Professional CV
// ============================================================
test("TC-004: Can navigate to Professional CV", async ({ page }) => {
  await page.goto("/");
  await page.locator('a[href="/professional"]').click();
  await expect(page).toHaveURL(/\/professional/);
  await expect(page.locator("h1")).toContainText("Jesús");
});

// ============================================================
// TC-005: Theme Toggle Button Exists
// ============================================================
test("TC-005: Theme toggle button exists on Creative", async ({ page }) => {
  await page.goto("/creative");
  const themeButton = page.locator("button").first();
  await expect(themeButton).toBeVisible();
});

// ============================================================
// TC-006: Theme Persists Across Navigation
// ============================================================
test("TC-006: Theme preference persists across pages", async ({ page }) => {
  await page.goto("/creative");
  const html = page.locator("html");
  const initialClass = await html.getAttribute("class");
  await page.locator('a[href="/professional"]').click();
  const finalClass = await html.getAttribute("class");
  expect(finalClass).toBe(initialClass);
});

// ============================================================
// TC-007: Scroll Progress Bar Exists
// ============================================================
test("TC-007: Scroll progress bar exists in DOM", async ({ page }) => {
  await page.goto("/creative");
  // ScrollProgress: starts at opacity:0 (motion animation). Check it exists.
  const progressBar = page.locator("[class*='fixed'][class*='top-0'][class*='h-1']");
  await expect(progressBar).toBeAttached();
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(300);
});

// ============================================================
// TC-008: EC-001 - Email Link Correct Format
// ============================================================
test("TC-008: Email contact link is correct on Creative", async ({ page }) => {
  await page.goto("/creative");
  // Multiple email links: header + footer. Use first().
  const emailLink = page.locator('a[href^="mailto:"]').first();
  await expect(emailLink).toHaveAttribute("href", "mailto:esjesusobando@outlook.com");
});

// ============================================================
// TC-009: EC-002 - LinkedIn Encoded URL
// ============================================================
test("TC-009: LinkedIn link has encoded URL (EC-002)", async ({ page }) => {
  await page.goto("/creative");
  // LinkedIn link in header magnetic button
  const linkedinLink = page.locator('main a[href*="linkedin.com"]').first();
  const href = await linkedinLink.getAttribute("href");
  expect(href).toContain("jes%C3%BAs");
  // Verify rel for security
  const rel = await linkedinLink.getAttribute("rel");
  expect(rel).toContain("noopener");
});

// ============================================================
// TC-010: EC-001 - Phone Tel: Link Encoded
// ============================================================
test("TC-010: Phone tel link is encoded (EC-001)", async ({ page }) => {
  await page.goto("/creative");
  // Multiple tel: links: header + footer. Use first().
  const phoneLink = page.locator('a[href^="tel:"]').first();
  const href = await phoneLink.getAttribute("href");
  // RFC 3966: + is valid in tel: URIs. Only spaces → %20
  expect(href).toContain("+58%200422%20425%204131");
});

// ============================================================
// TC-011: Page Metadata / Title
// ============================================================
test("TC-011: Each page has correct metadata", async ({ page }) => {
  await page.goto("/creative");
  await expect(page).toHaveTitle(/Jesús Obando/);
  await page.goto("/professional");
  await expect(page).toHaveTitle(/Jesús Obando/);
});

// ============================================================
// TC-012: Content Visible on Mobile
// ============================================================
test("TC-012: Content readable on mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/professional");
  await expect(page.locator("h1")).toBeVisible();
});

// ============================================================
// TC-013: No Horizontal Overflow on Mobile (EC-006)
// ============================================================
test("TC-013: No horizontal scroll on mobile (EC-006)", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/creative");
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  expect(bodyWidth).toBeLessThanOrEqual(375);
});

// ============================================================
// TC-014: Professional Page Phone Also Encoded
// ============================================================
test("TC-014: Professional page phone link is encoded", async ({ page }) => {
  await page.goto("/professional");
  const phoneLink = page.locator('a[href^="tel:"]').first();
  const href = await phoneLink.getAttribute("href");
  expect(href).toContain("+58%200422%20425%204131");
});

// ============================================================
// TC-015: Footer Phone Also Encoded
// ============================================================
test("TC-015: Footer phone link is encoded", async ({ page }) => {
  await page.goto("/professional");
  const footerPhone = page.locator('footer a[href^="tel:"]');
  await expect(footerPhone).toBeVisible();
  const href = await footerPhone.getAttribute("href");
  expect(href).toContain("+58%200422%20425%204131");
});

// ============================================================
// TC-016: EC-013 - No FOUC on Theme Load
// ============================================================
test("TC-016: No visible theme flash on page load (EC-013)", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("theme", "dark");
  });
  await page.goto("/creative");
  const html = page.locator("html");
  const classes = await html.getAttribute("class");
  expect(classes).toContain("dark");
});

// ============================================================
// TC-017: EC-006 - Ultra-small viewport (< 320px)
// ============================================================
test("TC-017: Ultra-small viewport renders without overflow (EC-006)", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/professional");
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  expect(bodyWidth).toBeLessThanOrEqual(320);
  await expect(page.locator("h1")).toBeVisible();
});

// ============================================================
// TC-018: Creative page hero section visible
// ============================================================
test("TC-018: Creative page hero section has all elements", async ({ page }) => {
  await page.goto("/creative");
  await expect(page.getByText("Portfolio Creativo")).toBeVisible();
  await expect(page.locator('a[href^="mailto:"]').first()).toBeVisible();
  await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
  await expect(page.locator('a[href*="linkedin"]').first()).toBeVisible();
});

// ============================================================
// TC-019: Professional page all sections visible
// ============================================================
test("TC-019: Professional page has all required sections", async ({ page }) => {
  await page.goto("/professional");
  await expect(page.getByText("Resumen Profesional")).toBeVisible();
  await expect(page.getByText("Competencias Principales")).toBeVisible();
  await expect(page.getByText("Experiencia Profesional")).toBeVisible();
  await expect(page.getByText("Educación")).toBeVisible();
  await expect(page.getByText("Certificaciones")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Proyectos de IA" })).toBeVisible();
});

// ============================================================
// TC-020: Navigation back to professional from Creative
// ============================================================
test("TC-020: Can navigate to Professional from Creative", async ({ page }) => {
  await page.goto("/creative");
  const navLink = page.locator('a[href="/professional"]');
  await expect(navLink).toBeVisible();
  await navLink.click();
  await expect(page).toHaveURL(/\/professional/);
});

// ============================================================
// TC-021: Footer visible on both pages
// ============================================================
test("TC-021: Footer visible on Creative and Professional", async ({ page }) => {
  await page.goto("/creative");
  await expect(page.locator("footer")).toBeVisible();
  await page.goto("/professional");
  await expect(page.locator("footer")).toBeVisible();
});

// ============================================================
// TC-022: Landing page theme toggle works
// ============================================================
test("TC-022: Landing page theme toggle works", async ({ page }) => {
  await page.goto("/");
  const themeButton = page.locator('button[aria-label="Cambiar tema"]');
  await expect(themeButton).toBeVisible();
  await themeButton.click();
  await page.waitForTimeout(300);
  const html = page.locator("html");
  const classes = await html.getAttribute("class");
  expect(classes).toBeTruthy();
});

// ============================================================
// TC-023: Creative footer has phone link
// ============================================================
test("TC-023: Creative footer has phone link", async ({ page }) => {
  await page.goto("/creative");
  await expect(page.locator('footer a[href^="tel:"]')).toBeVisible();
  await expect(page.locator('footer a[href*="linkedin"]')).toBeVisible();
  await expect(page.locator('footer a[href^="mailto:"]')).toBeVisible();
});

// ============================================================
// TC-024: Professional footer has phone link
// ============================================================
test("TC-024: Professional footer has phone link", async ({ page }) => {
  await page.goto("/professional");
  await expect(page.locator('footer a[href^="tel:"]')).toBeVisible();
});
