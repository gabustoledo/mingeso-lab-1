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
                sh './gradlew -v'

            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}