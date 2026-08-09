---
name: testing-qa-complete-best-practices
description: 全面测试与质量保证指南，涵盖 SIT、UAT、k6 性能负载测试、OWASP ZAP 安全扫描及自动化测试报告。
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# 阶段指南: 最终测试、SIT、UAT、安全扫描与质量保证

本阶段专注于端到端功能验证、系统集成测试 (SIT)、用户验收测试 (UAT)、性能压测基准、安全漏洞扫描、自动化回归测试及正式质量签发。

## 1. SIT 与 UAT 测试生命周期

*   **系统集成测试 (SIT):** 由测试团队覆盖前端、网关、后端微服务及外部依赖的整体技术测试。
*   **用户验收测试 (UAT):** 由产品经理及业务代表验证业务场景与验收标准。

---

## 2. 测试文档规范 (支持双语编写)

测试文档可选用 **印尼语** 或 **英语** 编写：
*   **测试计划 (Test Plan):** 明确范围、进度、环境与资源分配。
*   **测试用例矩阵 (SIT & UAT Matrix):** 记录用例编号、步骤、期望结果与实际状态。
*   **缺陷报告 (Bug Report):** 记录严重等级 (Critical/High/Medium/Low) 与复现步骤。
*   **UAT 签发报告 (Sign-Off):** 产品负责人正式签署的投产准入文件。

---

## 3. 性能压测与安全漏洞扫描

*   **负载测试 (k6 / JMeter):** 模拟预期峰值流量，确保 P95 响应时间 < 1s。
*   **安全扫描 (OWASP ZAP / Trivy):** 自动化扫描 XSS、SQL 注入、配置缺陷及容器镜像漏洞。

---

## ⚡ 常用命令速查
*   `npx playwright test` — 运行端到端自动化浏览器测试。
*   `k6 run load-test.js` — 执行 k6 性能压力测试脚本。
*   `pytest -v` / `dotnet test` — 执行后端单元与集成测试。

---

## ✅ 检查清单与完成定义 (DoD)

*   [ ] 测试计划与 SIT/UAT 测试矩阵已归档。
*   [ ] 所有测试场景执行完毕，无未解决的 Critical/High 缺陷。
*   [ ] 性能压测达标且 OWASP 安全扫描通过。
*   [ ] CI 中的自动化回归测试全部通过。
*   [ ] 获得产品负责人正式 UAT 签发 (Sign-Off)。
