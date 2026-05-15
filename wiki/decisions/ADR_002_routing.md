---
tags: [adr, decision, routing, navya]
adr: 002
date: 2026-05-15
status: accepted
---

# ADR 002 — Real routes, not single-page anchor nav

## Context

8 nav items. Each section has distinct depth of content. Need shareable URLs + per-page SEO.

## Decision

Use **React Router 6 with one real route per nav item**. Lazy-load every page via `React.lazy` + `<Suspense>`. Single-page-app shell with code-split per route.

## Considered

- **Single page with `id` anchors.** Simpler to ship; loses per-page SEO and shareable URLs. Lighthouse SEO penalty (one `<title>`).
- **Multi-page MPA (separate HTML per route).** Heavier build; would need Astro or similar. Slower iteration.

## Consequences

- Each page emits its own JS chunk (1–11 KB gz). App shell loaded once.
- Per-route `<title>` + meta via `<Seo>`.
- 404 handled via wildcard route + GH Pages `404.html` SPA fallback.
- Mobile menu closes on navigation (handled in `Header.tsx`).

## See

[[routes]] · [[architecture]] · [[deploy]]
