pipeline {
    agent any

    environment {
        PORT = '3000'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/eswarsgit04/simple-web-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                sh 'nohup node server.js &'
            }
        }
    }

    post {
        success {
            echo '✅ Server is running on http://localhost:3000'
        }
    }
}
