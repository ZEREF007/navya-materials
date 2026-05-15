---
created: 2026-05-15
tags: [moc, index, navya, navya-materials]
---

# Navya Materials — Map of Content

> **START HERE.** This is the index for the Navya Materials project vault. Open in Obsidian for graph view + wiki-link navigation.

## Project at a glance

**Goal.** Production-ready marketing site for Navya Engineering Solution (Nepal). Frontend only. 8 routes: Home, About, Natural Fibers, Research & Innovation, Community & Impact, Products, Collaborate, Contact + 404.

**Stack.** Vite 5 · React 18 · TypeScript · Tailwind 3.4 · React Router 6 (lazy routes) · Framer Motion · react-hook-form + zod · react-helmet-async · Radix UI · Sonner · lucide-react.

**Status.** ✅ Live on local dev (`http://localhost:5173`). Build verified (2008 modules, ~150 KB gz). Pending: GitHub upload + GH Pages host.

See: [[handoff|project-root handoff.md]] · [[progress|progress.md]] (root)

## Pages

| Topic | Wiki page |
| --- | --- |
| Top-level architecture | [[architecture]] |
| Routes + page composition | [[routes]] |
| Component tree | [[components]] |
| Function inventory | [[functions]] |
| Content data shape | [[data-model]] |
| Design tokens + typography | [[design-system]] |
| Motion + animation patterns | [[motion]] |
| SEO / meta / sitemap | [[seo]] |
| Deploy strategy | [[deploy]] |
| Glossary | [[glossary]] |

## Decisions (ADR)

| # | Decision |
| --- | --- |
| 001 | [[ADR_001_stack\|Stack: Vite + React 18 + Tailwind + shadcn-style primitives]] |
| 002 | [[ADR_002_routing\|Routing: React Router 6 multi-route over single-page anchors]] |
| 003 | [[ADR_003_typography\|Typography: Fraunces display + Switzer body (Fontshare)]] |
| 004 | [[ADR_004_host\|Host: GitHub Pages for first launch, Vercel as upgrade path]] |

## Source-of-truth files

| File | Purpose |
| --- | --- |
| `handoff.md` (root) | Session handoff snapshot |
| `progress.md` (root) | Append-only session log |
| `src/data/*.ts` | All editable copy |
| `src/index.css` | Theme tokens (HSL) |
| `tailwind.config.js` | Tailwind theme extension |
| `vite.config.ts` | Build + base path config |

## Wiki conventions

- Every Markdown file in `wiki/` is wiki-linked. Use `[[file-name]]` not relative paths.
- Update [[MOC]] whenever adding/removing a page.
- Decisions go in `wiki/decisions/` as `ADR_NNN_title.md`.
- ⚠ Never modify `src/data/*.ts` schemas without updating [[data-model]].
