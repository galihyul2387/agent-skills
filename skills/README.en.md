# 📚 Skill Modules Catalog — MyAgent

[ 🇮🇩 Bahasa Indonesia ](README.md) | [ 🇬🇧 English ](README.en.md)

---

This directory contains 10 modular skill guides that instruct and standardize the entire Software Development Life Cycle (SDLC) from project inception to post-release production operations.

---

## 🗂️ Skill Modules List (SDLC Sequential Order)

| No | Module | Documentation (ID / EN) | Key Scope & Description | Ready Examples |
|:---:|:---|:---|:---|:---:|
| **01** | **Planning & PRD** | [ID](01-planning/SKILL.md) \| [EN](01-planning/SKILL.en.md) | Scope definition, PRD, User Stories, estimation & early risk mitigation | — |
| **02** | **Git Workflow** | [ID](02-git-workflow/SKILL.md) \| [EN](02-git-workflow/SKILL.en.md) | Branching (Git Flow / Trunk-based), Conventional Commits, PR flow, SemVer, Rich Tags | [pull-request-template.md](02-git-workflow/examples/pull-request-template.md) |
| **03** | **Frontend Development** | [ID](03-frontend-development/SKILL.md) \| [EN](03-frontend-development/SKILL.en.md) | Angular 17+ (Signals/Standalone), React, Single Session (BroadcastChannel), a11y (WCAG 2.1) | — |
| **04** | **Backend Development** | [ID](04-backend-development/SKILL.md) \| [EN](04-backend-development/SKILL.en.md) | Microservices, .NET 10 LTS Native AOT, SonarQube A+, Security Headers, Anti-Bot, Redis Caching | — |
| **05** | **Code Review & Standards** | [ID](05-code-review-standards/SKILL.md) \| [EN](05-code-review-standards/SKILL.en.md) | Review ethics, Clean Code (SOLID/DRY), Pre-commit hooks, Multi-language Linter gates | [linter-config-examples.js](05-code-review-standards/examples/linter-config-examples.js) |
| **06** | **Integration** | [ID](06-integration/SKILL.md) \| [EN](06-integration/SKILL.en.md) | API Gateway, Strict CORS, Correlation ID request tracing, Internal mTLS, E2E contract tests | — |
| **07** | **Testing & QA** | [ID](07-testing/SKILL.md) \| [EN](07-testing/SKILL.en.md) | SIT & UAT test matrix, Performance testing (k6), Security testing (OWASP ZAP), Automated regression | — |
| **08** | **CI/CD Pipeline** | [ID](08-cicd-pipeline/SKILL.md) \| [EN](08-cicd-pipeline/SKILL.en.md) | Pipeline stages (Lint ➔ Test ➔ Scan ➔ Deploy), GitHub Actions / GitLab CI, Automated rollback | [ci-build-test.yml](08-cicd-pipeline/examples/ci-build-test.yml) |
| **09** | **Deployment & Docker** | [ID](09-deploy/SKILL.md) \| [EN](09-deploy/SKILL.en.md) | Multi-stage Dockerfiles, Kubernetes manifests, Helm charts, Nginx Reverse Proxy, Let's Encrypt | [Dockerfile.multistage.example](09-deploy/examples/Dockerfile.multistage.example) |
| **10** | **Monitoring & Observability** | [ID](10-monitoring-observability/SKILL.md) \| [EN](10-monitoring-observability/SKILL.en.md) | 3 Observability Pillars (Metrics, Logs, Traces), Prometheus/Grafana, Alerting rules, Incident response | — |

---

## 🌍 Supported Polyglot Ecosystems

* 🟢 **TypeScript / JavaScript:** Angular 17+ (Signals, Standalone, `@defer`), React, Next.js, Vue, NestJS, Express (`ng test`, Vitest, ESLint, Prettier).
* 🔵 **Python:** FastAPI, Django, Flask (PyTest, Ruff, Black, MyPy).
* 🩵 **Golang:** Gin, Fiber, Echo, gRPC (`go test`, `golangci-lint`, `gofmt`).
* 🔴 **Java / Kotlin:** Spring Boot, Micronaut, Quarkus (JUnit 5, Mockito, Spotless).
* 🟣 **PHP:** Laravel, Symfony (Pest, PHPUnit, PHPStan, PHP-CS-Fixer).
* 🔷 **C# / .NET 10:** ASP.NET Core 10 Minimal API / Web API (Native AOT, EF Core 10, xUnit, Roslyn, `dotnet format`).
* 🦀 **Rust:** Actix-web, Axum, Tonic (`cargo test`, Clippy, `rustfmt`).

---

## 📖 Quality Audit Report

Complete testing history, bug resolution, structural consistency audits, and skill completeness benchmarks are documented in [laporan-analisis-skills.md](laporan-analisis-skills.md).
