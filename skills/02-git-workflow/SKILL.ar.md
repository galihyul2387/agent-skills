---
name: git-workflow-version-control-best-practices
description: دليل شامل لاستراتيجيات الفروع والتسميات القياسية وسير عمل طلبات السحب والوسوم الغنية وإدارة الإصدارات عبر Git.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# دليل المرحلة: مسار عمل Git والتحكم في الإصدارات

تركز هذه المرحلة على تطبيق مسار عمل منظم للتحكم في الإصدارات باستخدام **Git**، يشمل استراتيجيات الفروع، ومعايير رسائل الالتزام، ودورة حياة طلبات السحب (PR)، وإدارة الإصدارات، وأفضل ممارسات التعاون الجماعي.

## 1. استراتيجية الفروع (Branching Strategy)

### Git Flow (موصى به للفرق المتوسطة والكبيرة / الإصدارات المجدولة)
*   **الفروع الرئيسية:**
    *   `main` — الكود المستقر والجاهز للإنتاج. كل التزام يمثل إصداراً رسمياً.
    *   `develop` / `development` — فرع التكامل الرئيسي لدمج الميزات الجديدة.
*   **الفروع المساندة:**
    *   `feature/<feature-name>` — فرع لتطوير ميزة جديدة يتفرع من `development`.
    *   `hotfix/<fix-name>` — فرع للإصلاحات الطارئة يتفرع مباشرة من `main`.
    *   `release/<version>` — فرع إعداد الإصدارات النهائية.
    *   `testing` / `staging` — فرع مخصص لاختبارات SIT و UAT.

---

## 2. معايير رسائل الالتزام (Conventional Commits)

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

| النوع | الوصف | مثال |
|---|---|---|
| `feat` | إضافة ميزة جديدة | `feat(auth): add Google OAuth login` |
| `fix` | إصلاح خطأ برمجي | `fix(api): resolve token expiry race condition` |
| `docs` | تحديث في الوثائق فقط | `docs(readme): update installation guide` |
| `refactor` | إعادة صياغة الكود دون تغيير السلوك | `refactor(user): extract validation logic` |
| `test` | إضافة أو تعديل اختبارات | `test(auth): add test for session timeout` |
| `chore` | تحديث الحزم أو أدوات البناء | `chore(deps): update lodash to v4.17.21` |

---

## 3. مسار عمل طلب السحب (Pull Request)

*   **PR واحد = هدف واحد:** التركيز على ميزة أو إصلاح واحد في كل طلب.
*   **نموذج PR القياسي:** وصف التغييرات، روابط التذاكر، وقائمة التحقق.
*   **اعتماد واحد كحد أدنى:** وجوب الحصول على موافقة مراجع واحد على الأقل قبل الدمج.
*   **الدمج عبر Squash:** دمج التزامات الـ PR في التزام نظيف واحد على الفرع المستهدف.

---

## 4. إدارة الوسوم والإصدارات الغنية (Rich Annotated Tags)

```
release(vX.Y.Z): <ملخص الإصدار>

### 🆕 Added
- <قائمة بالميزات والتبعيات الجديدة>

### 🔄 Changed
- <قائمة بالتحسينات والتعديلات>

### 🐛 Fixed
- <قائمة بالإصلاحات البرمجية>
```

---

## ⚡ أوامر سريعة
*   `git checkout -b feature/<name>` — إنشاء فرع ميزة جديد.
*   `git commit -m "feat(scope): message"` — إنشاء التزام قياسي.
*   `git tag -a v1.0.0 -F RELEASE_NOTES.md` — إنشاء وسم غني من ملف ملاحظات الإصدار.
*   `git push origin --tags` — دفع كافة الوسوم إلى المستودع البعيد.

---

## ✅ قائمة التحقق ومعيار الاكتمال (DoD)

*   [ ] استراتيجية الفروع محددة وموثقة.
*   [ ] قواعد حماية الفروع مفعلة على `main` و `development`.
*   [ ] الالتزام بمعايير Conventional Commits مفعل آلياً.
*   [ ] نموذج طلبات السحب (`pull-request-template.md`) جاهز للاستخدام.
*   [ ] الإصدارات موسومة بدقة باستخدام Rich Annotated Tags.
