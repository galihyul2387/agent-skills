---
name: deployment-docker-best-practices
description: 容器化与生产部署综合指南，涵盖多阶段 Dockerfile、Kubernetes 清单、Helm 部署、Nginx 反向代理及 SSL/TLS 自动化。
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# 阶段指南: 容器化部署、Kubernetes 编排与云原生发布

本阶段专注于将微服务（前端、API 网关及后端集群）打包为超轻量且安全的 **Docker** 镜像，通过 **Kubernetes / Helm** 进行集群编排，并通过 **Nginx 反向代理与 SSL/TLS** 暴露安全的生产入口。

## 1. 容器化最佳实践

### 多阶段构建与精简基础镜像
*   **多阶段构建 (Multi-stage Builds):** 将编译环境与运行环境严格分离，生产镜像仅包含最终可执行文件及最小运行时依赖。
*   **各技术栈推荐基础镜像:**
    *   **Node.js / TS:** `node:20-alpine` 或 `gcr.io/distroless/nodejs20`
    *   **Python:** `python:3.12-slim` (隔离虚拟环境)
    *   **Golang:** `golang:1.22-alpine` 编译 ➔ `scratch` 运行 (< 20MB)
    *   **Java / Kotlin:** `eclipse-temurin:21-jre-alpine`
    *   **PHP:** `php:8.3-fpm-alpine` + Nginx Sidecar
    *   **C# / .NET 10:** `mcr.microsoft.com/dotnet/aspnet:10.0-alpine` 或 `10.0-chiseled`
    *   **Rust:** `rust:1.77-alpine` 编译 ➔ `scratch` 运行 (< 15MB)
*   **非 Root 用户 (Non-Root User):** 强制以非 root 用户 (`USER appuser`) 运行应用容器。
*   **健康检查指令:** Dockerfile 中必须声明 `HEALTHCHECK`。

---

## 2. 容器编排 (Kubernetes & Helm)

*   **生产资源清单:** 使用 `Deployment`、`Service`、`Ingress` 及 `ConfigMap`/`Secret`。
*   **探针配置:** 明确定义 `livenessProbe` 和 `readinessProbe`，确保滚动更新零停机。
*   **自动扩缩容 (HPA):** 基于 CPU/内存使用率自动横向扩容 Pod 实例。

---

## 3. 反向代理与 SSL/TLS 证书自动化

*   **Nginx 反向代理:** 终结 SSL 证书，强制开启 HTTP/2，分发 `/api/*` 流量至后端集群。
*   **Let's Encrypt SSL/TLS:** 使用 Certbot 或 Kubernetes `cert-manager` 实现证书自动申请与 90 天自动续期。

---

## ⚡ 常用命令速查
*   `docker compose up -d --build` — 后台构建并启动全套微服务。
*   `kubectl get pods -w` — 实时监控 Kubernetes Pod 状态。
*   `helm upgrade --install my-app ./helm-chart` — 通过 Helm 发布或更新应用。

---

## ✅ 检查清单与完成定义 (DoD)

*   [ ] 生产镜像采用 Multi-stage 构建且运行于非 Root 用户。
*   [ ] 各微服务在隔离的内部容器网络中安全通信。
*   [ ] Kubernetes 清单包含资源限制 (Resource Limits) 与就绪探针。
*   [ ] Nginx 反向代理已启用 HTTPS 并配置证书自动续期。
*   [ ] 镜像安全扫描 (Trivy) 未发现高危漏洞。
