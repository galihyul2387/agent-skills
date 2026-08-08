# 📚 Katalog Modul Skills — MyAgent

Folder ini berisi 10 panduan skill modular yang memandu seluruh tahapan pengembangan perangkat lunak dari inisiasi hingga pemeliharaan pasca-rilis.

---

## 🗂️ Daftar Modul Skill (Urutan SDLC)

| No | Modul | File Panduan | Deskripsi Ringkas | Contoh Konfigurasi |
|:---:|:---|:---|:---|:---:|
| **01** | **Planning & PRD** | [01-planning/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/01-planning/SKILL.md) | Ruang lingkup (Scoping), PRD, User Story, estimasi & mitigasi risiko awal | — |
| **02** | **Git Workflow** | [02-git-workflow/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/02-git-workflow/SKILL.md) | Branching (Git Flow/Trunk-based), Conventional Commits, PR alur kerja, SemVer | [pull-request-template.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/02-git-workflow/examples/pull-request-template.md) |
| **03** | **Frontend Development** | [03-frontend-development/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/03-frontend-development/SKILL.md) | Komponen UI modular, Single Session (BroadcastChannel), State Management, Aksesibilitas (WCAG 2.1) | — |
| **04** | **Backend Development** | [04-backend-development/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/04-backend-development/SKILL.md) | Arsitektur Microservices, SonarQube A+, HTTP Security Headers, Anti-Bot, Error RFC 7807, Caching | — |
| **05** | **Code Review & Standards** | [05-code-review-standards/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/05-code-review-standards/SKILL.md) | Etika review, Clean Code (SOLID/DRY), Pre-commit hooks, Quality gates | [linter-config-examples.js](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/05-code-review-standards/examples/linter-config-examples.js) |
| **06** | **Integration** | [06-integration/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/06-integration/SKILL.md) | API Gateway, CORS strict, Correlation ID request tracing, mTLS internal, E2E contract testing | — |
| **07** | **Testing & QA** | [07-testing/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/07-testing/SKILL.md) | Matriks uji SIT & UAT, Performance testing (k6), Security testing (OWASP ZAP), Automated regression | — |
| **08** | **CI/CD Pipeline** | [08-cicd-pipeline/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/08-cicd-pipeline/SKILL.md) | Pipeline stages (Lint → Test → Scan → Deploy), GitHub Actions / GitLab CI, Automated rollback | [ci-build-test.yml](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/08-cicd-pipeline/examples/ci-build-test.yml) |
| **09** | **Deployment & Docker** | [09-deploy/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/09-deploy/SKILL.md) | Multi-stage Dockerfile, Kubernetes manifests, Helm charts, Reverse Proxy (Nginx), Let's Encrypt | [Dockerfile.multistage.example](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/09-deploy/examples/Dockerfile.multistage.example) |
| **10** | **Monitoring & Observability** | [10-monitoring-observability/SKILL.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/10-monitoring-observability/SKILL.md) | 3 Pilar Observabilitas (Metrics, Logs, Traces), Prometheus/Grafana, Alerting rules, Incident response | — |

---

## 🌍 Ekosistem & Multi-Bahasa yang Didukung

Katalog skill ini dapat diterapkan langsung pada berbagai bahasa pemrograman modern:

* 🟢 **TypeScript / JavaScript:** Node.js, Next.js, React, Vue, NestJS, Express (Jest, ESLint, Prettier).
* 🔵 **Python:** FastAPI, Django, Flask (PyTest, Ruff, Black, MyPy).
* 🩵 **Golang:** Gin, Fiber, Echo, gRPC (`go test`, `golangci-lint`, `gofmt`).
* 🔴 **Java / Kotlin:** Spring Boot, Micronaut, Quarkus (JUnit 5, Mockito, Spotless).
* 🟣 **PHP:** Laravel, Symfony (Pest, PHPUnit, PHPStan, PHP-CS-Fixer).
* 🔷 **C# / .NET:** ASP.NET Core Minimal API / Web API (xUnit, Roslyn, `dotnet format`).
* 🦀 **Rust:** Actix-web, Axum, Tonic (`cargo test`, Clippy, `rustfmt`).

---

## 📖 Laporan Analisis Kualitas

Riwayat pengujian, perbaikan bug, audit konsistensi struktural, dan evaluasi kelengkapan skill terdokumentasi lengkap pada [laporan-analisis-skills.md](file:///c:/Users/galih.pranoto/Data/Galih/MyAgent/skills/laporan-analisis-skills.md).
