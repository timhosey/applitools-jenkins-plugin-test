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
        applitools(readCredentialsId: 'applitools-read-api-key') {
          sh 'npx playwright test'
          // eyes-storybook drives Chrome through Puppeteer. Reuse the Playwright image's Chromium: Puppeteer's
          // own Chrome download has no Linux ARM build, and newer npm versions skip that download anyway.
          sh 'PUPPETEER_EXECUTABLE_PATH=$(ls -d /ms-playwright/chromium-*/chrome-linux*/chrome | head -1) npx eyes-storybook --exitcode false'
        }
      }
    }
  }
}
