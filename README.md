# Navya Materials — Marketing Site

Production-ready frontend for **Navya Engineering Solution** — a Nepal-rooted sustainable materials company focused on natural fibers (banana, hemp, Himalayan nettle) for textiles, construction, and bio-based applications.

## Stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS 3.4** with custom token system (forest + sand palette, Fraunces display + Switzer body)
- **React Router 6** (8 routes, all lazy-loaded with code-splitting)
- **Framer Motion** for reveal + Ken-Burns + page-load orchestration
- **react-hook-form + zod** for the contact form
- **react-helmet-async** for per-route SEO meta
- **Radix UI** primitives (accordion, dialog, label, separator)
- **Sonner** for toast notifications
- **lucide-react** icons

## Run

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # outputs to dist/
pnpm preview      # serves dist/ on :4173
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home (Hero, Pillars, What We Do, Fibers, About, Stats, CTA) |
| `/about` | Story, Founder, Pillars, Timeline |
| `/natural-fibers` | Deep dive on Banana, Hemp, Allo |
| `/research` | Focus areas + Methodology |
| `/community` | Impact stats + field stories |
| `/products` | Pilot / prototype / R&D catalogue |
| `/collaborate` | 6 partnership areas + inline contact form |
| `/contact` | Contact channels + form + map |
| `*` | 404 page |

## Content sources

Editable content lives in `src/data/*.ts`:
- `nav.ts`, `fibers.ts`, `pillars.ts`, `whatWeDo.ts`, `collaborate.ts`, `products.ts`, `research.ts`, `impact.ts`, `stats.ts`, `timeline.ts`

Update copy there — no JSX edits needed.

## Design system

CSS custom properties in `src/index.css`:
- `--background` cream `42 50% 95%`
- `--foreground` deep forest `140 28% 12%`
- `--primary` forest `140 22% 24%`
- `--secondary` sage `99 21% 42%`
- `--accent` warm beige `38 47% 70%`
- `--radius` `0.625rem`

Type:
- **Fraunces** (variable serif, headings) — loaded with optical sizing
- **Switzer** (Fontshare, body) — distinctive grotesque

## Deploy

Any static host. Recommended:

**Vercel**
```bash
vercel --prod
```

**Cloudflare Pages**
Connect repo, set build command `pnpm build`, output `dist`.

**Netlify**
Same, plus add `_redirects` with `/* /index.html 200` for SPA fallback (or use the included approach via host config).

## Accessibility & SEO

- Skip-to-content link, semantic landmarks (`<header> <main> <footer>`)
- All images have `alt`
- Focus rings on all interactive elements
- AA contrast (forest #344E41 on cream → 8.4:1)
- Per-route `<title>`, `description`, OG + Twitter cards via `<Seo>`
- `sitemap.xml` + `robots.txt` in `/public`
- `prefers-reduced-motion` respected globally

## Image strategy

Hero + section photographs reference Unsplash CC0 URLs. For production:
1. Download originals
2. Run Squoosh / Sharp to emit `.avif` + `.webp` + `.jpg` at 1920/1280/768 widths
3. Drop into `/public/images/*` and switch `<img src>` to local paths with `srcset` + `sizes`

## Notes

- The contact form opens `mailto:` after a fake submit — swap with Formspree / Netlify Forms / Web3Forms when wiring a backend.
- WhatsApp / social links are placeholders — update `Footer.tsx`, `ContactDetails.tsx`, and `Header.tsx` once finalized.
- Replace `/public/og-image.jpg` (TBD) before going live.
