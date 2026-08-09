---
name: backend-complete-development-best-practices
description: 多语言后端工程综合指南 (.NET 10 LTS, Node, Python, Go, Java, PHP, Rust)、微服务、SonarQube A+ 评级、HTTP 安全标头、RFC 7807 错误规范及 Redis 缓存。
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# 阶段指南: 后端开发、微服务架构、SonarQube A+ 与安全防护

本阶段专注于服务端业务逻辑实现、微服务分布式架构、服务间独立数据库设计、单元测试覆盖、SonarQube A+ 质量基准、HTTP 安全标头、集中式日志追踪、RFC 7807 错误标准及多级缓存策略。

## 1. 微服务与分布式后端架构

*   **服务解耦:** 按业务领域合理拆分微服务 (*认证服务、用户服务、交易服务*)。
*   **服务间通信:** 同步通信使用 gRPC/REST，异步通信使用消息队列 (RabbitMQ, Kafka, Redis Streams)。
*   **Database per Service:** 每个微服务拥有独立的数据库实例或 Schema，禁止跨服务直接共享数据表。

---

## 2. 单元测试与 SonarQube A+ 质量门禁

*   **代码覆盖率:** 核心业务逻辑测试覆盖率保持在 **80% 至 90%**。
*   **Mock 隔离:** 使用 Mock 工具隔离外部依赖（数据库、第三方 API）。
*   **零缺陷与零漏洞:** 静态分析达到 SonarQube A+ 评级（0 漏洞、0 Bugs、0 安全热点、重复率 < 3%）。

---

## 3. HTTP 安全标头与防自动化攻击 (Bot Mitigation)

*   `Strict-Transport-Security: max-age=31536000; includeSubDomains` (HSTS)
*   `Content-Security-Policy: default-src 'self'`
*   `X-Frame-Options: DENY`
*   `X-Content-Type-Options: nosniff`
*   **限流保护 (Rate Limiting):** 使用滑动窗口算法防止接口暴力攻击。

---

## 4. RFC 7807 标准化错误响应与多语言支持

使用 RFC 7807 Problem Details 标准结构，并通过 `Accept-Language` 标头返回本地化错误信息：
```json
{
  "type": "https://api.perusahaan.com/errors/invalid-credentials",
  "title": "Invalid Credentials",
  "status": 401,
  "detail": "用户名或密码错误。",
  "instance": "/api/v1/auth/login",
  "code": "AUTH_INVALID_CREDENTIALS",
  "timestamp": "2026-08-09T12:00:00Z"
}
```

---

## 5. 多语言技术生态矩阵 (Polyglot Matrix)

| 技术栈 | 推荐框架 | ORM / 数据库 | 测试框架 | 静态检查与格式化 |
|---|---|---|---|---|
| **TypeScript / Node** | NestJS, Express, Fastify | Prisma, Drizzle, TypeORM | Jest, Vitest | ESLint, Prettier |
| **Python** | FastAPI, Django REST, Flask | SQLAlchemy, Tortoise | PyTest, Unittest | Ruff, Black, MyPy |
| **Golang** | Gin, Fiber, Echo, gRPC | GORM, sqlx, pgx | `go test`, Testify | `golangci-lint`, `gofmt` |
| **Java / Kotlin** | Spring Boot, Micronaut | Spring Data JPA, Hibernate | JUnit 5, Mockito | Spotless, Checkstyle |
| **PHP** | Laravel, Symfony | Eloquent, Doctrine | Pest, PHPUnit | PHPStan, PHP-CS-Fixer |
| **C# / .NET 10** | ASP.NET Core 10 Minimal API (Native AOT) | EF Core 10, Dapper | xUnit, NUnit | Roslyn, `dotnet format` |
| **Rust** | Actix-web, Axum, Tonic | SQLx, Diesel | `cargo test` | Clippy, `rustfmt` |

---

## ⚡ 常用命令速查
*   `uvicorn main:app --reload` / `npm run start:dev` — 启动开发服务。
*   `dotnet test --collect:"XPlat Code Coverage"` / `pytest -v` — 运行测试套件。
*   `go test -v -race ./...` — 运行 Go 竞争检测测试。

---

## ✅ 检查清单与完成定义 (DoD)

*   [ ] 微服务边界清晰，落实 Database per Service 独立数据库模式。
*   [ ] 单元测试覆盖率达到 80% 以上，通过 SonarQube A+ 质量门禁。
*   [ ] HTTP 安全标头与接口限流策略已生效。
*   [ ] 错误响应符合 RFC 7807 规范并支持 `Accept-Language` 多语言。
*   [ ] Redis 多级缓存与防缓存击穿策略已就绪。
