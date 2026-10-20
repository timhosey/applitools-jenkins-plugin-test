pipeline {
  agent any
  stages {
    stage('Hello') {
      steps {
        echo "Building ${env.BRANCH_NAME} @ ${env.GIT_COMMIT}"
        withCredentials([string(credentialsId: 'applitools-api-key', variable: 'APPLITOOLS_API_KEY')]) {
          echo "Applitools key loaded (${env.APPLITOOLS_API_KEY.length()} chars)"
        }
      }
    }
  }
}