---
tags: [routes, pages, navya]
---

# Routes

All routes lazy-loaded. Each row links to the page file via Obsidian.

| Path | Page | Sections used |
| --- | --- | --- |
| `/` | `src/pages/Home.tsx` | Hero · PillarsStrip · WhatWeDo · FibersGrid (preview) · AboutStory · StatsStrip · CTASection |
| `/about` | `src/pages/About.tsx` | SubHero · AboutStory · FounderCard · PillarsStrip · Timeline · CTASection |
| `/natural-fibers` | `src/pages/NaturalFibers.tsx` | SubHero · FiberDeepDive (banana/hemp/allo) · CTASection |
| `/research` | `src/pages/Research.tsx` | SubHero · FocusAreas · CTASection |
| `/community` | `src/pages/Community.tsx` | SubHero · ImpactStats (incl. field stories) · CTASection |
| `/products` | `src/pages/Products.tsx` | SubHero · ProductsGrid · CTASection |
| `/collaborate` | `src/pages/Collaborate.tsx` | SubHero · CollaborateAreas · ContactForm |
| `/contact` | `src/pages/Contact.tsx` | SubHero · ContactDetails · ContactForm · MapEmbed |
| `*` | `src/pages/NotFound.tsx` | 404 |

## Adding a route

1. Create `src/pages/NewPage.tsx`.
2. Add `<Seo>` + sections.
3. Register lazy import + `<Route>` in `src/App.tsx`.
4. Append to `navItems` in `src/data/nav.ts` (auto-appears in Header + Footer).
5. Add `<url>` entry in `public/sitemap.xml`.
6. Update [[MOC]] + this page.

## Cross-refs

- Section catalog → [[components]]
- Per-page SEO content → [[seo]]
- Page-level data sources → [[data-model]]
