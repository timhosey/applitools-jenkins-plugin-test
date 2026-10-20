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
        applitools {
          sh 'env | grep ^APPLITOOLS_ | grep -v API_KEY | sort'
          sh 'npx playwright test'
        }
      }
    }
  }
}
