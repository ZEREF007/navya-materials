---
tags: [media, index, navya, images, videos, stories]
type: index
---

# Media Index

Every image, video, and story used on the site — cross-linked to the data file + component that consumes it. Update both sides when you swap assets.

> Refer to: [[MOC|Map of Content]] · [[data-model]] · [[components]]

## Cross-link convention

- `[[Image: banana-plantation]]` → notes/asset stub in `wiki/assets/images/`
- `[[Video: banana-leaves-wind]]` → notes/asset stub in `wiki/assets/videos/`
- `[[Story: by-product-to-income]]` → notes/asset stub in `wiki/assets/stories/`
- `[[src/data/fibers.ts]]` / `[[src/components/sections/Hero.tsx]]` → real file references

Obsidian renders these as graph nodes. Wiki tags drive color groups in [graph view](file:.obsidian/graph.json).

---

## Hero

| Slot | Asset | Used by |
|---|---|---|
| Hero video | [[hero-banana-drone]] (YouTube `jqgev5A4tcg` — banana plantation drone) | [[Hero.tsx]] via [[YouTubeEmbed.tsx]] |
| Hero poster fallback | [[banana-plantation]] (Unsplash 1653481006616) | [[Hero.tsx]] |

## Natural fibers

| Slot | Asset | Used by |
|---|---|---|
| Banana fiber | [[banana-plantation]] (Unsplash 1653481006616) | [[fibers.ts]] → [[FibersGrid.tsx]] · [[FiberDeepDive.tsx]] |
| Hemp fiber | [[hemp-plants]] (Unsplash 1532765488483) | [[fibers.ts]] |
| Himalayan nettle (allo) | [[himalayan-range]] (Unsplash 1681635851078) | [[fibers.ts]] |

## What We Do (Home cards)

| Card | Asset | Used by |
|---|---|---|
| 01 Natural Fiber Research | [[fiber-threads]] (Unsplash 1646750421466) | [[whatWeDo.ts]] → [[WhatWeDo.tsx]] |
| 02 Textile Innovation | [[weaving-loom]] (Unsplash 1643766883805) | same |
| 03 Bio-based Materials | [[hemp-board]] (Unsplash 1582719471384) | same |
| 04 Technology & Machinery | [[textile-machinery]] (Unsplash 1707978932202) | same |
| 05 Applied Engineering | [[engineer-at-work]] (Unsplash 1623220940666) | same |

## Stories (Community & Impact)

| Story | Video | Poster image | Used by |
|---|---|---|---|
| [[Story: by-product-to-income]] | [[story-banana-extraction]] (`8_xwGtg-lag`) | [[farmers-in-field]] | [[impact.ts]] → [[ImpactStats.tsx]] |
| [[Story: women-led-fabrication]] | [[story-nettle-spinning]] (`gMBrJHaqEiM`) | [[handspun-yarn]] | same |
| [[Story: allo-forward]] | [[story-allo-craft]] (`MTJgT-B3O0w`) | [[prayer-flags]] | same |

## Products

| Product | Asset | Used by |
|---|---|---|
| Banana-fiber Textile | [[textile-stack]] (Unsplash 1569909115134) | [[products.ts]] → [[ProductsGrid.tsx]] |
| Hemp Composite Board | [[hemp-board]] (Unsplash 1582719471384) | same |
| Allo Heritage Yarn | [[handspun-yarn]] (Unsplash 1488747279002) | same |
| Rural Decorticator | [[fiber-workshop]] (Unsplash 1581094794329) | same |
| Bio-composite Tiles | [[bio-tiles]] (Unsplash 1615873968403) | same |
| Mixed-Fiber Cordage | [[natural-cordage]] (Unsplash 1535970793482) | same |

## Page sub-heroes

| Route | Asset | Used by |
|---|---|---|
| /about | [[himalayan-range]] | [[About.tsx]] |
| /natural-fibers | [[fiber-threads]] | [[NaturalFibers.tsx]] |
| /research | [[textile-machinery]] | [[Research.tsx]] |
| /community | [[farmers-in-field]] | [[Community.tsx]] |
| /products | [[textile-stack]] | [[Products.tsx]] |
| /collaborate | [[collaboration-workspace]] (Unsplash 1556761175) | [[Collaborate.tsx]] |
| /contact | — none | [[Contact.tsx]] |

## Pipeline

```
Unsplash CDN ─┬─► <ImageWithFallback src=... onError → gradient fallback>
              │   src/components/common/ImageWithFallback.tsx
              │   ↑ consumed by every section
              │
              └─► <VideoLoop src=... poster=...> (TODO: hot-link unstable)
                  src/components/common/VideoLoop.tsx
```

## Future video plan

See [[future-videos]] for ways to wire real video:
1. User-uploaded `public/videos/*.mp4`
2. Pexels / Pixabay API at build time
3. YouTube embed (heavier, but reliable)

## See also

- [[MOC]] — vault entry point
- [[data-model]] — schemas
- [[components]] — render map
