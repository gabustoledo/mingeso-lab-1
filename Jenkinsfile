pipeline {
    agent any

    tools{
        gradle 'gradle-6.8.3'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('SonarQube'){
            steps{
                echo 'Analyze with SonarQube..'

            }
        }
        stage('Junit') {
            steps {
                echo 'Testing with Junit...'
                dir("/var/lib/jenkins/workspace/Mingeso/backend") {
                    sh './gradlew test'
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