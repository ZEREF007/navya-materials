---
tags: [adr, decision, stack, navya]
adr: 001
date: 2026-05-15
status: accepted
---

# ADR 001 — Stack choice: Vite + React 18 + Tailwind 3.4 + shadcn-style primitives

## Context

Need production-ready static marketing site for Navya Materials. 8 routes, contact form, image-heavy, must score well on Lighthouse (perf + a11y + SEO).

## Decision

- **Build tool:** Vite 5 (fast HMR, simple config, esbuild + Rollup).
- **Framework:** React 18 + TypeScript 5.
- **Styling:** Tailwind 3.4 with custom HSL CSS-var token system.
- **Component primitives:** Radix UI headless + a small in-repo `ui/` folder following the shadcn pattern (no `npx shadcn-ui add` dependency; we author/own each primitive).
- **Forms:** react-hook-form + zod resolver.
- **Motion:** Framer Motion.
- **Routing:** React Router 6.
- **Meta:** react-helmet-async.

## Considered

- **Next.js App Router.** Overkill for a static brochure. Heavier deploy story on GH Pages (would need `output: export`). Skipped.
- **Astro.** Excellent for static, but adds a templating layer the team doesn't need; React-only stack is simpler to maintain.
- **Vanilla HTML/CSS.** Too brittle for 8 routes + dynamic form + future translations.

## Consequences

- Easy to migrate later to Next.js / Remix without major rewrites (components are framework-agnostic React).
- All code owned in-repo — no shadcn CLI dependency drift.
- Bundle size ~150 KB gz for app shell incl. React + Framer; acceptable.

## See

[[ADR_002_routing]] · [[ADR_003_typography]] · [[ADR_004_host]] · [[architecture]]
