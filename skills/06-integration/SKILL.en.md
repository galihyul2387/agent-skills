---
name: complete-integration-best-practices
description: Comprehensive integration guide covering API Gateway routing, strict CORS policies, Correlation ID distributed request tracing, internal mTLS, and E2E contract testing.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# Phase Guide: System Integration (Frontend, Gateway, Backend, Logging & Security)

This phase focuses on consolidating client applications with API Gateways, microservices, database layers, distributed request tracing, strict CORS policies, and end-to-end contract validation.

## 1. Strategic Integration Steps

*   **API Gateway Consolidation:** Route client traffic through a unified reverse proxy/gateway (Nginx, Traefik, Kong, Envoy, or YARP in .NET 10).
*   **Strict CORS Policy:** Whitelist specific production domains (`https://app.perusahaan.com`) and prohibit wildcard (`*`) origins with credentials.
*   **Correlation ID Distributed Tracing:** Inject `X-Correlation-ID` header at the gateway and propagate it across all microservice requests.
*   **Internal Service Mesh / mTLS:** Secure inter-service communications using mutual TLS within private network overlays.

---

## 2. API Contract Testing (Pact / OpenAPI Spec)

*   **Consumer-Driven Contract Testing:** Validate that API responses match expected frontend TypeScript/OpenAPI contracts before deployment.
*   **Automated Schema Drift Detection:** Compare generated OpenAPI schemas against live endpoints in CI.

---

## ⚡ Command Cheat Sheet
*   `curl -I https://api.perusahaan.com/health` — Inspect response headers and SSL status.
*   `docker network inspect app-network` — Verify container network connectivity.

## 🛠️ Common Troubleshooting
*   **CORS Error (No Access-Control-Allow-Origin):** Verify frontend domain is explicitly listed in backend CORS origin configuration.
*   **Missing Correlation ID:** Ensure gateway middleware forwards `X-Correlation-ID` to downstream service headers.

## 📐 Naming Conventions
*   **Tracing Headers:** Use standard *kebab-case* (`X-Correlation-ID`, `X-Request-ID`).
*   **Gateway Routes:** Use lowercase prefixes (e.g., `/api/v1/users`, `/api/v1/auth`).

---

## ✅ Checklist & Definition of Done (DoD)

*   [ ] Frontend successfully communicates with API Gateway and microservices.
*   [ ] Strict CORS whitelist is enforced for production environments.
*   [ ] Correlation ID is propagated across all microservice log traces.
*   [ ] E2E integration scenarios pass across all service boundaries.
