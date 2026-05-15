---
tags: [deploy, github, pages, hosting, navya]
---

# Deploy

## Current target — GitHub Pages

Host: `https://<user>.github.io/navya-materials/` (project page).

Pipeline:
1. Push to `main`.
2. `.github/workflows/deploy.yml` runs on every push:
   - `pnpm install`
   - `pnpm build` (with `BASE_PATH=/navya-materials/`)
   - `cp dist/index.html dist/404.html` (SPA fallback)
   - Upload `dist/` → GitHub Pages artifact
   - Deploy via `actions/deploy-pages@v4`

## Why project page needs special handling

1. **Base path.** Assets must be served from `/navya-materials/` not `/`. Set via `BASE_PATH` env var consumed by `vite.config.ts`.
2. **SPA fallback.** GH Pages serves the literal path; reloading `/about` 404s. Solution: write the same SPA shell to `dist/404.html` — GH Pages serves it for unknown paths, our React Router takes over.
3. **Router basename.** `BrowserRouter basename={import.meta.env.BASE_URL}` so client-side routing respects the prefix.

## Switching to custom domain or user page

- Drop `BASE_PATH` env var → `vite.config.ts` falls back to `/`.
- Add `public/CNAME` with the domain string (e.g. `navyamaterials.com`).
- Update `SITE` in [[seo]] + `sitemap.xml`.
- DNS: CNAME `www` → `<user>.github.io`, A records for apex per GH docs.

## Upgrade path — Vercel

Better build performance + edge cache + previews. Migration is one command:

```bash
pnpm dlx vercel --prod
```

Drop `BASE_PATH` (Vercel serves at `/`). Add `vercel.json` with SPA rewrite:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

## Local commands

```bash
pnpm install          # first time
pnpm dev              # http://localhost:5173 (base /)
pnpm build            # local dev build (base /)
pnpm build:gh         # production build w/ /navya-materials/ base + 404.html
pnpm preview          # serve dist/ on :4173
```

## Verify deploy

```bash
gh repo view --web
gh workflow run deploy.yml
gh run watch
curl -I https://<user>.github.io/navya-materials/
```

## Cross-refs

- Architecture overview → [[architecture]]
- Decision rationale → [[ADR_004_host]]
- Asset/image pipeline TODOs → [[handoff|root handoff.md]]
