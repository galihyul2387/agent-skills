---
name: code-review-standards-best-practices
description: Comprehensive code review guide, polyglot coding standards, documentation standards, and automated quality gates to ensure high code quality.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# Phase Guide: Code Review & Quality Standards

This phase focuses on establishing effective code review processes, polyglot coding standards, documentation guidelines, and automated quality gates to maintain high repository standards.

## 1. Code Review Process

*   **Early Bug Detection:** Catch security vulnerabilities, logic flaws, and edge case regressions before code enters the main branch.
*   **Knowledge Sharing:** Disseminate architectural understanding across engineering teammates.
*   **Constructive Feedback Ethics:** Focus critiques on the code, not the person. Provide clear rationale and actionable suggestions.

---

## 2. Universal Clean Code Standards (SOLID, DRY, KISS, YAGNI)

*   **Single Responsibility Principle (SRP):** Maximum function length is **50 lines** — decompose into smaller helpers if exceeded.
*   **Don't Repeat Yourself (DRY):** Extract duplicated logic into reusable functions or services.
*   **Keep It Simple, Stupid (KISS):** Avoid over-engineering and premature abstraction.
*   **Strong Typing & Type Safety:** Enable strict type checking across all language stacks.

---

## 3. Polyglot Coding Standards

| Language | Standard Formatter | Linter & Static Analysis | Testing Framework | Key Principles |
|---|---|---|---|---|
| **TypeScript / Node** | Prettier | ESLint (`@typescript-eslint`) | Jest / Vitest / Playwright | Strict mode, ES6+, no `any` without strong rationale |
| **Python** | Black / Ruff | Ruff / Flake8 / MyPy | PyTest / Unittest | PEP 8, Type Hints, Virtualenv |
| **Golang** | `gofmt` / `goimports` | `golangci-lint` | `go test` | Idiomatic Go, explicit error check, zero panic |
| **Java / Kotlin** | Spotless / Google Java | Checkstyle / SonarLint / Detekt | JUnit 5 / Mockito | SOLID, Clean Architecture, Lombok/Records |
| **PHP** | PHP-CS-Fixer (PSR-12) | PHPStan (Level 8+) | Pest / PHPUnit | `declare(strict_types=1);`, Typed properties |
| **C# / .NET 10** | `dotnet format` | Roslyn Analyzers | xUnit / NUnit | .NET 10 LTS, C# 13+, Nullable enabled, Primary constructors |
| **Rust** | `rustfmt` | Clippy | `cargo test` | Idiomatic Rust, zero `unsafe` without strict justification |

---

## 4. Documentation Standards (Bilingual Options)

Project documentation (README.md, CHANGELOG.md, and API docs) can be written in **Bahasa Indonesia (Default)** or **English** based on team preference:

### README.md Requirements
*   📋 **Project Description:** Clear purpose and architecture summary.
*   ⚙️ **Prerequisites:** Runtimes, language SDKs, and database dependencies.
*   🚀 **Getting Started:** Step-by-step local setup and startup instructions.
*   🧪 **Testing:** Commands to execute unit and integration test suites.

### CHANGELOG.md (Keep a Changelog Format)
*   `### Added` — New features.
*   `### Changed` — Feature updates or refactoring.
*   `### Fixed` — Bug resolutions.
*   `### Security` — Vulnerability patches.

---

## 5. Automated Quality Gates

*   **Pre-commit Hooks (Husky + lint-staged):** Automatically format and lint staged files before commit.
*   **Commit Message Validation (commitlint):** Enforce Conventional Commits format.
*   **CI Quality Gates:** Automated pipeline must fail on linter errors, code coverage < 80%, or SonarQube quality gate failure.

---

## ⚡ Multi-Language Command Cheat Sheet

### TypeScript / JavaScript
*   `npx prettier --write .` — Format all project files with Prettier.
*   `npx eslint . --fix` — Run ESLint with automatic fixes.
*   `npx husky init` — Initialize Husky Git hooks.

### Python
*   `ruff check --fix .` — Run high-speed Ruff linter with auto-fix.
*   `black .` — Format Python files to PEP 8 standards.

### Golang
*   `golangci-lint run --fix` — Run Go linter aggregator with auto-fixes.
*   `gofmt -s -w .` — Format and simplify Go source code.

### Java / PHP / .NET 10 / Rust
*   `./gradlew spotlessApply` — Format Java/Kotlin code.
*   `./vendor/bin/phpstan analyse` — Run PHP static analysis.
*   `dotnet format` — Format C# code and fix analyzer rules.
*   `cargo clippy -- -D warnings` — Run Rust strict linter.

---

## ✅ Checklist & Definition of Done (DoD)

*   [ ] Pull Request template and review guidelines are configured.
*   [ ] Linters and formatters are configured for the target language stack.
*   [ ] Pre-commit hooks (Husky / lint-staged / commitlint) are active.
*   [ ] README.md, CHANGELOG.md, and Swagger/OpenAPI docs are up-to-date.
*   [ ] No unreviewed code merges into `main`.
