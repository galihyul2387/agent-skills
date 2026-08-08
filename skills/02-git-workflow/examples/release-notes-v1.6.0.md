release(v1.6.0): add 4-language UI support (ID, EN, ZH, AR) with Right-to-Left (RTL) layout standards

### 🆕 Added
- Multi-Language UI (i18n) ecosystem expanded to 4 core languages:
  - 🇮🇩 Bahasa Indonesia (`id.json` / `id-ID`)
  - 🇬🇧 English (`en.json` / `en-US`)
  - 🇨🇳 Chinese / Mandarin (`zh.json` / `zh-CN` - 简体中文)
  - 🇸🇦 Arabic (`ar.json` / `ar-SA` - العربية)
- Dynamic Right-to-Left (RTL) layout switching standard (`dir="rtl"`, `lang="ar"`) and CSS Logical Properties (`margin-inline-start`, `padding-inline-end`) for Arabic UI
- Complete English documentation editions (`SKILL.en.md`) across all 10 SDLC modules
- 1-click Language Switcher header (`[ 🇮🇩 Bahasa Indonesia ] | [ 🇬🇧 English ]`) across all documentation and skill files

### 🔄 Changed
- Explicitly standardized that ONLY user-facing UI labels are multi-language, while all code variables, function names, properties, classes, API routes, and JSON dictionary keys MUST remain 100% standard programming English
- Updated AGENTS.md and AGENTS.en.md with global rules for 4 UI languages and RTL layout
- Updated 03-frontend-development/SKILL.md and SKILL.en.md with 4-dictionary JSON architecture and Navbar language switcher component
