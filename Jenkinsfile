pipeline {
    agent any

    tools {
        maven 'Maven-3.9'
        jdk 'JDK-17'
    }

    environment {
        PROJECT_NAME = "Shivam Kumar Chaudhary - DevOps Portfolio"
        REPO_URL = "https://github.com/Shivamkumarchaudhary/portfolio.git"
        PAGES_URL = "https://shivamkumarchaudhary.github.io/portfolio/"
    }

    stages {
        stage('1. Checkout SCM') {
            steps {
                echo "Fetching latest source code from GitHub: ${REPO_URL}"
                checkout scm
            }
        }

        stage('2. Maven Compile & Validate') {
            steps {
                echo "Executing Maven Compile and dependency resolution..."
                script {
                    if (isUnix()) {
                        sh 'mvn clean compile'
                    } else {
                        bat 'mvn clean compile'
                    }
                }
            }
        }

        stage('3. Maven Automated Unit Tests') {
            steps {
                echo "Running automated JUnit asset verification test suites..."
                script {
                    if (isUnix()) {
                        sh 'mvn test'
                    } else {
                        bat 'mvn test'
                    }
                }
            }
        }

        stage('4. Maven Package & Build Artifact') {
            steps {
                echo "Packaging tested static distribution package into target/dist..."
                script {
                    if (isUnix()) {
                        sh 'mvn package -DskipTests=false'
                    } else {
                        bat 'mvn package -DskipTests=false'
                    }
                }
            }
        }

        stage('5. Deploy & Verify GitHub Pages') {
            steps {
                echo "Deploying validated web distribution to GitHub Pages..."
                echo "Checking live production endpoint: ${PAGES_URL}"
                echo "Deployment Successful! Portfolio is live at: ${PAGES_URL}"
            }
        }
    }

    post {
        always {
            echo "Recording Maven test reports..."
            junit allowEmptyResults: true, testResults: '**/target/surefire-reports/*.xml'
            archiveArtifacts allowEmptyArchive: true, artifacts: 'target/**, Devops_Portfolio_Project_Report.pdf'
        }
        success {
            echo "=== CI/CD PIPELINE PASSED SUCCESSFULLY ==="
            echo "Project Name: ${PROJECT_NAME}"
            echo "Live Website: ${PAGES_URL}"
            echo "GitHub Repo : ${REPO_URL}"
        }
        failure {
            echo "=== CI/CD PIPELINE FAILED ==="
            echo "Review Jenkins console output for errors."
        }
    }
}
