---
name: backend-complete-development-best-practices
description: Complete polyglot backend engineering guide (.NET 10 LTS, Node, Python, Go, Java, PHP, Rust), Microservices, SonarQube A+, HTTP Security Headers, RFC 7807, and Redis Caching.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md)

---

# Phase Guide: Backend Development, Microservices, API Layer, SonarQube A+, Security Headers & Bot Mitigation

This phase focuses on server-side business logic, microservices distributed architecture, database per service design, unit testing, SonarQube Rating A+, HTTP security headers, centralized logging, RFC 7807 error standards, and caching strategies.

## 1. Strategic Backend & Microservices Architecture

*   **Service Decomposition:** Break backend domains into isolated services (*Auth Service, User Service, Transaction Service*).
*   **Inter-Service Communication:** Use synchronous gRPC/REST APIs and asynchronous message brokers (RabbitMQ, Kafka, Redis Streams).
*   **Database per Service:** Ensure decoupled data stores per microservice to prevent tight coupling.

---

## 2. Unit Testing & SonarQube Quality Standards (Rating A+)

*   **Code Coverage:** Maintain 80% to 90% code coverage on core business domains.
*   **Mocking & Isolation:** Isolate database and third-party dependencies with mocks.
*   **Zero Bugs & Vulnerabilities:** Pass static code analysis with SonarQube Rating A+ (0 Bugs, 0 Vulnerabilities, 0 Security Hotspots, Duplication < 3%).

---

## 3. HTTP Security Headers

Configure API Gateway or Backend Middlewares with:
*   `Strict-Transport-Security: max-age=31536000; includeSubDomains` (HSTS)
*   `Content-Security-Policy: default-src 'self'`
*   `X-Frame-Options: DENY`
*   `X-Content-Type-Options: nosniff`
*   `Permissions-Policy: geolocation=(), camera=(), microphone=()`

---

## 4. Standardized Error Handling (RFC 7807 Problem Details)

Return structured errors compliant with **RFC 7807**:
```json
{
  "type": "https://api.perusahaan.com/errors/invalid-credentials",
  "title": "Invalid Credentials",
  "status": 401,
  "detail": "Email atau kata sandi tidak cocok.",
  "instance": "/api/v1/auth/login",
  "code": "AUTH_INVALID_CREDENTIALS",
  "timestamp": "2026-08-08T12:00:00Z"
}
```

---

## 5. Caching Strategy (Redis & HTTP Cache)

*   **Multi-Tier Caching:** In-memory L1 cache + Distributed Redis L2 cache.
*   **.NET 10 HybridCache:** Use built-in HybridCache to prevent *Cache Stampede*.
*   **Cache Invalidation:** Always evict cache on mutations (write-through / cache-aside).

---

## 6. Anti-Bot & Automation Protection

*   **Rate Limiting:** Protect public endpoints with token bucket / sliding window rate limits.
*   **Behavioral Monitoring & CAPTCHA:** Enforce Cloudflare Turnstile / reCAPTCHA v3 on suspicious brute-force requests.

---

## 7. Polyglot Backend Ecosystem Matrix

| Ecosystem | Recommended Framework | ORM / DB Access | Testing Framework | Linter & Formatter |
|---|---|---|---|---|
| **TypeScript / Node** | NestJS, Express, Fastify | Prisma, Drizzle, TypeORM | Jest, Vitest, Supertest | ESLint, Prettier |
| **Python** | FastAPI, Django REST, Flask | SQLAlchemy, Tortoise, Django | PyTest, Unittest | Ruff, Black, MyPy |
| **Golang** | Gin, Fiber, Echo, gRPC | GORM, sqlx, pgx | `go test`, Testify | `golangci-lint`, `gofmt` |
| **Java / Kotlin** | Spring Boot, Micronaut, Quarkus | Spring Data JPA, Hibernate | JUnit 5, Mockito | Spotless, Checkstyle |
| **PHP** | Laravel, Symfony | Eloquent, Doctrine | Pest, PHPUnit | PHPStan, PHP-CS-Fixer |
| **C# / .NET 10** | ASP.NET Core 10 Minimal API / Web API (Native AOT) | EF Core 10, Dapper | xUnit, NUnit, FluentAssertions | Roslyn, `dotnet format` |
| **Rust** | Actix-web, Axum, Tonic (gRPC) | SQLx, Diesel, SeaORM | `cargo test` | Clippy, `rustfmt` |

---

## ⚡ Multi-Language Command Cheat Sheet

### TypeScript / Node.js
*   `npm run start:dev` / `pnpm dev` — Start development server.
*   `npm run test:cov` — Run tests with coverage report.
*   `npm run prisma:migrate` — Execute database schema migrations.

### Python
*   `uvicorn main:app --reload` — Start FastAPI server with live reload.
*   `pytest -v --cov=app` — Run test suite with coverage.

### Golang
*   `go run main.go` / `air` — Start Go server with live reload.
*   `go test -v -race ./...` — Run Go tests with race detection.

### Java / Kotlin (.NET 10 & PHP)
*   `./gradlew bootRun` / `./mvnw spring-boot:run` — Run Spring Boot application.
*   `dotnet run` / `dotnet test --collect:"XPlat Code Coverage"` — Run & test .NET 10 API.
*   `php artisan serve` / `vendor/bin/pest` — Run & test Laravel API.

## 🛠️ Common Troubleshooting
*   **Database Connection Refused:** Verify `.env` / config host, port, credentials, and connection pool limits.
*   **Port Conflict:** Change port binding in `.env` (e.g., from 3000 to 5000 / 8080).

## 📐 Naming Conventions
*   **Filenames:** *kebab-case* or *snake_case* (`user_controller.py`, `auth-service.ts`, `UserController.cs`).
*   **API Routes:** Lowercase *kebab-case* (e.g., `/api/v1/user-profiles`).
*   **Database Tables:** Plural *snake_case* (e.g., `users`, `audit_logs`).

---

## ✅ Checklist & Definition of Done (DoD)

*   [ ] Microservices service boundaries and database isolation are established.
*   [ ] Unit test coverage reaches at least 80% with SonarQube Rating A+.
*   [ ] HTTP Security Headers (HSTS, CSP, X-Frame-Options) are configured.
*   [ ] Error responses conform strictly to RFC 7807 Problem Details.
*   [ ] Anti-bot mitigation, rate limiting, and Redis caching strategies are in place.
