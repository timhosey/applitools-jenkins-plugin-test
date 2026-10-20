import { test, expect } from '@applitools/eyes-playwright/fixture';

test.describe('applitools.com', () => {
  test('home page renders correctly', async ({ page, eyes }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Applitools/i);

    // Deliberate visual change to exercise the design review gate.
    await page.addStyleTag({ content: 'h1, h2 { color: #e4007c !important; }' });

    await eyes.check('Home page', { fully: true });
  });
});
