---
tags: [seo, meta, navya]
---

# SEO

## Stack

- `react-helmet-async` for per-route `<head>` mutations
- `HelmetProvider` wraps `<App>` in `src/main.tsx`
- `<Seo>` component in `src/lib/seo.tsx` is invoked at the top of every page

## `<Seo>` API

```tsx
<Seo
  title="Navya Materials — …"        // required; "— Navya Materials" appended if not present
  description="…"                    // optional; falls back to DEFAULT_DESC
  path="/about"                      // optional; default "/"
  image="/og-image.jpg"              // optional; default "/og-image.jpg"
/>
```

Outputs:
- `<title>`
- `<meta name="description">`
- `<link rel="canonical">` to `${SITE}${path}`
- `og:type / og:title / og:description / og:url / og:image`
- `twitter:card / twitter:title / twitter:description / twitter:image`

## SITE constant

`src/lib/seo.tsx` exports a const `SITE = "https://navyamaterials.com"`. Update when domain changes. Also update:
- `index.html` — meta tags
- `public/sitemap.xml` — all `<loc>` entries
- `public/robots.txt` — sitemap URL

## Sitemap

`public/sitemap.xml` lists all 8 routes (no 404). Priorities:

| Route | Priority |
| --- | --- |
| `/` | 1.0 |
| `/natural-fibers` | 0.9 |
| `/about`, `/collaborate` | 0.8 |
| `/research`, `/community`, `/products` | 0.7 |
| `/contact` | 0.6 |

## OG image

`public/og-image.jpg` — **TODO** (placeholder JPG not yet created). 1200 × 630. Suggested layout: forest backdrop + leaf-mark + headline.

## JSON-LD (future)

Add `<script type="application/ld+json">` via Helmet for `Organization` (every page) + `LocalBusiness` (contact). Not yet implemented — track in [[handoff]] / [[progress]].

## Cross-refs

- Helper API → [[functions]]
- Deploy notes (domain + Pages URL) → [[deploy]]
