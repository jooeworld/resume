pipeline {
    agent any
    stages {
        stage('Run docker file') {
            steps {
                sh 'docker build .'
            }
        }
    }
}