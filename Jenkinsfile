pipeline {
  agent { label 'playwright' }
  stages {
    stage('Install') {
      steps {
        sh 'node --version && npm ci'
      }
    }
    stage('Visual tests') {
      steps {
        // Run key uploads tests; the read key lets the plugin fetch results (run keys get HTTP 403).
        applitools(readCredentialsId: 'applitools-read-api-key') {
          sh 'env | grep ^APPLITOOLS_ | grep -v API_KEY | sort'
          sh 'npx playwright test'
        }
      }
    }
  }
}
