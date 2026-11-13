package com.shivam.portfolio;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import java.io.File;
import java.nio.file.Files;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Automated Maven CI/CD Test Suite for Jenkins Pipeline
 * Validates web application integrity, required assets, and structural specifications.
 */
public class PortfolioValidationTest {

    private final File baseDir = new File(".");

    @Test
    @DisplayName("Verify index.html exists, is non-empty, and contains core semantic tags")
    public void testIndexHtmlIntegrity() throws Exception {
        File indexFile = new File(baseDir, "index.html");
        assertTrue(indexFile.exists(), "index.html must exist in project root");
        assertTrue(indexFile.length() > 0, "index.html must not be empty");

        String content = Files.readString(indexFile.toPath());
        assertTrue(content.contains("<!DOCTYPE html>"), "Must declare standard HTML5 DOCTYPE");
        assertTrue(content.contains("Shivam Kumar Chaudhary"), "Must contain student name");
        assertTrue(content.contains("id=\"home\""), "Must contain #home section");
        assertTrue(content.contains("id=\"about\""), "Must contain #about section");
        assertTrue(content.contains("id=\"skills\""), "Must contain #skills section");
        assertTrue(content.contains("id=\"projects\""), "Must contain #projects section");
        assertTrue(content.contains("id=\"devops\""), "Must contain #devops section");
        assertTrue(content.contains("id=\"education\""), "Must contain #education section");
        assertTrue(content.contains("id=\"contact\""), "Must contain #contact section");
    }

    @Test
    @DisplayName("Verify CSS stylesheet and JavaScript files exist and contain rules")
    public void testAssetsIntegrity() throws Exception {
        File cssFile = new File(baseDir, "assets/css/style.css");
        assertTrue(cssFile.exists(), "assets/css/style.css must exist");
        assertTrue(cssFile.length() > 100, "style.css must contain CSS rules");

        File jsFile = new File(baseDir, "assets/js/main.js");
        assertTrue(jsFile.exists(), "assets/js/main.js must exist");
        assertTrue(jsFile.length() > 100, "main.js must contain JavaScript logic");

        File resumeFile = new File(baseDir, "assets/Shivam_Kumar_Chaudhary_Resume.pdf");
        assertTrue(resumeFile.exists(), "Official resume PDF must exist in assets/");
    }

    @Test
    @DisplayName("Verify Jenkinsfile and pom.xml exist for CI/CD automation")
    public void testDevOpsPipelineConfiguration() {
        File pomFile = new File(baseDir, "pom.xml");
        assertTrue(pomFile.exists(), "pom.xml must exist for Maven integration");

        File jenkinsFile = new File(baseDir, "Jenkinsfile");
        assertTrue(jenkinsFile.exists(), "Jenkinsfile must exist for Jenkins Pipeline integration");
    }
}
