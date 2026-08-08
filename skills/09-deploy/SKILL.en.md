---
name: deployment-docker-best-practices
description: Complete containerization & deployment guide covering multi-stage Dockerfiles, Kubernetes manifests, Helm charts, Nginx reverse proxy, and Let's Encrypt SSL/TLS.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md)

---

# Phase Guide: Deployment & Containerization (Docker, K8s & Cloud)

This phase focuses on packaging microservices (Frontend, API Gateway, and Backend services) into lightweight, secure **Docker** containers, orchestrating them via **Kubernetes/Helm**, and securing ingress endpoints with **SSL/TLS**.

## 1. Strategic Containerization Best Practices

### Multi-Stage Dockerfiles & Minimal Base Images
*   **Multi-stage Builds:** Separate compile-time dependencies from the runtime container to ensure ultra-small, secure production images.
*   **Recommended Base Images per Ecosystem:**
    *   **Node.js / TS:** `node:20-alpine` or `gcr.io/distroless/nodejs20`
    *   **Python:** `python:3.12-slim` (isolated virtualenv)
    *   **Golang:** `golang:1.22-alpine` (build) ➔ `scratch` / `distroless/static` (< 20MB)
    *   **Java / Kotlin:** `eclipse-temurin:21-jre-alpine` or `distroless/java21`
    *   **PHP:** `php:8.3-fpm-alpine` + Nginx sidecar
    *   **C# / .NET 10:** `mcr.microsoft.com/dotnet/aspnet:10.0-alpine` or `10.0-chiseled`
    *   **Rust:** `rust:1.77-alpine` (build) ➔ `scratch` / `alpine` (< 15MB)
*   **Non-Root User:** Always run application containers under an unprivileged non-root user (`USER appuser`).
*   **HEALTHCHECK Directive:** Declare explicit health check probes in every Dockerfile.

---

## 2. Container Orchestration (Kubernetes & Helm)

*   **Production Manifests:** Deploy services via Kubernetes `Deployment`, `Service`, `Ingress`, and `ConfigMap` / `Secret`.
*   **Helm Charts:** Parameterize multi-environment configurations (Dev, Staging, Prod) using Helm values.
*   **Health Probes:** Define `livenessProbe` and `readinessProbe` to ensure zero-downtime rolling updates.
*   **Horizontal Pod Autoscaler (HPA):** Auto-scale pods based on CPU and memory thresholds.

---

## 3. Reverse Proxy, Domain & SSL/TLS Automation

*   **Nginx Reverse Proxy:** Terminate SSL, enforce HTTP/2, and route `/api/*` to backend microservices.
*   **Let's Encrypt SSL/TLS:** Automate certificate provisioning and 90-day renewals via Certbot or Kubernetes `cert-manager`.

---

## ⚡ Command Cheat Sheet
*   `docker compose up -d --build` — Build and launch all microservices in the background.
*   `docker compose ps` — Inspect container health and port bindings.
*   `kubectl get pods -w` — Watch Kubernetes pod status.
*   `helm upgrade --install my-app ./helm-chart` — Deploy or update release via Helm.

## 🛠️ Common Troubleshooting
*   **CrashLoopBackOff:** Check pod logs using `kubectl logs <pod-name>` or inspect exit code via `docker inspect`.
*   **Port Already in Use:** Stop competing processes or re-map external ports in `docker-compose.yml`.

## 📐 Naming Conventions
*   **Docker Images:** Lowercase alphanumeric with SemVer tags (e.g., `perusahaan/auth-service:v1.3.0`).
*   **K8s Resources:** *kebab-case* (e.g., `auth-service-deployment`, `api-gateway-service`).

---

## ✅ Checklist & Definition of Done (DoD)

*   [ ] Multi-stage Dockerfiles with non-root users and `HEALTHCHECK` are implemented.
*   [ ] Services communicate within an isolated internal container network.
*   [ ] Production manifests (K8s/Helm) include resource limits and health probes.
*   [ ] Nginx reverse proxy enforces HTTPS with automated SSL certificate renewal.
*   [ ] Zero critical vulnerabilities detected during container scans (Trivy).
