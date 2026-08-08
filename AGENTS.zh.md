# 全局智能体与开发规则 — MyAgent 工作区 (多语言 / Polyglot)

[ 🇮🇩 Bahasa Indonesia ](AGENTS.md) | [ 🇬🇧 English ](AGENTS.en.md) | [ 🇨🇳 简体中文 ](AGENTS.zh.md) | [ 🇸🇦 العربية ](AGENTS.ar.md)

---

## 语言选择与多语言界面 (i18n & RTL)
*   **文档语言选择:** 技术文档、需求规划 (PRD)、用户故事、测试计划、测试用例、架构设计、分析报告与发布说明可根据团队或客户偏好选用 **印尼语 (Bahasa Indonesia)** 或 **英语 (English)** 编写。
*   **应用界面 4 种语言支持 (i18n & RTL):** 前端用户界面支持 4 种主流语言实时切换：**🇮🇩 印尼语 (ID)**、**🇬🇧 英语 (EN)**、**🇨🇳 中文 (ZH - 简体中文)** 和 **🇸🇦 阿拉伯语 (AR - 支持 RTL 从右到左排版)**。
*   **单文档一致性:** 确保单个文档内部使用统一的单一语言，禁止在同一文档中混用多种语言。
*   **行业标准技术命名规范:** 所有变量名、函数名、方法名、类名、接口名、文件名、API 路由路径及 Git Commit 信息 **必须 100% 保持标准英文**。

## 跨语言通用整洁代码规范 (Language-Agnostic)
*   **单一职责原则 (Clean Code & SRP):** 每个函数/方法必须承担单一职责。
*   **函数长度限制:** 单个函数最大长度限制为 **50 行** — 超过时必须拆分为子函数或辅助函数 (Helper)。
*   **严格类型与类型安全 (Strong Typing):** 在所有支持的语言中必须启用静态类型检查或类型提示（TypeScript strict mode, Python type hints, PHP `declare(strict_types=1)`, C# nullable reference types, Java/Go/Rust 静态类型）。
*   **优先不可变值 (Immutability First):** 默认优先使用不可变数据结构（JS/TS 中的 `const`，C# 中的 `readonly`/`record`，Kotlin 中的 `val`，Python/Rust 中的不可变结构）。
*   **显式错误处理 (Explicit Error Handling):** 必须显式捕获和处理异常 — 严禁留空 catch 块或忽略错误返回值。

## 各编程语言惯用规范标准

| 编程语言 | 格式化标准 | Linter / 静态分析 | 测试框架 | 核心原则 |
|---|---|---|---|---|
| **TypeScript / Node.js** | Prettier | ESLint (`@typescript-eslint`) | Jest / Vitest / Mocha | Strict mode, ES6+, 严禁无正当理由使用 `any` 或 `var` |
| **Python** | Black / Ruff | Flake8 / Ruff / MyPy | PyTest / Unittest | PEP 8, Type Hints, Virtualenv, Poetry/Pipenv |
| **Golang** | `gofmt` / `goimports` | `golangci-lint` | `go test` | 惯用 Go 语法, 显式错误检查 (`if err != nil`), 零 panic |
| **Java / Kotlin** | Spotless / Google Java | Checkstyle / SonarLint / Detekt | JUnit 5 / Mockito | SOLID, 整洁架构, Lombok/Records, Spring/Micronaut |
| **PHP** | PHP-CS-Fixer (PSR-12) | PHPStan (Level 8+) / Psalm | PHPUnit / Pest | `declare(strict_types=1);`, 强类型属性, Composer |
| **C# / .NET 10** | `dotnet format` | Roslyn Analyzers / StyleCop | xUnit / NUnit | .NET 10 LTS, C# 13+, 启用 Nullable, 主构造函数, 异步优先 |
| **Rust** | `rustfmt` | Clippy | `cargo test` | 惯用 Rust, 严禁无严格合理理由使用 `unsafe` |

## 全局安全与 DevSecOps
*   **零硬编码密钥 (Zero Hardcoded Secrets):** 严禁在任何语言的源代码中硬编码 API 密钥、密码、Token 或敏感配置。
*   始终使用环境变量配置文件（`.env`, `appsettings.json`, `application.yml`, `config.yaml`）并确保它们已添加到 `.gitignore`。
*   在数据库、API 网关及容器访问策略中严格贯彻 **最小权限原则 (Least Privilege)**。
*   所有数据通信必须使用加密协议 **HTTPS / TLS 1.3**。

## 文档与质量标准
*   所有关键配置文件与复杂业务逻辑必须包含清晰的解释性注释。
*   API 端点必须使用 **Swagger / OpenAPI 3.0** 规范进行完整文档化。
*   代码在提交前必须通过 **Linter 和 Formatter** 检查且无严重错误。
*   核心业务逻辑的单元测试覆盖率目标不低于 **80%**。
*   所有重大代码更改必须记录在 **CHANGELOG.md** 中并通过 **Pull Request 代码审查**。
