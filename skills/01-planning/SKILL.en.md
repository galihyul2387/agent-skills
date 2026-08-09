---
name: planning-prd-best-practices
description: Structured guide for project planning, PRD authoring, 4-language UI planning (ID, EN, ZH, AR with RTL), scoping, single-session control, and security-by-design standards.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# Phase Guide: Planning & PRD

The objective of this phase is to establish a clear, structured, and measurable project foundation before entering the UI design or code implementation phases.

## Strategic Steps

### 1. Scope Definition (Scoping)
*   Define core features that are mandatory for the Minimum Viable Product (MVP).
*   Defer secondary features to subsequent milestones to prevent *scope creep*.

### 2. User Stories, Session Policy & 4-Language UI Planning (i18n & RTL)
*   **PRD Language Selection:** Technical PRDs and User Stories can be authored in **Bahasa Indonesia** or **English** based on team/stakeholder preferences.
*   **4-Language UI Planning (i18n & RTL):** Plan the user interface to natively support 4 major languages: **🇮🇩 Bahasa Indonesia (ID)**, **🇬🇧 English (EN)**, **🇨🇳 Mandarin Chinese (ZH)**, and **🇸🇦 Arabic (AR with RTL layout)**. Separate all UI display labels into 4 JSON dictionary files (`id.json`, `en.json`, `zh.json`, `ar.json`) and strictly enforce that all code identifiers remain 100% standard programming English.
*   **User Persona & Workflows:** Map out who the application users are (*personas*) and define system interaction scenarios (e.g., authentication flow, business transactions).
*   **Session Policy Definition:** Establish the rule that each user account is only permitted to be active on **1 device/browser** at a time and restrict multi-tab usage (*Single Session & Tab Concurrency Control*).

### 3. Tech Stack Selection & Compatibility
*   Select appropriate frontend and backend technologies (e.g., Angular 17+/React, .NET 10/Node/Python/Go, DB, and API layer).
*   Define target modern browser support (Chrome, Firefox, Safari, Edge).
*   Ensure the selected technologies integrate well with AI pair programming assistants (*Cursor, Claude Code, Copilot*).

## Security by Design Baseline

*   **Secrets Management:** Plan the use of *Environment Variables* (`.env`) for all API keys and sensitive credentials. Never hardcode sensitive data in source code.
*   **Least Privilege:** Enforce the principle of least privilege in database, API gateway, and cloud infrastructure access design.
*   **Data Privacy & Compliance:** Ensure data storage planning complies with standard encryption protocols (HTTPS/TLS 1.3, at-rest encryption).

---

## ⚡ Command Cheat Sheet
*   `npm init -y` / `dotnet new sln` / `go mod init` — Initialize the project repository foundation.
*   `git init -b main` — Initialize the version control repository with a `main` branch.

## 🛠️ Common Troubleshooting
*   **Ambiguous Requirements:** Clarify user requirements through structured interviews, mockups, or user flow diagrams before coding starts.
*   **Scope Creep:** Lock down the MVP scope and record additional feature requests into the future backlog.

## 📐 Naming Conventions
*   **Document Files:** Use descriptive *kebab-case* (e.g., `prd-v1.0.md`, `system-architecture-design.md`).
*   **Epics & User Stories:** Use standard prefixes (e.g., `EPIC-01: User Authentication`, `US-01: Single Active Login`).

---

## ✅ Checklist & Definition of Done (DoD)

*   [ ] The project scope (MVP vs Future Scope) is clearly defined and agreed upon.
*   [ ] Document language is selected (**Bahasa Indonesia** or **English**) and maintained consistently throughout.
*   [ ] User Stories, acceptance criteria, and edge cases are documented.
*   [ ] The single active session policy (1 device & 1 active tab) is explicitly planned.
*   [ ] Tech stack, browser compatibility matrix, and DevSecOps security baseline are approved.
