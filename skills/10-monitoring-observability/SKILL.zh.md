---
name: monitoring-observability-best-practices
description: 可观测性综合指南，涵盖指标监控 (Prometheus)、分布式链路追踪 (OpenTelemetry/Jaeger)、集中式日志 (Loki/ELK)、Grafana 仪表盘与应急响应机制。
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# 阶段指南: 生产监控、可观测性 (3 大支柱)、集中式日志与告警

本阶段专注于落地企业级生产环境可观测性 (Observability) 体系，基于 **Metrics (指标)**、**Logs (日志)** 与 **Traces (链路追踪)** 三大支柱保障分布式微服务的稳定性与高可用。

## 1. 可观测性 3 大核心支柱

### 1. 指标 (Metrics - Prometheus & Grafana)
*   采集关键黄金信号 (Golden Signals)：**延迟 (Latency)**、**流量 (Traffic)**、**错误率 (Errors)** 及 **饱和度 (Saturation)**。
*   各微服务暴露 `/metrics` 标准端点供 Prometheus 定期抓取。

### 2. 集中式日志 (Logs - Loki / ELK Stack)
*   **结构化 JSON 日志:** 所有微服务统一输出带时间戳、级别、服务名及 `correlationId` 的 JSON 格式日志。
*   **集中检索:** 统一汇聚至 Grafana Loki 或 Elasticsearch。

### 3. 分布式链路追踪 (Traces - OpenTelemetry & Jaeger)
*   在网关与微服务间传播 Trace Context (`traceparent` 标头)。
*   精确分析跨服务调用的延迟瓶颈与级联故障。

---

## 2. 告警策略与故障分级响应

*   **P1 (紧急 - 生产中断):** 5 分钟内通过 PagerDuty/电话呼叫响应。
*   **P2 (高危 - 局部核心降级):** 15 分钟内响应。
*   **P3 (常规告警):** 4 小时内工作时间处理。
*   **告警降噪:** 基于滑动窗口聚合告警，避免告警风暴。

---

## ⚡ 常用命令速查
*   `curl http://localhost:8080/metrics` — 验证微服务指标暴露端点。
*   `promtool check config prometheus.yml` — 校验 Prometheus 配置文件合法性。

---

## ✅ 检查清单与完成定义 (DoD)

*   [ ] 所有微服务已集成指标采集并在 Grafana 仪表盘展示。
*   [ ] 结构化 JSON 日志已统一汇聚至集中式存储。
*   [ ] OpenTelemetry 链路追踪已覆盖所有微服务调用链路。
*   [ ] P1-P3 告警规则已接入钉钉/飞书/企业微信/Slack。
*   [ ] 生产环境应急故障处理 SOP 与 Runbook 已文档化。
