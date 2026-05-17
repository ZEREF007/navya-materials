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


---

## [2026-05-16 01:00] phase1.8-editorial | MarqueeStrip + NumberTicker + PullQuote + OrganicDivider

Status: done
Files touched: `src/components/sections/{MarqueeStrip,PullQuote}.tsx` (new), `src/components/common/{NumberTicker,OrganicDivider}.tsx` (new), `src/components/sections/StatsStrip.tsx` (NumberTicker wired)
Test: `pnpm build` → ✓ build successful; preview shows marquee scroll, stat numbers count up on viewport
Next: heading hierarchy flip + size revision

---

## [2026-05-16 01:15] phase1.9-heading-flip | Eyebrow becomes loud H2; tagline becomes quiet subhead; `--` hairlines purged

Status: done
Files touched: `src/components/common/SectionHeading.tsx` (eyebrow promoted to display H2; title demoted to italic subhead), `src/index.css` (.leaf-divider removed), `src/components/common/OrganicDivider.tsx` (flanking strokes removed, leaf only)
Notes: heading sizes iterated 3 rounds — too big → smaller → 2 steps smaller. Final default text-2xl md:text-3xl lg:text-4xl xl:text-5xl. Tagline text-lg md:text-xl lg:text-2xl. Body 16-18 px.
Test: visual scan
Next: drop Lenis (text blur on scroll)

---

## [2026-05-16 01:30] phase1.9b-blur-fix | Lenis dropped + hero parallax dropped + Reveal releases GPU layer

Status: done
Files touched: `src/components/layout/Layout.tsx` (SmoothScroll unmounted), `src/index.css` (Lenis classes removed, scroll-behavior: smooth restored), `src/components/sections/Hero.tsx` (useScroll/useTransform removed; image now plain `<div>` wrapper), `src/components/common/Reveal.tsx` (post-animation re-render as plain div via onAnimationComplete)
Test: scroll fast on dev — text crisp. Verified across Home + About + Community.
Next: AboutStory layout flip (heading promoted, image inline caption)

---

## [2026-05-16 01:45] phase2.0-home-restructure | LifecycleStrip + FeaturedHighlight + OpenNotes + MaterialsAtlas; AboutStory layout flip

Status: done
Files touched:
- `src/components/sections/LifecycleStrip.tsx` (new — 5-step process)
- `src/components/sections/FeaturedHighlight.tsx` (new — editorial split card)
- `src/components/sections/OpenNotes.tsx` (new — 3 journal cards)
- `src/components/sections/MaterialsAtlas.tsx` (new — Nepal SVG + 3-region list)
- `src/data/notes.ts` (new — 3 lab note entries)
- `src/components/sections/AboutStory.tsx` (heading promoted to top, image below w/ caption, eyebrow dropped)
- `src/pages/Home.tsx` (drop PillarsStrip + AboutStory + OrganicDivider; add LifecycleStrip + FeaturedHighlight + OpenNotes + MaterialsAtlas, replace FibersGrid preview with MaterialsAtlas)
- `src/pages/About.tsx` (drop MarqueeStrip)
Test: `pnpm build` → all chunks valid; visual verified
Next: spec round 1 (spacing + story 3 + Timeline drop + Products statuses)

---

## [2026-05-16 02:00] phase2.1-spec1 | Tighter spacing + story 3 rewrite + About drops Timeline + Products status overhaul

Status: done
Files touched: `src/index.css` (.section py reduced), all section components (per-section py reduced), `src/data/impact.ts` (story 3 renamed + rewritten), `src/pages/About.tsx` (Timeline removed), `src/data/products.ts` (status union widened: Pilot / R&D / Prototyping Stage / Planning Stage; product renames), `src/components/sections/ProductsGrid.tsx` (new statusStyles, eyebrow → big heading)
Notes: status mapping → Banana-fiber Textile (Pilot, unchanged), Hemp Composite Board (Prototype → R&D), Allo Heritage Yarn (renamed Allo and Hemp Yarn, Planning Stage, body rewritten), Rural Decorticator (In R&D → R&D), Bio-composite Tiles (renamed Bio-composite Construction Material, Prototyping Stage), Mixed-Fiber Cordage (Prototype → Planning Stage).
Test: `pnpm build` → ✓ 2014 modules
Next: spec round 2

---

## [2026-05-16 02:15] phase2.2-spec2 | FeaturedHighlight swap + atlas region fix + Home Focus Areas + real contact info + footer trim

Status: done
Files touched:
- `src/components/sections/FeaturedHighlight.tsx` (drop 'In Focus' eyebrow; swap Allo Heritage Yarn → Hemp Fiber Textile, new copy + image + R&D · 2026 badge)
- `src/components/sections/MaterialsAtlas.tsx` (hemp region: 'Mid-hills, central Nepal' → 'Mid-hills, central and western Nepal')
- `src/components/sections/FocusAreas.tsx` (refactored: new `variant` + `focusOnly` props; Methodology block optional)
- `src/pages/Home.tsx` (drop OpenNotes; add <FocusAreas focusOnly variant="sand" />)
- `src/components/layout/Footer.tsx` (email → navyamaterials.official@gmail.com; phone → +977-9868583973; LinkedIn → https://www.linkedin.com/company/navya-materials; 'Crafted with care' line removed; spacing tightened mt-24 → mt-16)
- `src/components/sections/ContactDetails.tsx` (same contact updates; WhatsApp slot replaced w/ Phone tel: link)
- `src/components/sections/ContactForm.tsx` (mailto target updated)
Test: `pnpm build` → ✓
Next: spec round 3

---

## [2026-05-16 02:30] phase2.3-spec3 | WhatWeDo one-line tagline + bold navbar + docs

Status: done
Files touched:
- `src/components/sections/WhatWeDo.tsx` (title <br> + italic span removed; now single inline `Five disciplines, one shared mission.` wrapped in `whitespace-nowrap`)
- `src/components/layout/Header.tsx` (desktop NavLink gained `font-semibold`; mobile NavLink also `font-semibold`; muted-foreground swapped to foreground/70 for stronger inactive state)
- `handoff.md`, `progress.md` (full audit + rewrite reflecting phases 1.7 → 2.3)
Test: `pnpm build` → ✓ no errors
Next: commit + push
