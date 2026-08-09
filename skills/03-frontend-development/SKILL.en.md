---
name: frontend-complete-development-best-practices
description: Comprehensive Frontend Development guide covering Responsive Web Design (Mobile-First RWD), Angular 17+ Standalone & Signals, React, 4-language i18n (Arabic RTL), cross-browser single-session, and Definition of Done.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md) | [ 🇨🇳 简体中文 ](SKILL.zh.md) | [ 🇸🇦 العربية ](SKILL.ar.md)

---

# Phase Guide: Frontend Development & Microfrontends

This phase focuses on modular UI implementation, fine-grained reactivity, single active session control across browsers, web accessibility, and enterprise frontend architecture.

## 1. Strategic Frontend Architecture & Framework Choice

### Framework Ecosystem
*   **Angular 17+ (TypeScript):** Enterprise framework with Standalone Components, Signals, and New Control Flow.
*   **React / Next.js:** Vast ecosystem, Server Components, SSR/SSG, rich third-party library support.
*   **Vue / Nuxt:** Flexible reactivity, Composition API, high performance, gentle learning curve.
*   **Svelte / SvelteKit:** No-virtual-DOM compilation, ultra-small bundle sizes, built-in run-time speed.
*   **Flutter / React Native:** Cross-platform mobile application development.

---

## 2. Modern Angular 17+ (TypeScript) Architecture Standards

For applications built with **Angular v17+ (17/18/19+)**, adhere to the following modern standards:

### Standalone Components by Default
*   **Zero NgModule:** Do not create `NgModule` for new features. All components, directives, and pipes must have `standalone: true`.
*   **Explicit Dependency Imports:** Declare dependencies directly in `@Component({ imports: [CommonModule, RouterLink, MyComponent] })`.

### Signals & Fine-Grained Reactivity
*   **Angular Signals (`signal`, `computed`, `effect`):** Use Signals for local component state without triggering full-tree dirty checking.
*   **Signal Inputs & Outputs:** Use `input()`, `input.required()`, and `output()` instead of legacy `@Input()` / `@Output()`.
*   **RxJS Interoperability:** Use `toSignal()` and `toObservable()` from `@angular/core/rxjs-interop` for HTTP stream bridging.

### New Built-in Control Flow
*   `@if (isLoggedIn()) { ... } @else { ... }` — Replaces `*ngIf`.
*   `@for (item of items(); track item.id) { ... } @empty { ... }` — Replaces `*ngFor` (mandatory `track` for high rendering throughput).
*   `@switch (status()) { @case ('active') { ... } @default { ... } }` — Replaces `*ngSwitch`.

### Deferrable Views (`@defer` for Bundle Optimization)
*   `@defer (on viewport)` — Lazy loads heavy widgets only when visible in the viewport.
*   `@placeholder` — Skeleton loader display while waiting for trigger.
*   `@loading (minimum 500ms)` — Spinner display during chunk download.

### State Management in Angular 17+
*   **NgRx SignalStore (`@ngrx/signals`):** Standard modular, signal-based, type-safe state management.

---

## 3. Single Active Session Control: 1 Device & 1 Active Tab (Cross-Browser)

### Multi-Tab Concurrency Control
*   **BroadcastChannel API & LocalStorage Fallback:** Use `BroadcastChannel` to communicate between tabs in modern browsers, with a `window.addEventListener('storage')` fallback.
*   **Tab Redirect:** If a second tab is opened, redirect the older tab to an informative warning page so that only **1 active tab** processes user data.

### Single Device Active Session (Force Logout)
*   Sync authentication status in real-time (via WebSocket or token heartbeat). If a new login occurs on another browser or device, automatically terminate (*force logout*) previous active sessions.

---

## 4. Input Validation & Sanitization

*   **Schema Validation:** Use robust schema validators (**Zod** or **Yup**) integrated with form libraries (**React Hook Form** or Angular Reactive Forms with Signals).
*   **Sanitization:** Sanitize all free-text user inputs with DOMPurify before sending payloads.

---

## 5. Frontend Security Best Practices

*   **XSS Mitigation:** Avoid raw HTML rendering (`dangerouslySetInnerHTML`, `[innerHTML]`) without explicit sanitization.
*   **Token Storage:** Never store long-lived tokens in `localStorage`. Prioritize **HttpOnly Cookies** or in-memory state.

---

## 6. State Management Strategy

*   **Local State:** `signal()` (Angular) / `useState` (React).
*   **Global Client State:** NgRx SignalStore / Zustand / Redux Toolkit.
*   **Server State & Caching:** React Query / TanStack Query / SWR / Angular Resource API.

---

## 7. Web Accessibility (a11y — WCAG 2.1 AA)

*   **Semantic HTML:** Use `<button>`, `<nav>`, `<main>`, `<article>` appropriately.
*   **ARIA Attributes:** Add `aria-label`, `aria-describedby`, and `aria-live` for dynamic elements.
*   **Keyboard Nav:** Full keyboard navigability (Tab, Enter, Escape, Arrow keys).
*   **Color Contrast:** Minimum **4.5:1** contrast ratio for normal text.

---

## 8. Microfrontends Architecture (Module Federation)

*   **Run-time Integration:** Use Webpack / Rspack Module Federation.
*   **Error Boundaries:** Wrap each microfrontend in an Error Boundary to isolate failures.

---

## 9. Multi-Language UI Support (i18n & RTL: ID, EN, ZH, AR)

To ensure the user interface can switch dynamically (*real-time*) supporting 4 major languages: **Bahasa Indonesia (ID)**, **English (EN)**, **Chinese (ZH - 简体中文)**, and **Arabic (AR - العربية)**:

### ⚠️ Text Labels vs Code Symbols Rule (Labels Only Are Multi-Language)
*   **ONLY User-Facing Display Labels Are Translated:** Page titles, button labels, form instructions, placeholders, tooltip text, and user feedback messages.
*   **CODE REMAINS 100% STANDARD PROGRAMMING ENGLISH:** All variable names, function names, class/interface declarations, object properties, state variables, API route paths, and JSON dictionary keys (`"AUTH.LOGIN_TITLE"`) **MUST remain in standard English**. Never use non-English names for code identifiers.

### Externalized UI Dictionaries (4 JSON Dictionaries)
*   Strictly avoid hardcoding display text strings directly in component templates.
*   Store all user-facing labels in 4 structured dictionary files with English key identifiers:
    *   `src/assets/i18n/id.json` — Indonesian UI translation dictionary.
    *   `src/assets/i18n/en.json` — English UI translation dictionary.
    *   `src/assets/i18n/zh.json` — Simplified Chinese (Mandarin) translation dictionary (简体中文).
    *   `src/assets/i18n/ar.json` — Arabic translation dictionary (العربية).

### Right-to-Left (RTL) Layout Support for Arabic
*   **Dynamic `dir` Attribute:** When the user selects Arabic (`ar`), toggle the document direction to `document.documentElement.dir = 'rtl'` and `lang = 'ar'`. For ID, EN, and ZH, set `dir = 'ltr'`.
*   **CSS Logical Properties:** Use modern CSS logical properties such as `margin-inline-start`, `padding-inline-end`, and `text-align: start` (avoid rigid `left`/`right`) to ensure flawless bidirectional layout flipping.

### Language Switcher Component
*   Provide a language selector (*dropdown* or toggle buttons) in the main Navbar / Header with 4 clear indicators:
    *   `🇮🇩 ID` | `🇬🇧 EN` | `🇨🇳 ZH` | `🇸🇦 AR`
*   **User Preference Persistence:** Save the selected language in `localStorage` (`localStorage.setItem('app_lang', 'id')`) to preserve language across browser tabs and page reloads.
*   **Automatic Fallback:** Default to browser locale (`navigator.language`) or fallback to `id`.

### Backend Synchronization via HTTP Interceptor
*   Attach an HTTP Interceptor to automatically forward the active language in request headers to the API:
    ```http
    Accept-Language: id-ID, id;q=0.9, en;q=0.8, zh-CN;q=0.7, ar-SA;q=0.6
    ```
    ensuring server-side error messages, email notifications, and alerts are returned in the user's active language.

---

## 10. Responsive Web Design (RWD) Standards

The application must be designed and built to look balanced, highly usable, and completely free of accidental horizontal scrolling across all screen dimensions:

### Mobile-First Approach
*   **Mobile-First Implementation:** Build for mobile viewports (`< 640px`) first as the base style, then progressively enhance for larger screens using `min-width` media queries (e.g., Tailwind CSS `sm:`, `md:`, `lg:`, `xl:`, `2xl:`).
*   **Mandatory Viewport Meta Tag:** Ensure `index.html` contains:
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    ```

### Standard Industry Breakpoints

| Breakpoint | Target Viewport | Devices | Layout Pattern |
|:---:|:---:|:---|:---|
| **Mobile (`< 640px`)** | `320px - 639px` | Smartphone portrait & landscape | Single-column stacked layout, Hamburger/Bottom bar navigation, modal bottom sheet. |
| **Tablet (`md: 768px`)**| `640px - 1023px`| iPad, Tablets, foldable screens | 2-column responsive grid, off-canvas / collapsible sidebar. |
| **Desktop (`lg: 1024px`)**| `1024px - 1439px`| Standard laptops, Desktop monitors | Multi-column grid (3-4 columns), persistent navigation sidebar, split pane. |
| **Large Displays (`2xl: 1536px`)**| `≥ 1440px` | 4K & Ultrawide monitors | Max-width content containers (`max-w-7xl` / `container`) to prevent overstretching. |

### Modern Fluid Layouts
*   **Auto-fit CSS Grid:** Create responsive card grids without rigid media query breakpoints:
    ```css
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    ```
*   **Flexbox Wrapping:** Ensure button toolbars and metadata chips wrap naturally with `flex-wrap: wrap` and `gap`.
*   **Fluid Typography & Spacing:** Use `clamp()` for smoothly scalable text and padding across viewport widths:
    ```css
    font-size: clamp(1rem, 2.5vw, 2rem);
    padding: clamp(1rem, 3vw, 2.5rem);
    ```

### Responsive Media & CLS Prevention
*   **Fluid Images:** Apply `max-width: 100%; height: auto;` globally on `<img>` and `<video>` elements.
*   **Aspect Ratio:** Declare explicit `aspect-ratio` or `width`/`height` attributes on images to prevent Cumulative Layout Shift (CLS).

### Touch & Mobile Ergonomics
*   **Minimum Tap Target Size (44-48px):** Ensure interactive elements (buttons, inputs, icons) meet the **44 × 44 px** minimum tap target size (Apple HIG / Material Design).
*   **Safe Area Insets:** Account for camera cutouts (*notches*) and home indicator bars:
    ```css
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    ```

---

## ⚡ Multi-Framework Command Cheat Sheet

### React / Next.js / Vue / Svelte
*   `npm run dev` / `pnpm dev` — Start local development server.
*   `npm run build` — Compile code bundle for production.
*   `npm run lint` — Check for linter errors.

### Angular 17+ (TypeScript)
*   `ng serve` / `npm start` — Start Angular Vite-powered development server.
*   `ng build --configuration production` — Compile optimized production bundle.
*   `ng test` — Run unit tests.
*   `ng lint` — Run Angular ESLint rules.

## 🛠️ Common Troubleshooting
*   **Angular Signals NG0100:** Use `computed()` or `untracked()` to avoid prohibited side-effects in computed signals.
*   **Missing Dependencies:** Delete `node_modules` and lockfile, then re-run clean install (`npm ci`).

## 📐 Naming Conventions
*   **React/Vue Components:** *PascalCase* (e.g., `UserProfile.jsx`, `UserCard.vue`).
*   **Angular 17+ Components:** *kebab-case* filename, *PascalCase* class (e.g., `user-profile.component.ts`, `UserProfileComponent`).
*   **Signals / Variables:** *camelCase* (e.g., `userData = signal<User | null>(null)`).

---

## ✅ Checklist & Definition of Done (DoD)

*   [ ] Mobile-First approach is implemented with standard breakpoints (`sm`, `md`, `lg`, `xl`).
*   [ ] Zero accidental horizontal scrollbars across all screen widths (320px to 4K).
*   [ ] Minimum interactive touch target of 44 × 44 px on mobile viewports.
*   [ ] Images have `max-width: 100%` and `aspect-ratio` defined to eliminate CLS.
*   [ ] Multi-tab restriction is active via `BroadcastChannel` with `localStorage` fallback.
*   [ ] Angular 17+ uses *Standalone Components* and *Angular Signals* (if Angular).
*   [ ] New Control Flow (`@if`, `@for` with `track`, `@switch`) is applied.
*   [ ] Multi-language UI (ID, EN, ZH, AR with RTL) is implemented via JSON dictionaries and language switcher.
*   [ ] Form inputs are validated via schema (Zod/Yup).
*   [ ] WCAG 2.1 AA accessibility score exceeds 90 on Lighthouse.
*   [ ] No raw credentials or access tokens are stored in `localStorage`.
