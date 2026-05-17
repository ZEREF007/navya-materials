# Handoff

**Project:** Navya Materials marketing site. Production-ready React/Vite frontend for Navya Engineering Solution (Kathmandu).
**Last session end:** 2026-05-16 02:30 HKT
**Last working state:** Phases 1 → 2.3 shipped. Home restructured around Lifecycle, Hemp Fiber Textile feature, MaterialsAtlas, FocusAreas, StatsStrip with NumberTicker count-up. Em-dashes purged site-wide. Real contact info wired (navyamaterials.official@gmail.com / +977-9868583973 / LinkedIn). Footer trimmed. WhatWeDo tagline on one line. Navbar bolded. Build clean (~150 KB gz). Live on local + GH Pages.

---

## Goal

Marketing site for **Navya Engineering Solution** (Kathmandu). Research and engineering on natural fibers (banana, hemp, Himalayan nettle) for textiles, construction, bio-based composites.

**North star:** editorial nature-magazine feel, Fraunces + Switzer typography, sub-second TTI, Lighthouse perf/a11y/SEO ≥ 95, honest plain-voice copy.

**In scope:** marketing copy, 9 routes (8 + 404), contact form (mailto fallback), responsive, SEO meta, sitemap, GH Pages deploy.

**Out of scope:** real backend, CMS, e-commerce, Nepali (i18n deferred), custom domain DNS, paid form backend, video assets.

---

## Current State

| Component | Status | URL / port |
|---|---|---|
| Vite dev server | ✅ live | `http://localhost:5173` |
| Production build | ✅ verified | 2014 modules → ~150 KB gz |
| Obsidian vault (`wiki/`) | ✅ scaffolded | 11 root pages + 4 ADRs + asset stubs |
| `handoff.md` + `progress.md` | ✅ in place | project root |
| GitHub repo | ✅ live | https://github.com/ZEREF007/navya-materials |
| GitHub Pages | ✅ live | https://zeref007.github.io/navya-materials/ |
| Deploy workflow `.github/workflows/deploy.yml` | ✅ green | every push to main auto-deploys |
| Contact form backend | ⚪ stub | `mailto:navyamaterials.official@gmail.com` |
| OG image | ⚪ stub | `public/og-image.jpg` not yet created |
| Logo SVG (final) | ⚪ stub | leaf-mark placeholder in `Logo.tsx` + `favicon.svg`; wordmark `NAVYA` uppercase semibold |

**Render pipeline:**

```
Browser → /index.html
       → /src/main.tsx
       → <HelmetProvider><BrowserRouter basename=BASE_URL>
           <App>
             <Layout>
               <Header (sticky, scroll-aware, bold navbar, mobile dialog)>
               <ScrollResetOnRoute>
               <ScrollProgress>
               <Cursor (small sage circle + cream halo)>
               <Routes lazy x9 wrapped in AnimatePresence>
               <Footer (forest-900, real contact info)>
       → Tailwind JIT classes resolved at build
```

**Routes live:** `/` · `/about` · `/natural-fibers` · `/research` · `/community` · `/products` · `/collaborate` · `/contact` · `*` (404).

**Section components in repo (`src/components/sections/`):**
`AboutStory · CTASection · CollaborateAreas · ContactDetails · ContactForm · FeaturedHighlight · FiberDeepDive · FibersGrid · FocusAreas · FounderCard · Hero · ImpactStats · LifecycleStrip · MapEmbed · MarqueeStrip (unused) · MaterialsAtlas · OpenNotes (unused) · PillarsStrip · ProductsGrid · PullQuote · StatsStrip · SubHero · Timeline (unused) · WhatWeDo`.

**Home page composition (current):**

```
Hero (image background, banana plantation, NAVYA logo top-left, bold navbar)
LifecycleStrip (5 steps: Plant → Harvest → Process → Make → Return)
WhatWeDo (5 services, asymmetric card grid; tagline one-line)
FeaturedHighlight (Hemp Fiber Textile · R&D 2026 split card)
MaterialsAtlas (Nepal SVG silhouette + 3-region list)
PullQuote (Roshan quote)
FocusAreas focusOnly variant="sand" (4 research focus areas)
StatsStrip (animated NumberTicker stats)
CTASection
```

**Data files (`src/data/`):** `collaborate.ts · fibers.ts · impact.ts · nav.ts · notes.ts · pillars.ts · products.ts · research.ts · stats.ts · timeline.ts · whatWeDo.ts`. All copy lives here.

**Common components (`src/components/common/`):** `Container · Cursor · ImageWithFallback · Logo · NumberTicker · OrganicDivider · Reveal · ScrollProgress · SectionHeading · SmoothScroll (unused) · VideoLoop (unused)`.

**UI primitives (`src/components/ui/`):** `accordion · button · input · label · separator · textarea`.

**Latest build metrics:**

| Metric | Value |
|---|---|
| Modules transformed | 2014 |
| CSS | 36.91 KB (gz 7.47) |
| App shell JS | 89.19 KB (gz 28.76) |
| Largest chunk (react) | 163.50 KB (gz 53.40) |
| Per-route JS chunk | 1.3 – 19.4 KB (gz 0.4 – 6.2) |
| Build time | ~1.9 s |

**Latest commit:** `2a59605` (spec round 2). Pushed to `origin/main`. Latest GH Actions run was green.

---

## Files in flight

**None mid-edit.** Next session expected to touch:

| Path | Reason |
|---|---|
| `public/og-image.jpg` | Replace stub before going live (1200 × 630) |
| `public/CNAME` | Add when custom domain decided |
| `src/components/sections/ContactForm.tsx` | Wire Formspree / Web3Forms when real form backend chosen |
| `src/components/common/Logo.tsx` + `public/favicon.svg` | Drop in final logo asset when available |
| `wiki/handoff.md` mirror | Wiki copy of project-root handoff if vault becomes canonical |

---

## Changed (recent sessions, condensed)

| Phase | Date | What |
|---|---|---|
| 1.0 | 2026-05-15 | Initial scaffold (Vite + React + Tailwind + 9 routes, 18 sections, 10 data files, full Obsidian vault) |
| 1.5 | 2026-05-15 | GH Pages wiring + first deploy |
| 1.6 | 2026-05-15 | Broken Unsplash URLs swapped; ImageWithFallback; Lenis + ScrollProgress + Cursor + page transitions |
| 1.7 | 2026-05-16 00:30 | Em-dash purge + naturalize voice site-wide; cursor simplified to sage circle |
| 1.8 | 2026-05-16 01:00 | MarqueeStrip, NumberTicker, PullQuote, OrganicDivider added; StatsStrip animates |
| 1.9 | 2026-05-16 01:15 | Heading hierarchy flipped (eyebrow → big H2; tagline → small italic subhead); decorative `--` hairlines purged; section heading sizes iterated (too big → smaller → 2 steps smaller) |
| 1.9b | 2026-05-16 01:30 | Scroll-time text blur fix: Lenis dropped, hero parallax dropped, Reveal releases GPU layer post-animation |
| 2.0 | 2026-05-16 01:45 | Home restructured: LifecycleStrip + FeaturedHighlight + OpenNotes + MaterialsAtlas added; PillarsStrip + AboutStory + OrganicDivider dropped from Home; AboutStory rewrite (heading promoted, image inline caption) |
| 2.1 | 2026-05-16 02:00 | Spec round 1: tighter section spacing (.section py-20 → py-12); Community story 3 renamed + rewritten ("Carrying Allo and Hemp Forward"); About drops Timeline; Products status union widened (Pilot / R&D / Prototyping Stage / Planning Stage); product renames (Bio-composite Construction Material, Allo and Hemp Yarn) |
| 2.2 | 2026-05-16 02:15 | Spec round 2: FeaturedHighlight swapped to Hemp Fiber Textile (drop "In Focus"); MaterialsAtlas hemp region corrected (mid-hills central + western); Home OpenNotes → FocusAreas focusOnly; real contact info wired (navyamaterials.official@gmail.com, +977-9868583973, LinkedIn URL); footer trimmed (Crafted with care line removed, mt-24 → mt-16) |
| 2.3 | 2026-05-16 02:30 | WhatWeDo tagline forced to one line; navbar bolded (desktop + mobile, font-semibold); handoff + progress fully rewritten |

See `progress.md` for full per-phase file lists, file paths touched, and verification commands.

---

## Failed attempts (kept for reference)

| Attempt | Why it failed | Fix |
|---|---|---|
| Lenis smooth scroll | Text fuzzed during scroll on retina (sub-pixel transforms left GPU layers warm) | Lenis removed. Native scroll + CSS smooth restored. |
| Hero parallax (`useScroll` driving y/scale on hero image) | Same blur: every scroll tick re-wrote inline `transform` with non-integer values, invalidating compositor layer under z-10 text container | Parallax removed. Hero image now a plain absolute-positioned `<div>`. |
| Framer Motion Reveal leaving `transform: translate3d(0,0,0)` post-animation | Body text under revealed sections rendered blurry until next reflow | `onAnimationComplete` flips Reveal to plain `<div>` with no inline transform. |
| YouTube background videos (`<YouTubeEmbed>` on Hero + stories) | Heavy iframe, slow load, YouTube branding flash even with modestbranding/nocookie, video content quality compressed | Reverted to high-quality static Unsplash photos. Component kept on disk for future use. |
| Mixkit hot-linked MP4 videos | Slug-to-content mapping unreliable (slugs claimed forest, content was confetti) | Skipped video path entirely. Use static images. |
| Pexels / Pixabay direct CDN hot-link | 403 Forbidden without API token + referrer | API token path documented in `wiki/future-videos.md`. |
| Eyebrow + tagline inverted (small label + big italic headline) | "Section identity" (Our Story / What We Do) was the less visible thing on the page | Flipped: eyebrow now H2 big uppercase; italic tagline now small subhead. |
| Section heading sizes too large | First flip pushed default to text-7xl xl (~100 px); "NATURAL FIBERS" wrapped to two lines | Iterated down twice. Final default text-2xl md:text-3xl lg:text-4xl xl:text-5xl. |
| Decorative `--` hairlines before eyebrow + flanking OrganicDivider | Read as visual clutter | Removed from SectionHeading + OrganicDivider. `.leaf-divider` CSS class also removed (was unused). |
| Bigger `>` Whitespace from default `.section py-20 md:py-28 lg:py-32` | Sections floated in dead space | `.section` reduced to `py-12 md:py-16 lg:py-20`. All hand-rolled section py also dropped to `py-10 md:py-14 lg:py-16`. |
| `git push` with private user email | GH rejected `shivarajbhattofficial@gmail.com` ("would publish a private email address") | All commits rewritten via `git filter-branch` to use `49589334+ZEREF007@users.noreply.github.com`. Force-pushed. |
| `Co-Authored-By: Claude` trailer in first 3 commits | User wanted only their name in repo history | Rewritten via `git filter-branch --msg-filter` (strip the line) + `--env-filter` (set author to ZEREF007). Force-pushed. |

---

## Next step

### Immediate (if user resumes today)

1. Hit https://zeref007.github.io/navya-materials/ and click through all 8 pages. Verify navbar bold, WhatWeDo tagline single line, FeaturedHighlight shows Hemp Fiber Textile.
2. `mailto:` the contact form to confirm subject + body opens correctly in mail client.
3. Confirm tel:+9779868583973 in footer opens the dial sheet on mobile.

### Phase 3 priorities (when ready)

1. **Real form backend** (1 h). Web3Forms / Formspree / Netlify Forms. Replace `mailto:` in `ContactForm.tsx onSubmit`.
2. **OG image** (1 h). 1200 × 630 JPG at `public/og-image.jpg`. Brand mark + tagline.
3. **Final logo + favicon** (depends on user). Drop SVG in `src/components/common/Logo.tsx` and `public/favicon.svg`.
4. **Custom domain** (depends on user). Add `public/CNAME`, drop `BASE_PATH` env from workflow, update `SITE` const in `src/lib/seo.tsx`, update `sitemap.xml`.
5. **Lighthouse audit** on deployed URL (30 m). Target perf / a11y / best-practices / SEO ≥ 95.
6. **JSON-LD Organization + LocalBusiness** (30 m). Inject via Helmet in `<Seo>`.
7. **Local image pipeline** (2 h). Squoosh / Sharp emit AVIF + WebP at 1920/1280/768 px widths. Drop into `public/images/`. Swap `<ImageWithFallback>` src from Unsplash CDN to local paths.

### Phase 4 (later)

8. **Vercel migration** if GH Pages limits hurt. Drop `BASE_PATH` env, add `vercel.json` rewrite, `vercel --prod`.
9. **Nepali translation** via react-i18next, `/ne/*` mirror routes.
10. **CMS** if content team wants WYSIWYG (Sanity / Decap).

### Key references for next session

| Topic | File |
|---|---|
| Map of Content | `wiki/MOC.md` |
| Architecture | `wiki/architecture.md` |
| Deploy notes | `wiki/deploy.md` |
| Routes table | `wiki/routes.md` |
| Function inventory | `wiki/functions.md` |
| Editable copy | `src/data/*.ts` |
| Section catalog | `wiki/components.md` |
| Media index | `wiki/media.md` |
| Future videos plan | `wiki/future-videos.md` |
| How to open vault | `wiki/HOW-TO-OPEN.md` |

### Operating rules already in place

- All copy lives in `src/data/*.ts`. No hardcoded strings in components.
- Every route lazy-loaded via `React.lazy` + `<Suspense>`.
- `<Seo>` mandatory at top of every page.
- `cn()` for all conditional className composition. No raw template strings.
- ADR for any architecture decision (under `wiki/decisions/`).
- `git filter-branch` if commit history needs author/trailer rewrites — always force-push with `--force-with-lease` and never to a branch other than main.
- Reduced-motion respected globally (CSS @media + `useReducedMotion`).
- Em-dashes banned in user-visible copy. Use comma, period, or parenthesis.
- Ampersand banned in user-visible copy. Use "and". (URL query strings exempt.)
- `Reveal` releases GPU layer on `onAnimationComplete` to prevent text blur.

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
4. Proceed with user's request.

**At session end:**

- Update this file (Goal / Current State / Files in flight / Changed / Failed / Next).
- Append one entry to `progress.md` per sub-step.
