---
name: testing-qa-complete-best-practices
description: Comprehensive testing and QA guide covering SIT, UAT, k6 performance load testing, OWASP ZAP security scanning, and automated test documentation.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md)

---

# Phase Guide: Final Testing, SIT, UAT, Security & Quality Assurance

This phase focuses on validating end-to-end functionality, executing System Integration Testing (SIT), User Acceptance Testing (UAT), performance benchmarks, vulnerability scanning, automated regression, and formal QA sign-off.

## 1. SIT & UAT Testing Lifecycle

*   **System Integration Testing (SIT):** Technical testing conducted by the QA team covering integrated frontend, API gateway, microservices, databases, and third-party integrations.
*   **User Acceptance Testing (UAT):** Business validation executed by Product Owners and business stakeholders to ensure acceptance criteria are satisfied.

---

## 2. Testing Documentation (Bilingual Options)

Every formal testing cycle produces structured documentation (authored in **Bahasa Indonesia** or **English** based on team needs):
*   **Test Plan:** Strategic document summarizing testing scope, schedule, environments, and resource allocation.
*   **Test Cases Matrix (SIT & UAT):** Structured matrix detailing Test IDs, execution steps, input parameters, Expected Results, and Actual Results (*Pass/Fail*).
*   **Bug Report / Issue Tracker:** Ticket records logging Severity (Critical, High, Medium, Low), Steps to Reproduce, and evidence attachments.
*   **Test Summary Report & UAT Sign-Off:** Executive report signed off by the Product Owner confirming production readiness.

---

## 3. Performance & Load Testing (k6 / JMeter)

*   **Load Testing:** Benchmark response times (P95 < 1s) and throughput under expected production traffic using **k6** or **JMeter**.
*   **Stress Testing:** Identify the breaking point and verify graceful degradation under extreme load.

---

## 4. Security Testing (OWASP Top 10 & DAST)

*   **Automated Security Scans:** Scan endpoints with **OWASP ZAP** or **Burp Suite** to detect XSS, SQLi, and misconfigurations.
*   **Container & Dependency Audits:** Scan container images with **Trivy** / `docker scout` and libraries via `npm audit` or `pip-audit`.

---

## 5. Automated Regression Testing

*   **Regression Suite:** Maintain automated E2E suites (Playwright / Cypress) executed on every PR.
*   **Smoke Testing:** Rapid health verification run immediately following deployment.

---

## ⚡ Multi-Language Command Cheat Sheet

### TypeScript / JavaScript (E2E & UI)
*   `npx playwright test --reporter=html` — Run Playwright E2E tests with HTML report.
*   `npm run test:e2e` / `npx cypress run` — Run integration and browser tests.

### Backend Testing (Multi-Language)
*   `pytest -v --cov=app` — Run Python test suite with coverage report.
*   `go test -v -race -cover ./...` — Run Go unit tests with race detection.
*   `./gradlew test jacocoTestReport` — Run Java/Kotlin test suite with JaCoCo report.
*   `dotnet test --collect:"XPlat Code Coverage"` — Run .NET 10 test suite.
*   `./vendor/bin/pest --coverage` — Run PHP Pest/PHPUnit test framework.
*   `cargo test --all-targets` — Run all unit and integration tests in Rust.

### Performance & Security Testing
*   `k6 run load-test.js` — Run k6 performance load test script.
*   `npx zap-cli quick-scan http://localhost:3000` — Run OWASP ZAP security scan.

## 🛠️ Common Troubleshooting
*   **Environment Mismatch:** Ensure test environment variables replicate production values.
*   **Flaky Tests:** Replace hardcoded delays (`sleep`) with explicit assertion polling.

## 📐 Naming Conventions
*   **Document Files:** Use descriptive *kebab-case* (e.g., `test-plan-v1.0.md`, `sit-test-cases-matrix.xlsx`).

---

## ✅ Checklist & Definition of Done (DoD)

*   [ ] Test Plan and SIT/UAT Test Cases Matrix are finalized and documented.
*   [ ] All SIT and UAT scenarios are executed with zero Critical/High open bugs.
*   [ ] Performance benchmarks (P95 < 1s) and OWASP ZAP security scans pass.
*   [ ] Automated regression test suite passes in CI.
*   [ ] Formal UAT Sign-Off is granted by the Product Owner.
