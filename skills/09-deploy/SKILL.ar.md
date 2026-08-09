---
name: deployment-docker-best-practices
description: دليل شامل للحاويات والنشر يشمل ملفات Dockerfile متعددة المراحل، وإعدادات Kubernetes، ومخططات Helm، والوكيل العكسي Nginx، وشهادات SSL/TLS.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# دليل المرحلة: نشر الحاويات و Kubernetes والإطلاق السحابي

تركز هذه المرحلة على تعبئة الخدمات المصغرة داخل حاويات **Docker** خفيفة وآمنة، وإدارتها عبر **Kubernetes / Helm**، وتأمين بوابات الوصول عبر **Nginx وشهادات SSL/TLS**.

## 1. أفضل ممارسات الحاويات

*   **البناء متعدد المراحل (Multi-stage Builds):** فصل بيئة البناء عن بيئة التشغيل لتقليل حجم الصورة.
*   **تشغيل بدون صلاحيات Root:** استخدام مستخدم غير جذري (`USER appuser`).
*   **فحوصات الصحة:** تضمين تعليمة `HEALTHCHECK` في كل ملف Dockerfile.

---

## 2. إدارة المجموعات عبر Kubernetes و Helm

*   **موارد الإنتاج:** استخدام `Deployment`، `Service`، `Ingress`، و `Secret`.
*   **مجسات الجاهزية والحياة:** تكوين `livenessProbe` و `readinessProbe` لضمان استقرار التحديثات.
*   **التحجيم التلقائي (HPA):** ضبط التوسع التلقائي للـ Pods وفق الضغط.

---

## 3. الوكيل العكسي Nginx وأتمتة شهادات SSL

*   **Nginx Reverse Proxy:** إنهاء تشفير SSL وتوجيه حركة المرور للخدمات الخلفية.
*   **شهادات Let's Encrypt:** أتمتة إصدار وتجديد الشهادات كل 90 يوماً عبر `cert-manager`.

---

## ⚡ أوامر سريعة
*   `docker compose up -d --build` — تشغيل كافة الخدمات في الخلفية.
*   `kubectl get pods -w` — متابعة حالة الـ Pods مباشرة.
*   `helm upgrade --install my-app ./helm-chart` — نشر أو ترقية التطبيق عبر Helm.

---

## ✅ قائمة التحقق ومعيار الاكتمال (DoD)

*   [ ] صور الحاويات تعتمد Multi-stage وتعمل بمستخدم Non-Root.
*   [ ] إعدادات Kubernetes تتضمن حدود الموارد ومجسات الجاهزية.
*   [ ] تم تفعيل HTTPS مع التجديد التلقائي لشهادات SSL.
*   [ ] فحص أمان الحاويات عبر Trivy خالٍ من الثغرات العالية.
