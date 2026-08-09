---
name: git-workflow-version-control-best-practices
description: Comprehensive guide for branching strategies, conventional commits, pull request workflow, code merge, rich tagging, and release management.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# Phase Guide: Git Workflow & Version Control

This phase focuses on implementing structured **Git** version control workflows, covering branching strategies, commit conventions, Pull Request lifecycle, release management, and team collaboration best practices.

## 1. Branching Strategy

### Git Flow (Recommended for Medium-to-Large Teams / Scheduled Releases)
*   **Main Branches:**
    *   `main` — Production-ready, stable code. Every commit on `main` represents an official release.
    *   `develop` / `development` — Main integration branch where new features merge before release.
*   **Supporting Branches:**
    *   `feature/<feature-name>` — Branched from `development` for new feature work (e.g., `feature/login-page`).
    *   `hotfix/<fix-name>` — Branched directly from `main` for critical production emergency fixes.
    *   `release/<version>` — Branched from `development` when preparing a new release candidate.
    *   `testing` / `staging` — Dedicated branch for SIT/UAT verification before production merge.

### Trunk-Based Development (Alternative for Small Teams / Aggressive CI/CD)
*   All developers work directly on `main` or use short-lived branches (< 1 day lifetime).
*   Pairs effectively with Feature Flags and automated CI/CD pipelines.

---

## 2. Commit Conventions (Conventional Commits)

### Commit Message Format
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Standard Commit Types

| Type | Description | Example |
|---|---|---|
| `feat` | New feature implementation | `feat(auth): add Google OAuth login` |
| `fix` | Bug fix | `fix(api): resolve token expiry race condition` |
| `docs` | Documentation-only changes | `docs(readme): update installation guide` |
| `style` | Formatting / whitespace without logic change | `style(css): fix button alignment on mobile` |
| `refactor` | Code refactoring without behavior alteration | `refactor(user): extract validation logic` |
| `test` | Adding or updating tests | `test(auth): add test for session timeout` |
| `chore` | Build tools, config, dependencies update | `chore(deps): update lodash to v4.17.21` |
| `perf` | Performance improvement | `perf(query): optimize user search with index` |
| `ci` | CI/CD configuration updates | `ci(github): add caching to build workflow` |

---

## 3. Pull Request (PR) Workflow

### Creating a Pull Request
*   **One PR = One Objective:** Keep PRs focused on a single feature, bugfix, or logical change.
*   **PR Template Checklist:** Include Description, Reference/Issue links, QA checklist, and UI screenshots/recordings.
*   **Draft PRs:** Use Draft PRs for Work-in-Progress items to gather early team feedback.

### Review & Approval Process
*   **Minimum 1 Approval:** Every PR requires at least one peer approval before merging.
*   **Automated Checks:** All CI status checks (linting, tests, security scans) must pass.
*   **Review Turnaround Time:** Target review SLA within **24 business hours**.

### Merge Strategy
*   **Squash and Merge (Recommended):** Consolidate all PR commits into 1 clean commit on the target branch.
*   **Merge Commit:** Retain individual commit histories (ideal for release branches).

---

## 4. Tagging & Rich Release Notes

### Semantic Versioning (SemVer)
```
MAJOR.MINOR.PATCH (e.g., v1.3.0)
```

### Rich Annotated Tag Format (Keep a Changelog)
```
release(vX.Y.Z): <short release summary>

### 🆕 Added
- <List of new features, modules, or dependencies>

### 🔄 Changed
- <List of refactoring, performance improvements, or updates>

### 🐛 Fixed
- <List of bug fixes and technical resolutions>

### 🔐 Security
- <Security vulnerability patches or dependency audits>
```

---

## ⚡ Command Cheat Sheet
*   `git checkout -b feature/<name>` — Create a new feature branch.
*   `git commit -m "feat(scope): message"` — Create a conventional commit.
*   `git tag -a v1.0.0 -m "release: v1.0.0"` — Create an annotated release tag.
*   `git tag -a v1.0.0 -F RELEASE_NOTES.md` — Create a tag with full release notes.
*   `git push origin --tags` — Push all tags to the remote repository.

## 🛠️ Common Troubleshooting
*   **Merge Conflicts:** Pull the latest target branch (`git pull origin development`), resolve conflicts locally, and test before pushing.
*   **Wrong Branch Commit:** Use `git stash` and `git checkout <correct-branch>` to migrate uncommitted changes safely.

## 📐 Naming Conventions
*   **Branches:** Use *kebab-case* with standard prefixes (`feature/`, `bugfix/`, `hotfix/`, `release/`).
*   **Tags:** Use `v` prefix with SemVer (e.g., `v1.0.0`, `v1.4.0`).

---

## ✅ Checklist & Definition of Done (DoD)

*   [ ] Repository branching strategy (Git Flow / Trunk-based) is configured and documented.
*   [ ] Branch protection rules are active on `main` and `development`.
*   [ ] Conventional Commits are enforced via commitlint hooks.
*   [ ] Standard Pull Request template (`pull-request-template.md`) is in place.
*   [ ] Releases are tagged with rich annotated release notes.
