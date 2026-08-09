---
name: code-review-standards-best-practices
description: 代码审查指南、多语言编码标准、双语文档要求及自动化代码质量门禁综合规范。
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# 阶段指南: 代码审查与工程质量标准

本阶段专注于建立高效的代码审查流程、跨语言整洁代码标准、文档规范及自动化代码质量门禁，保障代码库的高健康度。

## 1. 代码审查的核心目标与礼仪

*   **提早发现缺陷:** 在代码合并至主分支前拦截安全漏洞、逻辑缺陷与回归风险。
*   **知识共享:** 在工程团队内传播架构设计与最佳实践。
*   **建设性反馈:** 针对代码本身提出清晰客观的见解，提供具体的修改建议。

---

## 2. 通用整洁代码规范 (SOLID, DRY, KISS)

*   **单一职责原则 (SRP):** 函数最大长度限制为 **50 行**，超长则拆分为辅助函数。
*   **DRY 原则:** 提炼重复代码为通用模块。
*   **强类型安全:** 在各编程语言中强制启用严格类型检查。

---

## 3. 多语言技术编码标准

| 编程语言 | 格式化工具 | 静态分析 / Linter | 测试框架 |
|---|---|---|---|
| **TypeScript / Node** | Prettier | ESLint (`@typescript-eslint`) | Jest / Vitest / Playwright |
| **Python** | Black / Ruff | Ruff / MyPy | PyTest / Unittest |
| **Golang** | `gofmt` | `golangci-lint` | `go test` |
| **Java / Kotlin** | Spotless | Checkstyle / SonarLint | JUnit 5 / Mockito |
| **PHP** | PHP-CS-Fixer | PHPStan (Level 8+) | Pest / PHPUnit |
| **C# / .NET 10** | `dotnet format` | Roslyn Analyzers | xUnit / NUnit |
| **Rust** | `rustfmt` | Clippy | `cargo test` |

---

## 4. 自动化质量门禁 (Automated Quality Gates)

*   **Pre-commit Hooks (Husky + lint-staged):** 提交前自动执行代码格式化与静态检查。
*   **Commitlint:** 强制执行约定式提交规范。
*   **CI 质量门禁:** 静态检查失败或覆盖率 < 80% 时自动阻止合并。

---

## ⚡ 常用命令速查
*   `npx prettier --write .` / `black .` — 格式化所有项目代码。
*   `npx eslint . --fix` / `ruff check --fix .` — 自动修复 Linter 告警。
*   `dotnet format` / `golangci-lint run --fix` — 执行多语言自动格式化。

---

## ✅ 检查清单与完成定义 (DoD)

*   [ ] Pull Request 模板与审查规范已配置。
*   [ ] 目标技术栈的 Linter 与 Formatter 已接入 CI。
*   [ ] Pre-commit 钩子已激活。
*   [ ] README、CHANGELOG 及 API 文档保持同步更新。
