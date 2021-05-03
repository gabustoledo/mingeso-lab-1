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
                dir("/var/lib/jenkins/workspace/Mingeso/backend/build/test-results/test") {
		    sh 'touch *.xml'
                    sh 'junit *.xml'
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