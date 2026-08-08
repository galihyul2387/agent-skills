# 📚 Katalog Modul Skills — MyAgent

[ 🇮🇩 Bahasa Indonesia ](README.md) | [ 🇬🇧 English ](README.en.md)

---

## 🗂️ Daftar Modul Skill (Urutan SDLC)

| No | Modul | Dokumen Panduan (ID / EN) | Deskripsi Ringkas | Contoh Konfigurasi |
|:---:|:---|:---|:---|:---:|
| **01** | **Planning & PRD** | [ID](01-planning/SKILL.md) \| [EN](01-planning/SKILL.en.md) | Ruang lingkup (Scoping), PRD, User Story, estimasi & mitigasi risiko awal | — |
| **02** | **Git Workflow** | [ID](02-git-workflow/SKILL.md) \| [EN](02-git-workflow/SKILL.en.md) | Branching (Git Flow/Trunk-based), Conventional Commits, PR alur kerja, SemVer, Rich Tags | [pull-request-template.md](02-git-workflow/examples/pull-request-template.md) |
| **03** | **Frontend Development** | [ID](03-frontend-development/SKILL.md) \| [EN](03-frontend-development/SKILL.en.md) | Angular 17+ (Signals/Standalone), React, Single Session (BroadcastChannel), Aksesibilitas | — |
| **04** | **Backend Development** | [ID](04-backend-development/SKILL.md) \| [EN](04-backend-development/SKILL.en.md) | Microservices polyglot, .NET 10 LTS Native AOT, SonarQube A+, Security Headers, Caching | — |
| **05** | **Code Review & Standards** | [ID](05-code-review-standards/SKILL.md) \| [EN](05-code-review-standards/SKILL.en.md) | Etika review, Clean Code (SOLID/DRY), Pre-commit hooks, Quality gates | [linter-config-examples.js](05-code-review-standards/examples/linter-config-examples.js) |
| **06** | **Integration** | [ID](06-integration/SKILL.md) \| [EN](06-integration/SKILL.en.md) | API Gateway, CORS strict, Correlation ID request tracing, mTLS internal, E2E contract | — |
| **07** | **Testing & QA** | [ID](07-testing/SKILL.md) \| [EN](07-testing/SKILL.en.md) | Matriks uji SIT & UAT, Performance testing (k6), Security testing (OWASP ZAP), Regresi | — |
| **08** | **CI/CD Pipeline** | [ID](08-cicd-pipeline/SKILL.md) \| [EN](08-cicd-pipeline/SKILL.en.md) | Pipeline stages (Lint ➔ Test ➔ Scan ➔ Deploy), GitHub Actions / GitLab CI, Auto-rollback | [ci-build-test.yml](08-cicd-pipeline/examples/ci-build-test.yml) |
| **09** | **Deployment & Docker** | [ID](09-deploy/SKILL.md) \| [EN](09-deploy/SKILL.en.md) | Multi-stage Dockerfile, Kubernetes manifests, Helm charts, Reverse Proxy, SSL/TLS | [Dockerfile.multistage.example](09-deploy/examples/Dockerfile.multistage.example) |
| **10** | **Monitoring & Observability** | [ID](10-monitoring-observability/SKILL.md) \| [EN](10-monitoring-observability/SKILL.en.md) | 3 Pilar Observabilitas (Metrics, Logs, Traces), Prometheus/Grafana, Alerting, Incident | — |

---

## 🌍 Ekosistem & Multi-Bahasa yang Didukung

Katalog skill ini dapat diterapkan langsung pada berbagai bahasa pemrograman modern:

* 🟢 **TypeScript / JavaScript:** Angular 17+ (Signals, Standalone, `@defer`), React, Next.js, Vue, NestJS, Express (`ng test`, Vitest, ESLint, Prettier).
* 🔵 **Python:** FastAPI, Django, Flask (PyTest, Ruff, Black, MyPy).
* 🩵 **Golang:** Gin, Fiber, Echo, gRPC (`go test`, `golangci-lint`, `gofmt`).
* 🔴 **Java / Kotlin:** Spring Boot, Micronaut, Quarkus (JUnit 5, Mockito, Spotless).
* 🟣 **PHP:** Laravel, Symfony (Pest, PHPUnit, PHPStan, PHP-CS-Fixer).
* 🔷 **C# / .NET 10:** ASP.NET Core 10 Minimal API / Web API (Native AOT, EF Core 10, xUnit, Roslyn, `dotnet format`).
* 🦀 **Rust:** Actix-web, Axum, Tonic (`cargo test`, Clippy, `rustfmt`).

---

## 📖 Laporan Analisis Kualitas

Riwayat pengujian, perbaikan bug, audit konsistensi struktural, dan evaluasi kelengkapan skill terdokumentasi lengkap pada [laporan-analisis-skills.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/laporan-analisis-skills.md).
