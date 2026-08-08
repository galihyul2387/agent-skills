release(v1.3.0): add Angular 17+ Standalone/Signals and .NET 10 LTS polyglot standards

### 🆕 Added
- Angular 17+ (TypeScript) Standalone Components by default (`standalone: true`, zero `NgModule`)
- Angular Signals & Fine-Grained Reactivity (`signal()`, `computed()`, `effect()`, `input()`, `output()`)
- Angular New Built-in Control Flow (`@if`, `@for` with mandatory `track`, `@switch`)
- Angular Deferrable Views (`@defer (on viewport)`, `@placeholder`, `@loading`)
- Angular SSR & Non-destructive Hydration (`provideClientHydration()`)
- Angular NgRx SignalStore (`@ngrx/signals`) state management standard
- .NET 10 (LTS / Stable) ASP.NET Core 10 Minimal APIs & Native AOT support
- .NET 10 HybridCache standard (multi-tier memory + Redis with anti-stampede)
- .NET 10 Entity Framework Core 10 & OpenAPI built-in generator
- Polyglot multi-language cheat sheet commands (Node.js, Python, Go, Java, PHP, .NET 10, Rust)
- Detailed rich annotated tagging guide in 02-git-workflow

### 🔄 Changed
- Standardized .NET container base images to .NET 10 Alpine and .NET 10 Chiseled
- Updated AGENTS.md with universal cross-language clean code rules and strict typing per language
- Standardized section numbering (1 to 8) in 03-frontend-development/SKILL.md
- Enhanced README.md and skills/README.md with Polyglot Multi-Language support matrix

### 🐛 Fixed
- Resolved expression change error troubleshooting for Angular Signals (NG0100)
- Fixed duplicate section headers in frontend skill
