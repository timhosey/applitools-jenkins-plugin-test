import { test, expect } from '@applitools/eyes-playwright/fixture';

test.describe('applitools.com', () => {
  test('home page renders correctly', async ({ page, eyes }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Applitools/i);

    await eyes.check('Home page', { fully: true });
  });
});
