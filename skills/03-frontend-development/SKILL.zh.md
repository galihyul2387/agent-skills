---
name: frontend-complete-development-best-practices
description: 前端开发综合指南，涵盖移动优先响应式设计 (RWD)、Angular 17+ 独立组件与 Signals、React、4 语言国际化 (阿拉伯 RTL 支持)、跨浏览器单会话控制与完成定义。
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# 阶段指南: 前端开发与微前端架构

本阶段专注于模块化 UI 构建、细粒度响应式编程、移动优先响应式设计 (RWD)、跨浏览器单设备活跃会话控制、Web 无障碍访问及企业级前端工程化。

## 1. 战略架构与技术选型

*   **Angular 17+ (TypeScript):** 企业级框架，采用独立组件 (Standalone)、Signals 细粒度响应式与全新内置控制流。
*   **React / Next.js:** 庞大的生态体系，支持服务端组件 (RSC) 与 SSR/SSG。
*   **Vue / Nuxt:** 组合式 API (Composition API) 与灵活轻量的响应式系统。

---

## 2. 现代 Angular 17+ 架构规范

*   **默认独立组件 (Standalone by Default):** 新功能全面废除 `NgModule`，所有组件均配置 `standalone: true`。
*   **Signals 细粒度响应式:** 使用 `signal()`、`computed()` 和 `effect()` 代替全树脏检查。
*   **全新内置控制流:** 全面采用 `@if`、`@for (item of items(); track item.id)` 和 `@switch`。
*   **延迟加载视图 (`@defer`):** 针对视口外的重量级组件应用 `@defer (on viewport)`。

---

## 3. 单一活跃会话控制: 1 个设备与 1 个活跃标签 (跨浏览器)

*   **BroadcastChannel API 与 LocalStorage 兜底:** 通过 `BroadcastChannel` 监听多标签并发，若检测到新打开标签，自动将旧标签重定向至提示页。
*   **单设备强制下线 (Force Logout):** 通过 WebSocket 或心跳检测同步状态，新设备登录时自动注销旧设备会话。

---

## 4. 多语言界面支持 (i18n & RTL: ID, EN, ZH, AR)

*   **仅翻译用户界面文本:** 变量名、函数名、类名、API 路由及 JSON 键名 (`"AUTH.LOGIN_TITLE"`) **必须 100% 保持标准英文**。
*   **4 种语言字典:** `id.json`、`en.json`、`zh.json` (简体中文)、`ar.json` (阿拉伯语)。
*   **阿拉伯语 RTL 布局支持:** 切换至阿拉伯语时动态设置 `dir="rtl"`，使用 CSS 逻辑属性 (`margin-inline-start`) 确保完美镜像翻转。

---

## 5. 响应式网页设计标准 (Responsive Web Design / RWD)

*   **移动优先 (Mobile-First):** 优先编写小屏幕基础样式，通过 `min-width` 媒体查询逐级增强 (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`)。
*   **流式排版与 Grid:** 采用 `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));` 与 `clamp()` 流式字体。
*   **触控友好:** 移动端可点击元素最小尺寸不得小于 **44 × 44 px**。
*   **防止布局抖动 (CLS):** 为所有图片声明明确的 `aspect-ratio`。

---

## ⚡ 常用命令速查
*   `ng serve` / `npm run dev` — 启动本地开发服务。
*   `ng build --configuration production` / `npm run build` — 编译生产包。
*   `ng test` / `npm test` — 执行单元测试。

---

## ✅ 检查清单与完成定义 (DoD)

*   [ ] 全面落地 Mobile-First 响应式设计，320px 至 4K 屏幕无异常横向滚动条。
*   [ ] 移动端交互元素触控区域满足 44 × 44 px 规范。
*   [ ] 4 语言界面 (含阿拉伯语 RTL) 与 Navbar 语言切换器正常运作。
*   [ ] BroadcastChannel 多标签单会话限制生效。
*   [ ] WCAG 2.1 AA 无障碍审计得分达到 90 分以上。
