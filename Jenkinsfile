pipeline {
  agent any
  stages {
    stage('Checkout') {
      parallel {
        stage('Checkout UI') {
          steps {
            git(url: 'https://github.com/uni-mart/unimart-ui.git', branch: 'main')
          }
        }

        stage('Checkout Automation') {
          steps {
            git(url: 'https://github.com/uni-mart/unimart-ui-automation.git', branch: 'main')
          }
        }

      }
    }

  }
  environment {
    AWS_DEFAULT_REGION = 'eu-west-2'
    DOCKER_REPO = 'unimart-dkr-repo'
    DOCKER_TAG = 'latest'
  }
}