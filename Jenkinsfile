pipeline {
    agent any

    tools{
        gradle 'gradle-7.0'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing with Junit...'
                dir("/var/lib/jenkins/workspace/Mingeso/backend") {
                    sh 'gradle test'
                }

            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}