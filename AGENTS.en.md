# Global Rules — MyAgent Workspace (Polyglot / Multi-Language)

[ 🇮🇩 Bahasa Indonesia ](AGENTS.md) | [ 🇬🇧 English ](AGENTS.en.md) | [ 🇨🇳 简体中文 ](AGENTS.zh.md) | [ 🇸🇦 العربية ](AGENTS.ar.md)

---

## Language Selection & Multi-Language UI (i18n & RTL)
*   **Document Language Selection:** Technical documentation, PRDs, User Stories, Test Plans, Test Cases, Architecture Designs, analysis reports, and release notes can be authored in **Bahasa Indonesia (Default)** or **English** based on user preference or team requirements.
*   **Multi-Language UI Support (i18n & RTL):** User interfaces support 4 core languages: **🇮🇩 Bahasa Indonesia (ID)**, **🇬🇧 English (EN)**, **🇨🇳 Chinese (ZH - 简体中文)**, and **🇸🇦 Arabic (AR - with Right-to-Left / RTL layout support)**.
*   **Document Consistency:** Ensure each individual document uses a single consistent language (do not mix languages within a single document).
*   **Industry Standard Technical Naming:** All code variables, functions, methods, classes, interfaces, filenames, API routes, and commit messages MUST remain in standard programming **English**.

## Universal Language-Agnostic Code Conventions
*   **Clean Code & SRP:** Every function/method must have a **Single Responsibility Principle**.
*   **Function Length Limit:** Maximum function length is **50 lines** — decompose into sub-functions or helpers if exceeded.
*   **Strong Typing & Type Safety:** Always enable strict typing or type hinting in supported languages (TypeScript strict mode, Python type hints, PHP `declare(strict_types=1)`, C# nullable reference types, Java/Go/Rust static typing).
*   **Immutability First:** Prefer immutable values by default (`const` in JS/TS, `readonly`/`record` in C#, `val` in Kotlin, immutable structures in Python/Rust).
*   **Explicit Error Handling:** Handle errors explicitly — never leave empty catch blocks or ignore error return values.

## Idiomatic Standards per Programming Language

| Language | Formatting Standard | Linter / Static Analysis | Testing Framework | Key Principles |
|---|---|---|---|---|
| **TypeScript / Node.js** | Prettier | ESLint (`@typescript-eslint`) | Jest / Vitest / Mocha | Strict mode, ES6+, no `var`, no `any` without strong rationale |
| **Python** | Black / Ruff | Flake8 / Ruff / MyPy | PyTest / Unittest | PEP 8, Type Hints, Virtualenv, Poetry/Pipenv |
| **Golang** | `gofmt` / `goimports` | `golangci-lint` | `go test` | Idiomatic Go, explicit error check (`if err != nil`), zero panic |
| **Java / Kotlin** | Spotless / Google Java | Checkstyle / SonarLint / Detekt | JUnit 5 / Mockito | SOLID, Clean Architecture, Lombok/Records, Spring/Micronaut |
| **PHP** | PHP-CS-Fixer (PSR-12) | PHPStan (Level 8+) / Psalm | PHPUnit / Pest | `declare(strict_types=1);`, Typed properties, Composer |
| **C# / .NET 10** | `dotnet format` | Roslyn Analyzers / StyleCop | xUnit / NUnit | .NET 10 LTS, C# 13+, Nullable enabled, Primary constructors, Async/Await |
| **Rust** | `rustfmt` | Clippy | `cargo test` | Idiomatic Rust, zero `unsafe` without strict justification |

## Global Security (DevSecOps)
*   **Zero Hardcoded Secrets:** No credentials, API keys, tokens, or secrets may be hardcoded in source code across all languages.
*   Always use environment configuration files (`.env`, `appsettings.json`, `application.yml`, `config.yaml`) and ensure they are listed in `.gitignore`.
*   Apply the **Least Privilege** principle across all database, API gateway, and container access.
*   All data communication must use encrypted **HTTPS/TLS 1.3** protocols.

## Documentation & Quality Standards
*   Every critical configuration file and complex logic block must contain explanatory comments.
*   API endpoints must be documented using **Swagger / OpenAPI 3.0**.
*   Code must pass **linters and formatters** with zero critical errors before commit.
*   Target a minimum of **80% code coverage** on core business logic across all languages.
*   Every significant change must be logged in **CHANGELOG.md** and pass through the **Pull Request Code Review** process.
