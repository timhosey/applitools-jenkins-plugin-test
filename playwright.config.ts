import { defineConfig, devices } from '@playwright/test';
import type { EyesFixture } from '@applitools/eyes-playwright/fixture';

export default defineConfig<EyesFixture>({
  testDir: './tests',
  timeout: 5 * 60 * 1000,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['@applitools/eyes-playwright/reporter']],
  use: {
    baseURL: 'https://applitools.com',
    trace: 'on-first-retry',
    eyesConfig: {
      // APPLITOOLS_API_KEY is read from the environment. When run under the
      // Applitools Jenkins plugin, APPLITOOLS_BATCH_ID / APPLITOOLS_BATCH_NAME
      // are also picked up from the environment automatically.
      appName: 'Applitools Website',
      type: 'ufg',
      browsersInfo: [
        { name: 'chrome', width: 1280, height: 800 },
        { name: 'firefox', width: 1280, height: 800 },
        { name: 'safari', width: 1280, height: 800 },
        { iosDeviceInfo: { deviceName: 'iPhone 15' } },
      ],
      // Under the Jenkins plugin, let it judge diffs (yellow build + PR check); locally, keep the SDK default.
      failTestsOnDiff: process.env.APPLITOOLS_JENKINS_MANAGED ? false : undefined,
      // Experiment: rule NLP in or out as the cause of "Request timed out, likely because it was stuck".
      nlpOptions: { enabled: false },
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
