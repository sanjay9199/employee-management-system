pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sanjay9199/employee-management-system.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t employee-management-app:latest .'
            }
        }

        stage('Test') {
            steps {
                bat 'docker images employee-management-app'
            }
        }

    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
