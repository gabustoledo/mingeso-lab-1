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
                dir("/var/lib/jenkins/workspace/Mingeso/backend"){
                    withSonarQubeEnv('analyzer'){
                        sh 'chmod +x ./gradlew'
                        sh 'sudo su ./gradlew sonarqube'
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

}