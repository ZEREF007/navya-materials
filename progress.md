# Progress — Navya Materials

Append-only sub-step log. One entry per sub-step. Paired with `handoff.md` (snapshot).

---

## [2026-05-15 22:50] phase1-scaffold | Scaffold project + config

Status: done
Files touched: `package.json`, `tsconfig*.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `.gitignore`, `public/{favicon.svg,robots.txt,sitemap.xml}`
Test: `ls "/Users/ace/Desktop/Claude_Projects/Navya Materials"` shows all root configs
Next: write src lib + theme CSS

---

## [2026-05-15 23:00] phase1-lib | lib/ + theme CSS

Status: done
Files touched: `src/index.css`, `src/lib/{utils,seo,motion}.ts`
Test: `cat src/index.css | head -40` — tokens present, custom utilities present
Next: write src/data content files

---

## [2026-05-15 23:05] phase1-data | data/ modules

Status: done
Files touched: `src/data/{nav,pillars,whatWeDo,fibers,stats,timeline,collaborate,products,research,impact}.ts`
Test: `ls src/data/*.ts | wc -l` → 10
Next: write UI primitives

---

## [2026-05-15 23:10] phase1-ui | UI primitives (button, input, textarea, label, accordion, separator)

Status: done
Files touched: `src/components/ui/{button,input,textarea,label,accordion,separator}.tsx`
Test: build attempted next will verify
Next: layout + common components

---

## [2026-05-15 23:13] phase1-layout | Layout + common (Header, Footer, Container, Reveal, SectionHeading, Logo, ScrollToTop)

Status: done
Files touched: `src/components/{layout,common}/*.tsx`
Test: Header renders w/ logo + nav on `/` after dev start
Next: write 18 section components

---

## [2026-05-15 23:18] phase1-sections | Section components

Status: done
Files touched: `src/components/sections/{Hero,SubHero,PillarsStrip,WhatWeDo,FibersGrid,FiberDeepDive,AboutStory,FounderCard,Timeline,StatsStrip,ImpactStats,FocusAreas,ProductsGrid,CollaborateAreas,ContactForm,ContactDetails,MapEmbed,CTASection}.tsx`
Test: ls `src/components/sections/*.tsx | wc -l` → 18
Next: write pages

---

## [2026-05-15 23:22] phase1-pages | 9 page components

Status: done
Files touched: `src/pages/{Home,About,NaturalFibers,Research,Community,Products,Collaborate,Contact,NotFound}.tsx`
Test: each page composes sections + has `<Seo>`
Next: wire App.tsx + main.tsx

---

## [2026-05-15 23:24] phase1-app | App.tsx + main.tsx routing

Status: done
Files touched: `src/App.tsx`, `src/main.tsx`
Test: `pnpm build` (next step)
Next: install + build

---

## [2026-05-15 23:25] phase1-build | pnpm install + first build

Status: partial → done
Files touched: `src/components/sections/PillarsStrip.tsx` (unused `Reveal` import removed)
Test: `cd "/Users/ace/Desktop/Claude_Projects/Navya Materials" && pnpm build` → exits 0, prints chunk sizes
Next: dev server smoke

---

## [2026-05-15 23:27] phase1-dev | Dev server + smoke test

Status: done
Files touched: (none — runtime check only)
Test: `curl -sI http://localhost:5173/{,about,natural-fibers,contact}` → 4× `HTTP/1.1 200 OK`
Next: switch to deploy phase (GH Pages)

---

## [2026-05-15 23:28] phase1-polish | Fix Tailwind duration-[1200ms] ambiguity warnings

Status: done
Files touched: `src/components/sections/{WhatWeDo,FibersGrid,ProductsGrid}.tsx`
Test: dev log shows HMR reload, no more ambiguity warnings on next compile
Next: vault + handoff/progress

---

## [2026-05-15 23:30] phase1-vault | Obsidian vault scaffolded

Status: done
Files touched: `wiki/{MOC,architecture,routes,components,functions,data-model,design-system,motion,seo,deploy,glossary}.md`, `wiki/decisions/ADR_{001..004}_*.md`
Test: `ls wiki/*.md | wc -l` → 11, `ls wiki/decisions/*.md | wc -l` → 4
Next: handoff.md + progress.md done. Move to GH Pages config.

---

## [2026-05-15 23:38] phase1.5-ghpages-config | Wire base path + basename + 404 fallback

Status: done
Files touched: `vite.config.ts`, `src/main.tsx`, `src/vite-env.d.ts` (new), `package.json` (build:gh script)
Test: `BASE_PATH=/navya-materials/ pnpm build:gh` → exits 0; `head dist/index.html` shows `/navya-materials/favicon.svg`; `ls dist/404.html` exists.
Next: write deploy workflow

---

## [2026-05-15 23:40] phase1.5-workflow | GH Actions deploy workflow

Status: done
Files touched: `.github/workflows/deploy.yml`
Test: yaml parsed locally — workflow_dispatch + push:main triggers, pnpm/setup-node, BASE_PATH env, configure-pages → upload-pages-artifact → deploy-pages
Next: git init + push

---

## [2026-05-15 23:43] phase1.5-repo | git init + first push to ZEREF007/navya-materials

Status: done
Files touched: (none — git operations)
Test: `gh repo view ZEREF007/navya-materials --web` shows commit; `git remote -v` shows origin
Next: enable Pages + watch deploy

---

## [2026-05-15 23:45] phase1.5-pages | Enable Pages + first deploy

Status: done
Files touched: (none — gh api call + workflow auto-trigger)
Test: `gh run watch 25925619066` → ✓ build 27s, ✓ deploy 9s. `curl -sI https://zeref007.github.io/navya-materials/` → HTTP/2 200. `curl -s …/about | grep "Navya Materials"` → matches (SPA fallback OK).
Next: phase 2 — real form backend + local image pipeline + OG image + Lighthouse audit


---

## [2026-05-15 23:52] phase1.6-images | Replace 4 dead Unsplash URLs + add ImageWithFallback

Status: done
Files touched: `src/components/common/ImageWithFallback.tsx` (new), `src/data/{fibers,whatWeDo,products,impact}.ts`, `src/pages/Products.tsx`, `src/components/sections/{Hero,FibersGrid,WhatWeDo,ProductsGrid,FiberDeepDive,ImpactStats,SubHero,FounderCard}.tsx`
Test: `curl -sI https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=400` → 200; preview screenshot shows all 5 WhatWeDo cards loaded
Next: smooth scroll + cursor + scroll progress

---

## [2026-05-15 23:55] phase1.6-smooth-cursor | Lenis + Cursor + ScrollProgress + page transition

Status: done
Files touched: `package.json` (+lenis), `src/components/common/{SmoothScroll,ScrollProgress,Cursor}.tsx` (new), `src/components/layout/Layout.tsx`, `src/App.tsx` (AnimatePresence wrap)
Test: dev preview shows progress bar, hero parallax on scroll, page-fade on route change
Next: optimize CSS — grain opacity, kenburns, content-visibility

---

## [2026-05-15 23:57] phase1.6-css-perf | index.css overhaul (content-visibility + cursor + reduced grain)

Status: done
Files touched: `src/index.css`, `src/components/sections/Hero.tsx` (hero-section class)
Test: `pnpm build` → ✓ 2012 modules in 1.81s. CSS 36.91 KB (gz 7.47).
Next: commit + push


---

## [2026-05-16 00:30] phase1.7-naturalize | Em-dash purge + naturalize voice + simple cursor

Status: done
Files touched:
- `src/data/{fibers,pillars,whatWeDo,collaborate,research,products,stats,impact}.ts` (em-dashes removed, copy rewritten in plain voice)
- `src/components/sections/{Hero,AboutStory,CollaborateAreas,FiberDeepDive,FibersGrid,FounderCard,MapEmbed,WhatWeDo,ContactForm}.tsx` (em-dashes → commas / periods / parentheticals; FiberDeepDive list bullets em-dash → middot)
- `src/components/layout/Footer.tsx` (3 em-dashes replaced)
- `src/components/common/{Logo,Cursor}.tsx` (em-dashes in aria-label + comment)
- `src/lib/seo.tsx` (separator changed ` — ` → ` · `, DEFAULT_DESC rewritten)
- `src/pages/*.tsx` (Seo titles cleaned + em-dashes purged via sed pass)
- `src/index.css` (comment em-dash)
- `index.html` (description + title em-dashes)
- `src/components/common/Cursor.tsx` (rewritten: simple sage circle with cream halo + soft shadow; no wobble, no trailing dot, no rotation)
- `wiki/assets/videos/` (YT stubs deleted; README placeholder added)
Test: `pnpm build` → ✓ 2014 modules in 2.01s, no errors. `grep -rn "—" src/ index.html` → empty.
Next: commit + push + deploy

