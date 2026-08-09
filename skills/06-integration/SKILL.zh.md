---
name: complete-integration-best-practices
description: 系统集成综合指南，涵盖 API 网关路由、严格 CORS 策略、Correlation ID 分布式链路追踪、内部 mTLS 加密及端到端契约测试。
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# 阶段指南: 系统集成 (前端、网关、后端、日志追踪与安全)

本阶段专注于将客户端应用程序与 API 网关、微服务集群、数据库层紧密集成，落地分布式链路追踪、严格 CORS 策略及端到端契约测试。

## 1. 战略集成步骤

*   **API 网关统一收口:** 所有外部请求统一经由网关 (Nginx, Traefik, Kong, Envoy 或 .NET 10 YARP) 进行分发。
*   **严格 CORS 白名单:** 显式配置生产域名白名单，严禁在携带凭证时使用通配符 (`*`)。
*   **Correlation ID 链路追踪:** 网关注入 `X-Correlation-ID` 标头并向下游微服务透传，保障全链路日志可溯源。
*   **内部服务 mTLS 加密:** 微服务间通信在内部私有网络中强制采用双向 TLS 认证。

---

## 2. API 契约测试 (Pact / OpenAPI 规范)

*   **消费者驱动契约测试:** 部署前验证微服务响应结构与前端 TypeScript/OpenAPI 定义严格匹配。
*   **模式漂移检测 (Schema Drift):** 在 CI 流水线中自动校验生成的 OpenAPI 规范与实际端点的一致性。

---

## ⚡ 常用命令速查
*   `curl -I https://api.perusahaan.com/health` — 检查响应标头与 SSL 证书状态。
*   `docker network inspect app-network` — 验证容器间网络互通性。

---

## ✅ 检查清单与完成定义 (DoD)

*   [ ] 前端、API 网关及微服务间通信链路正常。
*   [ ] 生产环境已配置严格 CORS 白名单。
*   [ ] Correlation ID 标头已在所有微服务调用链路中完整传递。
*   [ ] 跨服务契约测试与端到端集成测试通过。
