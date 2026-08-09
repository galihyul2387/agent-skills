---
name: git-workflow-version-control-best-practices
description: 分支策略、约定式提交、Pull Request 流程、代码合并、丰富标签及版本发布管理的综合指南。
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# 阶段指南: Git 工作流与版本控制

本阶段专注于建立结构化的 **Git** 版本控制工作流，涵盖分支策略、Commit 提交规范、Pull Request 生命周期、发布管理及团队高效协作最佳实践。

## 1. 分支策略 (Branching Strategy)

### Git Flow (适用于中大型团队 / 周期性发布)
*   **主干分支:**
    *   `main` — 生产就绪的稳定代码。`main` 上的每个 Commit 均代表一个正式发布版本。
    *   `develop` / `development` — 开发集成分支，所有新功能在此合并验证后再进入发布流程。
*   **辅助分支:**
    *   `feature/<feature-name>` — 从 `development` 签出，用于新功能开发 (如 `feature/login-page`)。
    *   `hotfix/<fix-name>` — 直接从 `main` 签出，用于生产环境紧急故障修复。
    *   `release/<version>` — 从 `development` 签出，用于发布候选版本的准备与测试。
    *   `testing` / `staging` — 专用于 SIT/UAT 测试验证的独立分支。

### Trunk-Based Development (适用于小型敏捷团队 / 持续集成)
*   所有开发者直接在 `main` 上开发或使用短生命周期分支 (< 1 天)。
*   结合特性开关 (Feature Flags) 与自动化 CI/CD 流水线。

---

## 2. 提交规范 (Conventional Commits)

### 提交信息标准格式
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### 常用提交类型清单

| 类型 | 说明 | 示例 |
|---|---|---|
| `feat` | 新增功能 | `feat(auth): add Google OAuth login` |
| `fix` | 缺陷修复 | `fix(api): resolve token expiry race condition` |
| `docs` | 文档更新 | `docs(readme): update installation guide` |
| `style` | 代码格式调整（不影响逻辑） | `style(css): fix button alignment on mobile` |
| `refactor` | 代码重构（不改变功能行为） | `refactor(user): extract validation logic` |
| `test` | 增加或修改测试用例 | `test(auth): add test for session timeout` |
| `chore` | 构建工具、依赖或配置更新 | `chore(deps): update lodash to v4.17.21` |
| `perf` | 性能优化 | `perf(query): optimize user search with index` |
| `ci` | CI/CD 配置与脚本调整 | `ci(github): add caching to build workflow` |

---

## 3. Pull Request (PR) 工作流程

### 创建 Pull Request
*   **单个 PR = 单一目标:** 保持每个 PR 专注于单一功能、单次修复或单组逻辑变更。
*   **PR 模板清单:** 包含变更描述、关联 Issue 编号、QA 检查清单及 UI 截图/视频证明。
*   **Draft PR:** 在进行中工作 (WIP) 中使用 Draft PR 以获取团队早期反馈。

### 审查与批准流程
*   **至少 1 位批准人:** 每个 PR 在合并前必须获得至少 1 位同行审查者的批准。
*   **自动化检查:** 所有 CI 检查门禁（Lint、测试、安全扫描）必须全部通过。
*   **审查响应时间:** 审查 SLA 目标控制在 **24 个工作小时内**。

### 合并策略 (Merge Strategy)
*   **Squash and Merge (推荐):** 将 PR 中的所有 Commit 合并为 1 个整洁的提交记录并入目标分支。
*   **Merge Commit:** 保留完整的独立提交历史（适用于 Release 分支）。

---

## 4. 标签与丰富发布说明 (Rich Annotated Tags)

### 语义化版本 (SemVer)
```
MAJOR.MINOR.PATCH (例如 v1.8.0)
```

### 丰富注解标签格式 (Keep a Changelog)
```
release(vX.Y.Z): <简要发布摘要>

### 🆕 Added
- <新增功能、模块或依赖列表>

### 🔄 Changed
- <重构、性能优化或配置更新列表>

### 🐛 Fixed
- <缺陷修复与技术问题解决列表>

### 🔐 Security
- <安全漏洞补丁与依赖审计>
```

---

## ⚡ 常用命令速查
*   `git checkout -b feature/<name>` — 创建并切换至新特性分支。
*   `git commit -m "feat(scope): message"` — 创建符合规范的 Commit。
*   `git tag -a v1.0.0 -m "release: v1.0.0"` — 创建附注标签。
*   `git tag -a v1.0.0 -F RELEASE_NOTES.md` — 从文件内容创建丰富标签。
*   `git push origin --tags` — 将所有本地标签推送至远程仓库。

## 🛠️ 常见故障排查
*   **合并冲突 (Merge Conflicts):** 拉取目标分支最新代码 (`git pull origin development`)，本地解决冲突并测试后提交。
*   **分支提交错误:** 使用 `git stash` 暂存更改，切换至正确分支后再执行 `git stash pop`。

## 📐 命名规范
*   **分支命名:** 采用 *kebab-case* 与标准前缀 (`feature/`, `bugfix/`, `hotfix/`, `release/`)。
*   **标签命名:** 采用带 `v` 前缀的 SemVer 格式 (如 `v1.0.0`, `v1.8.0`)。

---

## ✅ 检查清单与完成定义 (DoD)

*   [ ] 团队分支策略 (Git Flow / Trunk-based) 已配置并文档化。
*   [ ] `main` 与 `development` 分支已配置分支保护规则 (Branch Protection)。
*   [ ] 已通过 Commitlint 强制执行约定式提交。
*   [ ] Pull Request 标准模板 (`pull-request-template.md`) 已就绪。
*   [ ] 正式版本均已创建包含详细更新内容的 Rich Annotated Tag。
