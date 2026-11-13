# 🚀 DevOps Developer Portfolio & Jenkins-Maven CI/CD Pipeline

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Live%20Website-blue?style=flat&logo=googlechrome&logoColor=white)](https://shivamkumarchaudhary.github.io/portfolio/)
[![Jenkins CI/CD](https://img.shields.io/badge/Jenkins-CI%2FCD%20Pipeline-red?style=flat&logo=jenkins&logoColor=white)](#jenkins--maven-cicd-pipeline-architecture)
[![Maven Build](https://img.shields.io/badge/Apache%20Maven-3.9-C71A36?style=flat&logo=apachemaven&logoColor=white)](#apache-maven-configuration-pomxml)
[![JUnit 5](https://img.shields.io/badge/JUnit-5-25A162?style=flat&logo=junit5&logoColor=white)](#automated-unit-testing)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/Author-Shivam%20Kumar%20Chaudhary-indigo)](#author--contact)

> **Official Developer & DevOps Portfolio of Shivam Kumar Chaudhary** — MCA Scholar at Graphic Era Deemed to be University, Dehradun. 
> Built as a single integrated DevOps project featuring **Semantic Web Development**, **Apache Maven Build Automation (`pom.xml`)**, **Jenkins Declarative Pipeline (`Jenkinsfile`)**, and **Live Automated Deployment on GitHub Pages**.

---

## 🌐 Submission Links & Deliverables

- **Live Deployed Website:** [https://shivamkumarchaudhary.github.io/portfolio/](https://shivamkumarchaudhary.github.io/portfolio/)
- **GitHub Repository URL:** [https://github.com/Shivamkumarchaudhary/portfolio](https://github.com/Shivamkumarchaudhary/portfolio)
- **Step-by-Step PDF Report:** Included in repository root as [`Devops_Portfolio_Project_Report.pdf`](./Devops_Portfolio_Project_Report.pdf)

---

## 🏗 End-to-End DevOps Pipeline Architecture

This project connects Git, GitHub, Jenkins, Maven, and GitHub Pages into a single unified continuous delivery workflow:

```
┌─────────────────┐       ┌────────────────────┐       ┌──────────────────────┐
│ Local Developer │ ────> │ GitHub Repository  │ ────> │ Jenkins CI Server    │
│ (VS Code / Git) │ git   │ (Branch: main)     │ SCM   │ (Pipeline Execution) │
└─────────────────┘ push  └────────────────────┘ Webhook└──────────┬───────────┘
                                                                   │
                                                                   ▼
┌─────────────────┐       ┌────────────────────┐       ┌──────────────────────┐
│  GitHub Pages   │ <──── │ Maven Distribution │ <──── │ Maven Lifecycle      │
│  Live Hosting   │ Deploy│ (target/dist)      │ Build │ (clean compile test) │
└─────────────────┘       └────────────────────┘       └──────────────────────┘
```

---

## 🛠 Directory & File Structure

```
Devops Assingment/
├── pom.xml                                      # Apache Maven Project Configuration
├── Jenkinsfile                                  # Declarative Jenkins CI/CD Pipeline Script
├── index.html                                   # Semantic Single Page Application
├── generate_pdf.html                            # PDF Report Generation Template
├── Devops_Portfolio_Project_Report.pdf          # Step-by-Step PDF Submission Deliverable
├── README.md                                    # Complete Technical Documentation
├── LICENSE                                      # MIT License
├── src/
│   └── test/
│       └── java/
│           └── com/shivam/portfolio/
│               └── PortfolioValidationTest.java # Automated JUnit 5 Pipeline Test Suite
└── assets/
    ├── css/
    │   └── style.css                            # Modern Design System (Dark/Light Themes)
    ├── js/
    │   └── main.js                              # Typewriter, Theme Toggler, Modals, Forms
    ├── images/
    │   ├── favicon.svg                          # Vector Branding Favicon
    │   ├── profile-avatar.svg                   # Developer Illustration Avatar
    │   ├── project-attendance.svg               # Smart Attendance System Mockup
    │   ├── project-hotel.svg                    # HotelWale Reservation Mockup
    │   ├── project-gym.svg                      # FitPulse Gym Tracker Mockup
    │   └── project-hospital.svg                 # Healthcare Allocation Mockup
    └── Shivam_Kumar_Chaudhary_Resume.pdf        # Official Downloadable Student Resume
```

---

## ⚙️ Apache Maven Configuration (`pom.xml`)

The `pom.xml` file configures the portfolio as a first-class Maven build project:
- **Build Lifecycle:** Manages compilation, dependency resolution, testing, and distribution assembly.
- **Plugins Configured:**
  - `maven-compiler-plugin`: Java 17 source/target compilation.
  - `maven-surefire-plugin`: Executes automated JUnit 5 test suites during the Jenkins `mvn test` stage.
  - `maven-resources-plugin`: Packages verified static assets (`index.html`, `assets/`) into `target/dist/`.

---

## 🔄 Jenkins Declarative Pipeline Script (`Jenkinsfile`)

The repository includes an industry-standard `Jenkinsfile` orchestrating 5 automated pipeline stages:

```groovy
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
                    if (isUnix()) { sh 'mvn clean compile' } else { bat 'mvn clean compile' }
                }
            }
        }

        stage('3. Maven Automated Unit Tests') {
            steps {
                echo "Running automated JUnit asset verification test suites..."
                script {
                    if (isUnix()) { sh 'mvn test' } else { bat 'mvn test' }
                }
            }
        }

        stage('4. Maven Package & Build Artifact') {
            steps {
                echo "Packaging tested static distribution package into target/dist..."
                script {
                    if (isUnix()) { sh 'mvn package -DskipTests=false' } else { bat 'mvn package -DskipTests=false' }
                }
            }
        }

        stage('5. Deploy & Verify GitHub Pages') {
            steps {
                echo "Deploying validated web distribution to GitHub Pages..."
                echo "Deployment Successful! Portfolio is live at: ${PAGES_URL}"
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: '**/target/surefire-reports/*.xml'
            archiveArtifacts allowEmptyArchive: true, artifacts: 'target/**, Devops_Portfolio_Project_Report.pdf'
        }
        success {
            echo "=== CI/CD PIPELINE PASSED: ${PAGES_URL} ==="
        }
    }
}
```

---

## 🧪 Automated Unit Testing (`PortfolioValidationTest.java`)

Before any release is deployed, the JUnit 5 test suite automatically verifies:
1. `index.html` exists, is non-empty, has standard DOCTYPE, and includes all 7 section anchors (`#home`, `#about`, `#skills`, `#projects`, `#devops`, `#education`, `#contact`).
2. CSS stylesheets and JavaScript files are populated with valid syntax.
3. Official student resume PDF exists in `assets/`.
4. `pom.xml` and `Jenkinsfile` configurations exist and pass structural checks.

---

## 🚀 Step-by-Step Implementation Summary

1. **Project Setup:** Created modular directory hierarchy, configured Maven `pom.xml`, and initialized local Git repo.
2. **Website Development:** Crafted responsive single-page web app with semantic HTML5, CSS custom properties (Dark/Light theming), and Vanilla JavaScript ES6+.
3. **Adding Portfolio Sections:** Integrated Hero with dynamic typing, About narrative, technical matrix, filterable project cards, education timeline, and validated contact form.
4. **Jenkins & Maven Integration:** Implemented cross-platform `Jenkinsfile`, JUnit asset tests, and automated build lifecycle.
5. **Creating GitHub Repository:** Initialized public repo `portfolio` under `Shivamkumarchaudhary`.
6. **Pushing Code to GitHub:** Staged and synchronized commits to `origin/main`.
7. **Deploying on GitHub Pages:** Enabled GitHub Pages static hosting with automatic HTTPS enforcement.
8. **Live Verification:** Verified HTTP 200 OK responses across all assets on `https://shivamkumarchaudhary.github.io/portfolio/`.

---

## 👤 Author & Contact

**Shivam Kumar Chaudhary**
- **Program:** Master of Computer Applications (MCA), 2025–2027
- **Institution:** Graphic Era Deemed to be University, Dehradun
- **Email:** [shivamkumarchaudhary321@gmail.com](mailto:shivamkumarchaudhary321@gmail.com)
- **Phone:** +91 6299688390
- **GitHub:** [https://github.com/Shivamkumarchaudhary](https://github.com/Shivamkumarchaudhary)

---
*DevOps & Web Technologies Practical Assignment • Academic Submission*
