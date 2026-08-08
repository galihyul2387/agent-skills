# 📚 دليل وحدات المهارات — MyAgent

[ 🇮🇩 Bahasa Indonesia ](README.md) | [ 🇬🇧 English ](README.en.md) | [ 🇨🇳 简体中文 ](README.zh.md) | [ 🇸🇦 العربية ](README.ar.md)

---

يحتوي هذا المجلد على 10 أدلة مهارات معيارية توجّه وتوحّد دورة حياة تطوير البرمجيات (SDLC) بالكامل من البداية وحتى مرحلة ما بعد النشر.

---

## 🗂️ قائمة وحدات المهارات (وفق التسلسل الهندسي)

| الرقم | الوحدة | وثائق الإرشاد (ID / EN) | الوصف والنطاق الأساسي | أمثلة الإعداد الجاهزة |
|:---:|:---|:---|:---|:---:|
| **01** | **التخطيط و PRD** | [ID](01-planning/SKILL.md) \| [EN](01-planning/SKILL.en.md) | تحديد النطاق (Scoping)، PRD، قصص المستخدم، وتقدير الوقت والمخاطر | — |
| **02** | **مسار عمل Git** | [ID](02-git-workflow/SKILL.md) \| [EN](02-git-workflow/SKILL.en.md) | استراتيجية الفروع (Git Flow / Trunk-based)، التعيينات القياسية، والوسوم | [pull-request-template.md](02-git-workflow/examples/pull-request-template.md) |
| **03** | **تطوير الواجهة الأمامية** | [ID](03-frontend-development/SKILL.md) \| [EN](03-frontend-development/SKILL.en.md) | Angular 17+ (Signals/Standalone)، React، التحكم بالجلسة الواحدة عبر BroadcastChannel | — |
| **04** | **تطوير الواجهة الخلفية** | [ID](04-backend-development/SKILL.md) \| [EN](04-backend-development/SKILL.en.md) | الخدمات المصغرة، .NET 10 LTS Native AOT، تقييم SonarQube A+، و Redis | — |
| **05** | **مراجعة الكود والمعايير** | [ID](05-code-review-standards/SKILL.md) \| [EN](05-code-review-standards/SKILL.en.md) | أخلاقيات المراجعة، الكود النظيف (SOLID/DRY)، وبوابات الجودة التلقائية | [linter-config-examples.js](05-code-review-standards/examples/linter-config-examples.js) |
| **06** | **تكامل النظام** | [ID](06-integration/SKILL.md) \| [EN](06-integration/SKILL.en.md) | توجيه بوابة API، سياسة CORS، تتبع Correlation ID، والتشفير الداخلي mTLS | — |
| **07** | **الاختبار وضمان الجودة** | [ID](07-testing/SKILL.md) \| [EN](07-testing/SKILL.en.md) | مصفوفة اختبارات SIT و UAT، اختبار الأداء k6، وفحص الأمان OWASP ZAP | — |
| **08** | **خط أنابيب CI/CD** | [ID](08-cicd-pipeline/SKILL.md) \| [EN](08-cicd-pipeline/SKILL.en.md) | مراحل خط الأنابيب (Lint ➔ Test ➔ Scan ➔ Deploy)، أتمتة GitHub Actions | [ci-build-test.yml](08-cicd-pipeline/examples/ci-build-test.yml) |
| **09** | **النشر والحاويات (Docker)** | [ID](09-deploy/SKILL.md) \| [EN](09-deploy/SKILL.en.md) | ملفات Dockerfile متعددة المراحل، Kubernetes، Helm، والوكيل العكسي Nginx | [Dockerfile.multistage.example](09-deploy/examples/Dockerfile.multistage.example) |
| **10** | **المراقبة وقابلية الملاحظة** | [ID](10-monitoring-observability/SKILL.md) \| [EN](10-monitoring-observability/SKILL.en.md) | ركائز الملاحظة الثلاث (Metrics, Logs, Traces)، Prometheus/Grafana، والتنبيهات | — |

---

## 🌍 البيئات التقنية المدعومة

* 🟢 **TypeScript / JavaScript:** Angular 17+ (Signals, Standalone, `@defer`), React, Next.js, Vue, NestJS (`ng test`, Vitest, ESLint, Prettier).
* 🔵 **Python:** FastAPI, Django, Flask (PyTest, Ruff, Black, MyPy).
* 🩵 **Golang:** Gin, Fiber, Echo, gRPC (`go test`, `golangci-lint`, `gofmt`).
* 🔴 **Java / Kotlin:** Spring Boot, Micronaut, Quarkus (JUnit 5, Mockito, Spotless).
* 🟣 **PHP:** Laravel, Symfony (Pest, PHPUnit, PHPStan, PHP-CS-Fixer).
* 🔷 **C# / .NET 10:** ASP.NET Core 10 Minimal API / Web API (Native AOT, EF Core 10, xUnit, Roslyn, `dotnet format`).
* 🦀 **Rust:** Actix-web, Axum, Tonic (`cargo test`, Clippy, `rustfmt`).
* 🌐 **دعم واجهة المستخدم متعددة اللغات (i18n & RTL):** 🇮🇩 الإندونيسية (`id.json`)، 🇬🇧 الإنجليزية (`en.json`)، 🇨🇳 الصينية (`zh.json`)، 🇸🇦 العربية (`ar.json` مع دعم تخطيط RTL).

---

## 📖 تقرير تدقيق الجودة

سجل الاختبارات الكامل، وحل المشكلات، وتدقيق التناسق الهيكلي موثق بالكامل في [laporan-analisis-skills.md](laporan-analisis-skills.md).
