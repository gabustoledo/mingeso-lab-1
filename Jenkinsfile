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
	stage('JUnit'){
		steps {
			
			dir("/var/lib/jenkins/workspace/Mingeso/backend/build/test-results/test") {
				sh 'touch hola.xml'
				sh 'rm *.xml'
			}
			catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                 			dir("/var/lib/jenkins/workspace/Mingeso/backend") {
						sh 'chmod +x ./gradlew'
                    				sh './gradlew test'
					}
                		}
			dir("/var/lib/jenkins/workspace/Mingeso/backend/build/test-results/test") {
				junit '*.xml'
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