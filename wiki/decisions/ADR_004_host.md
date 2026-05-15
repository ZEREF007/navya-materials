---
tags: [adr, decision, host, deploy, navya]
adr: 004
date: 2026-05-15
status: accepted
---

# ADR 004 — Host on GitHub Pages for first launch

## Context

User wants a fast first deploy, no billing setup, no DNS work. The site is static — any static host works. Future: custom domain + form backend.

## Decision

Deploy via **GitHub Actions → GitHub Pages**, project-page URL: `https://<user>.github.io/navya-materials/`.

Implementation: see [[deploy]].

## Considered

- **Vercel** — best DX, edge cache, previews. Still the preferred upgrade. Skipped for v1 only because user requested GH Pages explicitly.
- **Cloudflare Pages** — comparable; GH integration similar but extra account setup.
- **Netlify** — built-in forms is nice for contact form, but extra account setup.

## Consequences

- **Base path quirk.** `BASE_PATH=/navya-materials/` env var threaded through `vite.config.ts` + Router `basename` + Pages publishing path.
- **SPA fallback.** `dist/index.html` copied to `dist/404.html` during build so client-side routes survive page reload.
- **No form backend yet.** ContactForm uses `mailto:` fallback. Wire Formspree / Web3Forms before going live.
- **Migration to Vercel later** is trivial — drop env var, delete CNAME, add `vercel.json` rewrite.

## See

[[deploy]] · [[architecture]] · [[handoff|root handoff.md]]
