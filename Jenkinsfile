pipeline {
  agent { label 'playwright' }
  environment {
    STORYBOOK_DISABLE_TELEMETRY = '1'
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
        // eyes-storybook drives Chrome through Puppeteer. Newer npm versions skip the install
        // script that normally downloads it, so fetch it explicitly (cached after the first run).
        sh 'npx puppeteer browsers install chrome'
      }
    }
    stage('Visual tests') {
      steps {
        // One block = one Eyes batch, one pair of PR checks, one design review for everything inside.
        applitools(readCredentialsId: 'applitools-read-api-key') {
          sh 'npx playwright test'
          sh 'npx eyes-storybook --exitcode false'
        }
      }
    }
  }
}
