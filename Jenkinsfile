pipeline {
  agent { label 'playwright' }
  environment {
    STORYBOOK_DISABLE_TELEMETRY = '1'
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Visual tests') {
      steps {
        // One block = one Eyes batch, one pair of PR checks, one design review for everything inside.
        // The plugin judges visual diffs (no SDK flags needed) and fails the gate if a suite reports nothing.
        applitools(readCredentialsId: 'applitools-read-api-key', expectApps: ['Applitools Website', 'Storybook Sandbox']) {
          sh 'npx playwright test'
          // eyes-storybook drives Chrome through Puppeteer. Reuse the Playwright image's Chromium: Puppeteer's
          // own Chrome download has no Linux ARM build, and newer npm versions skip that download anyway.
          sh 'PUPPETEER_EXECUTABLE_PATH=$(ls -d /ms-playwright/chromium-*/chrome-linux*/chrome | head -1) npx eyes-storybook'
        }
      }
    }
  }
}
