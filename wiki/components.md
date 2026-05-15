---
tags: [components, navya]
---

# Components

Three tiers: **ui primitives** → **common helpers** → **sections** → composed in **pages**.

## UI primitives (`src/components/ui/`)

| Component | Props of note | Used by |
| --- | --- | --- |
| `Button` | `variant: default \| outline \| ghost \| link \| accent` · `size: default \| sm \| lg \| xl \| icon` · `asChild` | Header, Hero, CTASection, ContactForm, NotFound |
| `Input` | `<input>` props passthrough · underline-only styling | ContactForm |
| `Textarea` | `<textarea>` props passthrough | ContactForm |
| `Label` | Radix Label · uppercase tracking-eyebrow | ContactForm |
| `Accordion` | Radix Accordion wrapper · chevron rotation | (reserved for fiber deep dive expansions) |
| `Separator` | Radix Separator · `orientation` | Footer |

## Common helpers (`src/components/common/`)

| Component | Purpose |
| --- | --- |
| `Container` | Constrained width wrapper (`size: default \| wide \| narrow`) |
| `SectionHeading` | `eyebrow + h2 + lede`, supports `align` + `size` |
| `Reveal` / `StaggerGroup` / `StaggerItem` | Framer Motion in-view animation. See [[motion]]. |
| `Logo` | Leaf-mark SVG + wordmark · `mono` variant for dark footer |

## Sections (`src/components/sections/`)

| Section | Used by page(s) | Notes |
| --- | --- | --- |
| `Hero` | Home | Full-bleed photo + Ken-Burns + staggered headline |
| `SubHero` | About, NaturalFibers, Research, Community, Products, Collaborate, Contact | Faded-image bg + meta dl |
| `PillarsStrip` | Home, About | 4 brand pillars w/ icons |
| `WhatWeDo` | Home | 5-card asymmetric grid (first card spans 2 rows on lg) |
| `FibersGrid` | Home (preview), NaturalFibers (full) | 3 fiber cards w/ image + tags |
| `FiberDeepDive` | NaturalFibers | Per-fiber alternating layout w/ properties + uses |
| `AboutStory` | Home (compact), About (full) | 2-col text |
| `FounderCard` | About | Image + pull-quote |
| `Timeline` | About | 4-step vertical timeline |
| `StatsStrip` | Home | Dark green strip · 4 large stats |
| `ImpactStats` | Community | Numbers + 3 alternating story blocks |
| `FocusAreas` | Research | Focus areas grid + methodology |
| `ProductsGrid` | Products | 6 products w/ status badges |
| `CollaborateAreas` | Collaborate | 6-area divided grid |
| `ContactForm` | Collaborate, Contact | RHF + Zod + Sonner toast + mailto fallback |
| `ContactDetails` | Contact | 3 channel cards + socials |
| `MapEmbed` | Contact | OpenStreetMap iframe |
| `CTASection` | Home, About, NaturalFibers, Research, Community, Products | `variant: default \| dark` |

## Layout (`src/components/layout/`)

- `Layout` — flex column, sticky header + main + footer
- `Header` — sticky w/ scroll-state · desktop NavLink set · mobile dialog
- `Footer` — dark forest, 3-col grid · socials · newsletter blurb · ©
- `ScrollToTop` — listens to `useLocation` to reset scroll on route change

## Add a new section

1. File at `src/components/sections/NewSection.tsx`.
2. Use `Container` + `SectionHeading` + `Reveal` for consistency.
3. Pull copy from `src/data/*.ts` (don't hardcode).
4. Add row in this file.
5. Import + place in the page that needs it.

## Cross-refs

- Routes that consume sections → [[routes]]
- Content shape per section → [[data-model]]
- Motion primitives → [[motion]]
