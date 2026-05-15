---
tags: [data, content, navya]
---

# Data model

All copy + structured content lives in `src/data/`. Editing copy = editing data, not JSX.

| File | Type | Shape (key fields) | Consumed by |
| --- | --- | --- | --- |
| `nav.ts` | `NavItem[]` | `{ label, href }` | Header, Footer |
| `pillars.ts` | `Pillar[]` | `{ title, body, icon (lucide) }` | PillarsStrip |
| `whatWeDo.ts` | `Service[]` | `{ number, title, body, image, alt }` | WhatWeDo (Home) |
| `fibers.ts` | `Fiber[]` | `{ slug, name, scientific?, origin, tagline, description, properties[], uses[], image, imageAlt, accent }` | FibersGrid, FiberDeepDive |
| `stats.ts` | `Stat[]` | `{ value, label, suffix? }` | StatsStrip |
| `timeline.ts` | `TimelineEntry[]` | `{ year, title, body }` | Timeline (About) |
| `collaborate.ts` | `CollabArea[]` | `{ title, body, icon (lucide) }` | CollaborateAreas |
| `products.ts` | `Product[]` | `{ name, category, status, body, image, alt }` (status = "Pilot" \| "Prototype" \| "In R&D") | ProductsGrid |
| `research.ts` | `FocusArea[]` + `Method[]` | focus: `{ title, body }` · method: `{ step, title, body }` | FocusAreas |
| `impact.ts` | `ImpactStat[]` + `Story[]` | stat: `{ value, label }` · story: `{ title, location, body, image, alt }` | ImpactStats |

## Editing rules

1. **Copy first.** Treat `src/data/*.ts` as the source of truth for prose.
2. **Don't hardcode strings in components.** Add the field to data, then consume.
3. **Images:** Currently Unsplash URLs. For prod replace with `/images/...` local paths. See [[deploy]] for asset pipeline.
4. **Icon types:** Lucide icons typed as `typeof Leaf` etc. — pass component reference, not JSX.
5. **Type changes:** Update the `type Foo = ...` next to the array. TypeScript will yell at consumer sections.

## Adding a fiber (example)

```ts
// src/data/fibers.ts
export const fibers: Fiber[] = [
  // ...
  {
    slug: "jute",
    name: "Jute Fiber",
    scientific: "Corchorus capsularis",
    origin: "Terai, Nepal",
    tagline: "Workhorse of the Terai.",
    description: "Strong, low-cost bast fiber…",
    properties: ["High tensile strength", "Biodegradable", ...],
    uses: ["Sacking", "Carpet backing", ...],
    image: "/images/fibers/jute.jpg",
    imageAlt: "Jute crop",
    accent: "from-forest-700/70",
  },
];
```

Auto-appears in `/natural-fibers` deep dive + Home preview. No other code changes needed.

## Cross-refs

- Where each data file is consumed → [[components]]
- Routing → [[routes]]
