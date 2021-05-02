pipeline {
    agent any

    tools{
        gradle 'gradle-6.5.1'
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