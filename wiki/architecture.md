---
tags: [architecture, navya]
---

# Architecture

Static SPA. No backend. Build output = `dist/` static assets.

## High-level flow

```
index.html ─┬─ /src/main.tsx ── BrowserRouter ── HelmetProvider ── <Toaster/>
            │                       │
            │                       └── App.tsx
            │                            ├── <Layout>  (Header / main / Footer)
            │                            ├── <ScrollToTop/>
            │                            └── Routes
            │                                 ├── /              -> lazy(Home)
            │                                 ├── /about         -> lazy(About)
            │                                 ├── /natural-fibers-> lazy(NaturalFibers)
            │                                 ├── /research      -> lazy(Research)
            │                                 ├── /community     -> lazy(Community)
            │                                 ├── /products      -> lazy(Products)
            │                                 ├── /collaborate   -> lazy(Collaborate)
            │                                 ├── /contact       -> lazy(Contact)
            │                                 └── *              -> lazy(NotFound)
            │
            └── Tailwind 3.4 (JIT) compiles src/**/*.tsx + index.html
```

## Layering

| Layer | Folder | Notes |
| --- | --- | --- |
| App shell | `src/App.tsx`, `src/main.tsx` | router + providers |
| Layout | `src/components/layout/` | Header, Footer, Layout, ScrollToTop |
| Common | `src/components/common/` | Container, SectionHeading, Reveal, Logo |
| UI primitives | `src/components/ui/` | Button, Input, Textarea, Label, Accordion, Separator |
| Sections | `src/components/sections/` | Page-level building blocks (Hero, WhatWeDo, FibersGrid…) |
| Pages | `src/pages/` | One file per route. Composes [[components]] sections. |
| Lib | `src/lib/` | `cn()`, `<Seo>`, motion variants |
| Data | `src/data/` | All copy + structured content. See [[data-model]]. |

## Routing

See [[routes]]. Routes are lazy-loaded via `React.lazy` + `<Suspense>` — each page emits its own JS chunk.

## Build output

```
dist/
├── index.html
├── 404.html                     (SPA fallback for GH Pages)
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── assets/
    ├── index-[hash].css         (~33 KB)
    ├── react-[hash].js          (~163 KB)
    ├── motion-[hash].js         (~112 KB)
    ├── radix-[hash].js          (~0.4 KB)
    ├── index-[hash].js          (~87 KB - app shell)
    └── [Page]-[hash].js         (per-route chunks, 1–11 KB each)
```

Chunking strategy (manual chunks in `vite.config.ts`): `react`, `motion`, `radix`. Everything else routes through page splits.

## Hosting

See [[deploy]]. Default = [[ADR_004_host|GitHub Pages]] via `.github/workflows/deploy.yml`.

## Cross-refs

- Functions exported by lib/data → [[functions]]
- Motion variants used app-wide → [[motion]]
- SEO/Helmet flow → [[seo]]
