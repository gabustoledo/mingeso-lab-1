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
                withSonarQubeEnv() {
                    dir("/var/lib/jenkins/workspace/Mingeso/backend"){
                        sh 'chmod +x ./gradlew'
                        sh './gradlew sonarqube'
                    }
                }
            }
        }

	    stage('JUnit'){
		    steps {
			    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                 		dir("/var/lib/jenkins/workspace/Mingeso/backend") {
						    sh 'chmod +x ./gradlew'
                    		sh './gradlew test'
					    }
                	}
		    }
	    }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                }
            }
        }

    post {
        always {
            junit '/var/lib/jenkins/workspace/Mingeso/backend/build/test-results/test/TEST-com.mingeso.lab1.testOperaciones.TestOperaciones.xml'
        }
    }
}