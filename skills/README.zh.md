# 📚 技能模块目录 — MyAgent

[ 🇮🇩 Bahasa Indonesia ](README.md) | [ 🇬🇧 English ](README.en.md) | [ 🇨🇳 简体中文 ](README.zh.md) | [ 🇸🇦 العربية ](README.ar.md)

---

本目录包含 10 个模块化技能指南，用于指导并规范从项目启动到发布后运维的整个软件开发生命周期 (SDLC)。

---

## 🗂️ 技能模块清单 (按 SDLC 流程顺序)

| 序号 | 模块 | 技能指南 (4 种语言) | 核心范围与简要说明 | 现成配置示例 |
|:---:|:---|:---|:---|:---:|
| **01** | **需求规划 (PRD)** | [ID](01-planning/SKILL.md) \| [EN](01-planning/SKILL.en.md) \| [ZH](01-planning/SKILL.zh.md) \| [AR](01-planning/SKILL.ar.md) | 范围界定 (Scoping)、PRD、用户故事、工期估算与初期风险防范 | — |
| **02** | **Git 工作流** | [ID](02-git-workflow/SKILL.md) \| [EN](02-git-workflow/SKILL.en.md) \| [ZH](02-git-workflow/SKILL.zh.md) \| [AR](02-git-workflow/SKILL.ar.md) | 分支策略 (Git Flow / Trunk-based)、约定式提交、PR 流程、语义化标签 | [pull-request-template.md](02-git-workflow/examples/pull-request-template.md) |
| **03** | **前端开发** | [ID](03-frontend-development/SKILL.md) \| [EN](03-frontend-development/SKILL.en.md) \| [ZH](03-frontend-development/SKILL.zh.md) \| [AR](03-frontend-development/SKILL.ar.md) | 移动优先响应式 (RWD)、Angular 17+ (Signals)、React、单会话控制、4 语言 (阿拉伯 RTL) | — |
| **04** | **后端开发** | [ID](04-backend-development/SKILL.md) \| [EN](04-backend-development/SKILL.en.md) \| [ZH](04-backend-development/SKILL.zh.md) \| [AR](04-backend-development/SKILL.ar.md) | 多语言微服务、.NET 10 LTS Native AOT、SonarQube A+、安全标头、Redis 缓存 | — |
| **05** | **代码审查与标准** | [ID](05-code-review-standards/SKILL.md) \| [EN](05-code-review-standards/SKILL.en.md) \| [ZH](05-code-review-standards/SKILL.zh.md) \| [AR](05-code-review-standards/SKILL.ar.md) | 审查礼仪、整洁代码 (SOLID/DRY)、Pre-commit 钩子、代码质量门禁 | [linter-config-examples.js](05-code-review-standards/examples/linter-config-examples.js) |
| **06** | **系统集成** | [ID](06-integration/SKILL.md) \| [EN](06-integration/SKILL.en.md) \| [ZH](06-integration/SKILL.zh.md) \| [AR](06-integration/SKILL.ar.md) | API 网关路由、严格 CORS、Correlation ID 链路追踪、内部 mTLS、契约测试 | — |
| **07** | **测试与质量保证** | [ID](07-testing/SKILL.md) \| [EN](07-testing/SKILL.en.md) \| [ZH](07-testing/SKILL.zh.md) \| [AR](07-testing/SKILL.ar.md) | SIT 与 UAT 测试矩阵、k6 性能压测、OWASP ZAP 安全扫描、自动化回归 | — |
| **08** | **CI/CD 流水线** | [ID](08-cicd-pipeline/SKILL.md) \| [EN](08-cicd-pipeline/SKILL.en.md) \| [ZH](08-cicd-pipeline/SKILL.zh.md) \| [AR](08-cicd-pipeline/SKILL.ar.md) | 流水线阶段 (Lint ➔ Test ➔ Scan ➔ Deploy)、GitHub Actions、自动回滚 | [ci-build-test.yml](08-cicd-pipeline/examples/ci-build-test.yml) |
| **09** | **容器部署与 Docker** | [ID](09-deploy/SKILL.md) \| [EN](09-deploy/SKILL.en.md) \| [ZH](09-deploy/SKILL.zh.md) \| [AR](09-deploy/SKILL.ar.md) | 多阶段 Dockerfile、Kubernetes 清单、Helm 部署、Nginx 反向代理、SSL/TLS | [Dockerfile.multistage.example](09-deploy/examples/Dockerfile.multistage.example) |
| **10** | **监控与可观测性** | [ID](10-monitoring-observability/SKILL.md) \| [EN](10-monitoring-observability/SKILL.en.md) \| [ZH](10-monitoring-observability/SKILL.zh.md) \| [AR](10-monitoring-observability/SKILL.ar.md) | 3 大可观测性支柱 (Metrics, Logs, Traces)、Prometheus/Grafana、告警与故障响应 | — |

---

## 🌍 支持的技术生态

* 🟢 **TypeScript / JavaScript:** Angular 17+ (Signals, Standalone, `@defer`), React, Next.js, Vue, NestJS (`ng test`, Vitest, ESLint, Prettier)。
* 🔵 **Python:** FastAPI, Django, Flask (PyTest, Ruff, Black, MyPy)。
* 🩵 **Golang:** Gin, Fiber, Echo, gRPC (`go test`, `golangci-lint`, `gofmt`)。
* 🔴 **Java / Kotlin:** Spring Boot, Micronaut, Quarkus (JUnit 5, Mockito, Spotless)。
* 🟣 **PHP:** Laravel, Symfony (Pest, PHPUnit, PHPStan, PHP-CS-Fixer)。
* 🔷 **C# / .NET 10:** ASP.NET Core 10 Minimal API / Web API (Native AOT, EF Core 10, xUnit, Roslyn, `dotnet format`)。
* 🦀 **Rust:** Actix-web, Axum, Tonic (`cargo test`, Clippy, `rustfmt`)。

---

## 📖 质量审计报告

完整的测试历程、错误修复、结构一致性审计和技能完整性评估详见 [laporan-analisis-skills.md](laporan-analisis-skills.md)。
