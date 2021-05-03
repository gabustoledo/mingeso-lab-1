pipeline {
    agent any

    tools{
        gradle 'gradle-6.8.3'
        hudson.plugins.sonar.SonarRunnerInstallation 'sonarcloud'
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
                dir("/var/lib/jenkins/workspace/Mingeso") {
                    withSonarQubeEnv('sonarcloud'){
	                    sh "./gradlew sonarqube"
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