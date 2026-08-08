# Aturan Global — MyAgent Workspace (Polyglot / Multi-Language)

## Bahasa & Penulisan
*   Gunakan **Bahasa Indonesia** sebagai bahasa utama untuk dokumentasi, komentar penjelasan bisnis, PRD, dan panduan skill.
*   Gunakan **Bahasa Inggris** untuk penamaan teknis standar industri: variabel, fungsi, class, method, interface, file, rute API, dan commit messages.

## Konvensi Universal Lintas Bahasa (Language-Agnostic)
*   **Clean Code & SRP:** Setiap fungsi/method wajib memiliki **satu tanggung jawab tunggal** (*Single Responsibility Principle*).
*   **Batas Panjang Fungsi:** Batasi panjang fungsi maksimal **50 baris** — pecah menjadi sub-fungsi atau *helper* jika melebihi.
*   **Strong Typing & Type Safety:** Selalu aktifkan *strict typing* atau *type hinting* pada bahasa yang mendukungnya (TypeScript strict mode, Python type hints, PHP `declare(strict_types=1)`, C# nullable reference types, Java/Go/Rust static typing).
*   **Immutability First:** Utamakan *immutable values* secara default (`const` di JS/TS, `readonly`/`record` di C#, `val` di Kotlin, immutable data structures di Python/Rust).
*   **Explicit Error Handling:** Tangani error secara eksplisit — jangan pernah membiarkan *empty catch block* atau mengabaikan *error return value*.

## Standar Idiomatik per Bahasa Pemrograman

| Bahasa | Standar Formatting | Linter / Static Analysis | Testing Framework | Prinsip Kunci |
|---|---|---|---|---|
| **TypeScript / Node.js** | Prettier | ESLint (`@typescript-eslint`) | Jest / Vitest / Mocha | Strict mode, ES6+, no `var`, no `any` tanpa alasan kuat |
| **Python** | Black / Ruff | Flake8 / Ruff / MyPy | PyTest / Unittest | PEP 8, Type Hints, Virtualenv, Poetry/Pipenv |
| **Golang** | `gofmt` / `goimports` | `golangci-lint` | `go test` | Idiomatic Go, explicit error check (`if err != nil`), zero panic |
| **Java / Kotlin** | Spotless / Google Java | Checkstyle / SonarLint / Detekt | JUnit 5 / Mockito | SOLID, Clean Architecture, Lombok/Records, Spring/Micronaut |
| **PHP** | PHP-CS-Fixer (PSR-12) | PHPStan (Level 8+) / Psalm | PHPUnit / Pest | `declare(strict_types=1);`, Typed properties, Composer |
| **C# / .NET** | `dotnet format` | Roslyn Analyzers / StyleCop | xUnit / NUnit | Nullable reference types enabled, Async/Await standard |
| **Rust** | `rustfmt` | Clippy | `cargo test` | Idiomatic Rust, zero `unsafe` tanpa justifikasi ketat |

## Keamanan Global (DevSecOps)
*   **Zero Hardcoded Secrets:** Tidak boleh ada kredensial, API key, token, atau secret yang di-hardcode dalam source code di semua bahasa.
*   Selalu gunakan file konfigurasi lingkungan (`.env`, `appsettings.json`, `application.yml`, `config.yaml`) dan pastikan terdaftar di `.gitignore`.
*   Terapkan prinsip **Least Privilege** pada seluruh akses database, API gateway, dan container.
*   Seluruh komunikasi data wajib menggunakan protokol terenkripsi **HTTPS/TLS 1.3**.

## Standar Dokumentasi & Kualitas
*   Setiap file konfigurasi dan logika kompleks harus memiliki komentar penjelasan.
*   API endpoints harus terdokumentasi menggunakan **Swagger / OpenAPI 3.0**.
*   Kode harus lolos **linter dan formatter** tanpa error kritikal sebelum commit.
*   Target **code coverage minimal 80%** pada logika bisnis inti di seluruh bahasa.
*   Setiap perubahan signifikan harus dicatat dalam **CHANGELOG.md** dan melalui proses **Pull Request Code Review**.
