# 🚀 Professional Developer & DevOps Portfolio

[![GitHub Pages Deployment](https://github.com/Shivamkumarchaudhary/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Shivamkumarchaudhary/portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-Website-blue?style=flat&logo=googlechrome&logoColor=white)](https://shivamkumarchaudhary.github.io/portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/Author-Shivam%20Kumar%20Chaudhary-indigo)](#author--contact)

> **Official Portfolio Website of Shivam Kumar Chaudhary** — MCA Scholar at Graphic Era Deemed to be University, Dehradun. Showcasing Full-Stack Web Development, Relational Database Architecture (MySQL), and Automated DevOps Continuous Deployment via GitHub Pages & GitHub Actions.

---

## 🌐 Live Website & Repository Links

- **Live Website URL:** [https://shivamkumarchaudhary.github.io/portfolio/](https://shivamkumarchaudhary.github.io/portfolio/)
- **GitHub Repository URL:** [https://github.com/Shivamkumarchaudhary/portfolio](https://github.com/Shivamkumarchaudhary/portfolio)
- **Step-by-Step PDF Report:** Included in the root directory as `Devops_Portfolio_Project_Report.pdf`

---

## 📋 Table of Contents

- [Overview & Architecture](#overview--architecture)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Directory Structure](#directory-structure)
- [Step-by-Step Implementation Guide](#step-by-step-implementation-guide)
  - [1. Project Setup](#1-project-setup)
  - [2. Website Development](#2-website-development)
  - [3. Portfolio Sections & Interactivity](#3-portfolio-sections--interactivity)
  - [4. Creating the GitHub Repository](#4-creating-the-github-repository)
  - [5. Pushing Project to GitHub](#5-pushing-project-to-github)
  - [6. Deploying via GitHub Pages & GitHub Actions](#6-deploying-via-github-pages--github-actions)
  - [7. Verification & Live Access](#7-verification--live-access)
- [Author & Contact](#author--contact)

---

## 🛠 Overview & Architecture

This project was built to satisfy the requirements of the **DevOps Assignment**, demonstrating the end-to-end software delivery lifecycle:

```
[Local Development] ➔ [Git Version Control] ➔ [GitHub Remote Repo] ➔ [GitHub Actions CI/CD] ➔ [GitHub Pages Edge CDN]
     (VS Code)              (Branch main)       (Shivamkumarchaudhary)    (Automated Artifact)      (200 OK Live Site)
```

### Key Highlights
- **Zero-Dependency Architecture:** Pure semantic HTML5, modern CSS3 (with Custom Properties for dark/light theming), and Vanilla JavaScript (ES6+).
- **Automated CI/CD:** Leverages GitHub Actions (`deploy.yml`) to deploy new commits immediately to GitHub Pages.
- **Responsive & Accessible:** Fluid grid and flexbox layout tested on desktop, tablet, and mobile screens.
- **Embedded Resume:** Direct downloadable access to Shivam Kumar Chaudhary's official resume PDF.

---

## ✨ Key Features

1. **Modern Dark / Light Theme Engine:** Smooth theme toggling with automatic user preference caching in `localStorage`.
2. **Dynamic Hero Section:** Typing animation highlighting various roles, interactive call-to-actions, and quick statistics counters.
3. **About & Background:** Summary of academic journey at Graphic Era University and core software values.
4. **Skills Matrix:** Categorized technical competencies across Web Dev, DevOps, Database/Backend, and Tools.
5. **Interactive Projects Gallery:** Filterable portfolio cards with preview modals and direct GitHub repository links.
6. **DevOps Pipeline Showcase:** Visual 4-stage deployment architecture breakdown and interactive terminal simulation.
7. **Education & Certifications Timeline:** Highlight of MCA, BCA, INCAPP Web Development certificate, and university contests.
8. **Contact Section & Client-Side Validation:** Form verification with animated toast notifications and social links.

---

## 🧰 Technology Stack

| Domain | Technologies & Tools |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), Font Awesome 6, Google Fonts (Inter, JetBrains Mono) |
| **Styling** | CSS Custom Properties, Glassmorphism, CSS Grid, Flexbox, Media Queries |
| **DevOps & Hosting** | Git, GitHub, GitHub Pages, GitHub Actions CI/CD, HTTPS / SSL |
| **Development Tools** | Visual Studio Code, IntelliJ IDEA, Google Chrome DevTools |

---

## 📁 Directory Structure

```
Devops Assingment/
├── .github/
│   └── workflows/
│       └── deploy.yml            # CI/CD deployment workflow
├── assets/
│   ├── css/
│   │   └── style.css             # Main styling & theme definitions
│   ├── js/
│   │   └── main.js               # Dynamic scripts, filters, modal, theme toggle
│   ├── images/
│   │   ├── favicon.svg           # High-resolution vector favicon
│   │   ├── profile-avatar.svg    # Developer avatar illustration
│   │   ├── project-attendance.svg# Mockup for Smart Attendance System
│   │   ├── project-hotel.svg     # Mockup for HotelWale platform
│   │   ├── project-gym.svg       # Mockup for FitPulse Gym Tracker
│   │   └── project-hospital.svg  # Mockup for Hospital Bed Allocation
│   └── Shivam_Kumar_Chaudhary_Resume.pdf # Official downloadable resume
├── index.html                    # Semantic HTML5 single-page application
├── README.md                     # Project documentation & GitHub overview
├── LICENSE                       # MIT License
└── Devops_Portfolio_Project_Report.pdf # Comprehensive Step-by-Step PDF submission
```

---

## 🚀 Step-by-Step Implementation Guide

### 1. Project Setup
- Created clean workspace directory `c:\Users\shiva\Downloads\Devops Assingment`.
- Initialized standard directory hierarchy separating assets (`css/`, `js/`, `images/`) and workflows (`.github/workflows/`).
- Configured local Git repository tracking.

### 2. Website Development
- Wrote modular semantic HTML5 in `index.html` with accessibility labels (`aria-label`) and SEO metadata.
- Built `assets/css/style.css` supporting dynamic CSS custom variables (`--bg-primary`, `--accent-cyan`, etc.) for seamless Dark and Light themes.
- Programmed `assets/js/main.js` providing typing effect, filter algorithms, modal popups, and input validation.

### 3. Adding Portfolio Sections & Features
- Profile details, certifications, and academic background configured from official student resume.
- Dynamic project showcase linking directly to active repositories:
  - `https://github.com/Shivamkumarchaudhary/smart-attendance-system`
  - `https://github.com/Shivamkumarchaudhary/hotelwale`
- Interactive DevOps CI/CD pipeline visualizer with simulated terminal command outputs.

### 4. Creating the GitHub Repository
- Created public repository `portfolio` under user account `Shivamkumarchaudhary`.
- Enabled public access, issue tracking, and repository metadata.

### 5. Pushing Project to GitHub
```bash
git init
git add .
git commit -m "feat: initial commit of professional devops portfolio website"
git branch -M main
git remote add origin https://github.com/Shivamkumarchaudhary/portfolio.git
git push -u origin main
```

### 6. Deploying via GitHub Pages & GitHub Actions
- Enabled GitHub Pages under **Repository Settings > Pages**.
- Selected source: **GitHub Actions** (or `main` branch / root).
- Automated CI/CD pipeline deploys code instantly on every `git push`.

### 7. Verification & Live Access
- Live endpoint verified: `https://shivamkumarchaudhary.github.io/portfolio/`
- Validated HTTPS certificate, mobile responsive rendering, theme switching, and resume download.

---

## 👤 Author & Contact

**Shivam Kumar Chaudhary**
- **Degree:** Master of Computer Applications (MCA), 2025–2027
- **University:** Graphic Era Deemed to be University, Dehradun
- **Email:** [shivamkumarchaudhary321@gmail.com](mailto:shivamkumarchaudhary321@gmail.com)
- **Phone:** +91 6299688390
- **GitHub:** [https://github.com/Shivamkumarchaudhary](https://github.com/Shivamkumarchaudhary)

---

*Submission Date: November 2026 | Course: DevOps & Web Technologies Assignment*
