# Handoff

**Project:** Navya Materials marketing site — production-ready React/Vite frontend for Nepal-rooted sustainable materials company.
**Last session end:** 2026-05-15 23:58 HKT
**Last working state:** Phase 1 + 1.5 + **Phase 1.6 (perf + polish)** complete — broken Unsplash URLs replaced, ImageWithFallback fallback layer added, Lenis smooth scroll, ScrollProgress bar, custom cursor (dot + ring, mix-blend-difference), hero parallax via scroll-progress, page-transition fade via AnimatePresence, content-visibility on sections. Build verified (~180 KB gz). Site live on `localhost:5173` + GitHub Pages.

---

## Goal

Ship a production-ready brochure site for **Navya Engineering Solution** (Kathmandu) — research and engineering on natural fibers (banana / hemp / Himalayan nettle) for textiles, construction, bio-based composites. North star: editorial nature-magazine feel, distinctive Fraunces+Switzer typography, sub-second TTI on consumer devices, Lighthouse perf/a11y/SEO ≥ 95.

**In scope (this build):** marketing copy, 8 routes + 404, contact form (mailto fallback), responsive, SEO meta, sitemap, GH Pages deploy.

**Out of scope:** real backend, CMS, e-commerce, Nepali translation (i18n deferred), product imagery shoot, custom domain DNS, paid form backend.

---

## Current State

| Component | Status | Port / URL |
|-----------|--------|-----|
| Vite dev server (Navya site) | ✅ live | `http://localhost:5173` |
| Production build (`dist/`) | ✅ verified | 2008 modules → 33 KB CSS + ~520 KB JS (~150 KB gz) |
| Obsidian vault (`wiki/`) | ✅ scaffolded | 11 pages + 4 ADRs |
| `handoff.md` + `progress.md` | ✅ in place | project root |
| GitHub repo | ✅ live | https://github.com/ZEREF007/navya-materials |
| GitHub Pages | ✅ live | https://zeref007.github.io/navya-materials/ |
| Deploy workflow (`.github/workflows/deploy.yml`) | ✅ green | run #25925619066 (36 s end-to-end) |
| Contact form backend | ⚪ stub | `mailto:` only; Formspree/Web3Forms TBD |
| OG image | ⚪ stub | `public/og-image.jpg` not yet created |
| Logo SVG (final) | ⚪ stub | leaf-mark placeholder in `Logo.tsx` + `favicon.svg` |

**Pipeline (request → render):**

```
Browser → /index.html
       → /src/main.tsx
       → <HelmetProvider><BrowserRouter basename=BASE_URL>
           <App>
             <Layout>
               <Header (sticky, scroll-aware, mobile dialog)>
               <ScrollToTop/>
               <Routes lazy x9>
               <Footer>
       → Tailwind JIT classes resolved at build
```

**Routes live:** `/` · `/about` · `/natural-fibers` · `/research` · `/community` · `/products` · `/collaborate` · `/contact` · `*` (404).

**Response fields (data flowing to UI):**
- `nav.ts`, `pillars.ts`, `whatWeDo.ts`, `fibers.ts`, `stats.ts`, `timeline.ts`, `collaborate.ts`, `products.ts`, `research.ts`, `impact.ts` — all editable in `src/data/`.

**Latest build metrics:**

| Metric | Value |
|---|---|
| Modules transformed | 2008 |
| CSS | 33.16 KB (gz 6.98) |
| App shell JS | 87.09 KB (gz 27.97) |
| Largest chunk (react) | 163.50 KB (gz 53.40) |
| Per-route JS chunk | 1.3 – 10.9 KB (gz < 4) |
| Build time | 1.79 s |

---

## Files in flight

**None mid-edit.** Next session will TOUCH:

| Path | Reason |
|------|--------|
| `vite.config.ts` | Add `base` env-conditional for GH Pages |
| `src/main.tsx` | Pass `basename={import.meta.env.BASE_URL}` to `BrowserRouter` |
| `package.json` | Add `build:gh` script + 404 copy |
| `.github/workflows/deploy.yml` | NEW — Actions workflow for Pages |
| `public/CNAME` | Only if/when custom domain added |
| `public/og-image.jpg` | Replace stub before going live |

---

## Changed (this session)

### Code — config + scaffold

| File | Action |
|------|--------|
| `package.json` | NEW — deps + scripts |
| `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` | NEW |
| `vite.config.ts` | NEW — alias `@`, manual chunks (react/motion/radix) |
| `tailwind.config.js` | NEW — custom palette (sand/forest/clay), Fraunces+Switzer families, kenburns/marquee keyframes, SVG grain bg |
| `postcss.config.js` | NEW |
| `index.html` | NEW — preconnect fonts, theme-color, skip-to-content |
| `.gitignore` | NEW |
| `public/favicon.svg` | NEW — leaf-mark SVG placeholder |
| `public/robots.txt`, `public/sitemap.xml` | NEW |
| `.claude/launch.json` | NEW — preview server config |

### Code — app

| File | Action |
|------|--------|
| `src/main.tsx`, `src/App.tsx` | NEW — providers + router + lazy routes |
| `src/index.css` | NEW — Tailwind layers, CSS vars, utility classes (`.section`, `.eyebrow`, `.underline-grow`, etc.), reduced-motion guard |
| `src/lib/utils.ts` | NEW — `cn()` |
| `src/lib/seo.tsx` | NEW — `<Seo>` Helmet wrapper |
| `src/lib/motion.ts` | NEW — `fadeUp`, `fadeIn`, `stagger`, `cardRise` variants |
| `src/data/{nav,pillars,whatWeDo,fibers,stats,timeline,collaborate,products,research,impact}.ts` | NEW — 10 data modules |
| `src/components/ui/{button,input,textarea,label,accordion,separator}.tsx` | NEW — 6 primitives (shadcn-style, self-owned) |
| `src/components/common/{Container,SectionHeading,Reveal,Logo}.tsx` | NEW |
| `src/components/layout/{Layout,Header,Footer,ScrollToTop}.tsx` | NEW |
| `src/components/sections/{Hero,SubHero,PillarsStrip,WhatWeDo,FibersGrid,FiberDeepDive,AboutStory,FounderCard,Timeline,StatsStrip,ImpactStats,FocusAreas,ProductsGrid,CollaborateAreas,ContactForm,ContactDetails,MapEmbed,CTASection}.tsx` | NEW — 18 sections |
| `src/pages/{Home,About,NaturalFibers,Research,Community,Products,Collaborate,Contact,NotFound}.tsx` | NEW — 9 pages |

### Docs / vault

| File | Action |
|------|--------|
| `README.md` | NEW — stack, run, deploy, content sources |
| `wiki/MOC.md` | NEW — Map of Content, START HERE |
| `wiki/architecture.md` | NEW |
| `wiki/routes.md` | NEW |
| `wiki/components.md` | NEW |
| `wiki/functions.md` | NEW |
| `wiki/data-model.md` | NEW |
| `wiki/design-system.md` | NEW |
| `wiki/motion.md` | NEW |
| `wiki/seo.md` | NEW |
| `wiki/deploy.md` | NEW |
| `wiki/glossary.md` | NEW |
| `wiki/decisions/ADR_{001..004}_*.md` | NEW — stack, routing, typography, host |
| `handoff.md` | NEW — this file |
| `progress.md` | NEW — first entry |

### Deploys

| Target | Status |
|--------|--------|
| GH repo `ZEREF007/navya-materials` | NOT YET — next sub-step |
| GH Pages | NOT YET |

---

## Failed attempts

| Attempt | Why it failed | Fix |
|---------|---------------|-----|
| `pnpm build` first run | TS strict: `'Reveal' is declared but its value is never read.` in `PillarsStrip.tsx`. | Removed unused import. |
| Tailwind `duration-[1200ms]` arbitrary | Warned: "ambiguous — could be transition-duration or animation-duration". | Switched to explicit `[transition-duration:1200ms]` arbitrary property. |
| `preview_start navya-dev` from workspace `Navya Materials/.claude/launch.json` | Preview tool only reads workspace-root `.claude/launch.json`. | Wrote `launch.json` under the active workspace (`n8n resume editor/.claude/`) using `bash -c "cd … && pnpm dev"`. |
| `pnpm build:gh` first run | TS: `Property 'env' does not exist on type 'ImportMeta'.` — `import.meta.env.BASE_URL` had no types. | Added `src/vite-env.d.ts` with `/// <reference types="vite/client" />`. |

---

## Next step

### Immediate (if user resumes today)

1. Open `http://localhost:5173/` — confirm hero renders, click through all 8 routes via Header nav, submit contact form, confirm `mailto:` opens.
2. Run `pnpm build && pnpm preview` — Lighthouse audit on http://localhost:4173/ (target perf ≥ 95).
3. Walk through Obsidian vault — open `wiki/MOC.md` as start. Graph view should show wiki-link clusters.

### Sub-step 2 (completed in this thread)

- ✅ `vite.config.ts` honours `BASE_PATH` env (default `/`, `/navya-materials/` in CI).
- ✅ `src/main.tsx` `<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>`.
- ✅ `src/vite-env.d.ts` added with `vite/client` reference for `import.meta.env` types.
- ✅ `package.json` script `build:gh` produces base-prefixed bundle + copies `dist/index.html` → `dist/404.html`.
- ✅ `.github/workflows/deploy.yml` deploys on push to `main` (Pages artifact + `deploy-pages@v4`).
- ✅ Repo: `ZEREF007/navya-materials` (public).
- ✅ Pages source set to `workflow` via `gh api -X POST repos/.../pages`.
- ✅ Verified: `curl -I https://zeref007.github.io/navya-materials/` → 200; `/about` HEAD 404 but body is app shell (SPA fallback working).

### Phase 2 priorities (when ready)

1. **Real form backend** (1 h) — Web3Forms or Formspree; swap in `ContactForm.tsx onSubmit`.
2. **Local image pipeline** (2 h) — Squoosh AVIF+WebP at 1920/1280/768. Drop into `/public/images/`, switch `<img src>` away from Unsplash hot-link.
3. **OG image + final logo** (1 h) — replace stubs in `public/og-image.jpg` + `Logo.tsx`.
4. **Lighthouse audit + fixes** (1–2 h) — measure on `pnpm preview` + GH Pages URL.
5. **JSON-LD Organization + LocalBusiness** (30 m) — inject via `<Helmet>`.
6. **Custom domain** (depends on user) — add `public/CNAME`, DNS records, update `SITE` const + sitemap.

### Phase 3 (later)

7. **Vercel migration** — better DX, edge cache, instant previews.
8. **Nepali translation** — react-i18next, `/ne/*` mirror routes.
9. **CMS** — if content team needs WYSIWYG, evaluate Sanity / Decap.

### Key references for next session

| Topic | File |
|-------|------|
| Map of Content (START HERE) | `wiki/MOC.md` |
| Architecture overview | `wiki/architecture.md` |
| Deploy notes | `wiki/deploy.md` |
| Routes table | `wiki/routes.md` |
| Function inventory | `wiki/functions.md` |
| Editable copy | `src/data/*.ts` |

### Operating rules already in place

- Lazy-load every route (`React.lazy` + `<Suspense>`).
- All copy lives in `src/data/*.ts` — no hardcoded strings in components.
- Reduced-motion respected globally (CSS @media + `useReducedMotion`).
- `cn()` for class merging — never raw template strings.
- `<Seo>` mandatory at top of every page.
- ADR for any architecture decision (under `wiki/decisions/`).
- Append `progress.md` after every sub-step; refresh `handoff.md` at session end.

---

## How to use this file

**At session start:**

1. Read this file FIRST.
2. Check `progress.md` for entries since this handoff was written.
3. Run quick verify:
   ```bash
   cd "/Users/ace/Desktop/Claude_Projects/Navya Materials"
   pnpm install && pnpm dev
   # open http://localhost:5173
   ```
   If anything fails, fix before proceeding.
4. Then proceed with user's request.

**At session end:**

- Update this file with new Goal / State / Changed / Failed / Next.
- Append a new entry to `progress.md` for each sub-step.
