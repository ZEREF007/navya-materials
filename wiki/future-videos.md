---
tags: [media, videos, future, navya]
type: plan
---

# Future videos — plan

Mixkit slugs proved unreliable (slug ≠ content). Pexels + Pixabay block hot-link. Three viable paths:

## 1. User-uploaded local files (cleanest)

1. Drop short MP4 loops (8–15 s, 720p, ≤8 MB each) into `public/videos/`:
   - `public/videos/banana-stem.mp4`
   - `public/videos/spinning-yarn.mp4`
   - `public/videos/himalaya-pan.mp4`
2. Wire via `<VideoLoop src="/videos/banana-stem.mp4" poster="..." />` in `Hero.tsx` + `ImpactStats.tsx`.
3. Vite will copy as-is on build. GH Pages serves at `/navya-materials/videos/*.mp4`.
4. Update [[media]] index when added.

## 2. Pexels API at build time

1. Create free Pexels account → grab API key.
2. Add `PEXELS_API_KEY` repo secret on GitHub.
3. Add `scripts/fetch-videos.ts`:
   ```ts
   const res = await fetch(`https://api.pexels.com/videos/search?query=banana+plant&per_page=1`, {
     headers: { Authorization: process.env.PEXELS_API_KEY! },
   });
   const json = await res.json();
   const url = json.videos[0].video_files.find(f => f.height === 720).link;
   // write to src/data/videos.ts
   ```
4. Run in CI before `vite build`. Output committed to `dist/` (or kept dynamic).

## 3. YouTube embed

For storytelling pieces (longer than loops):

```tsx
<iframe
  src="https://www.youtube-nocookie.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0"
  className="absolute inset-0 h-full w-full"
  allow="autoplay; encrypted-media"
  loading="lazy"
/>
```

Heavier than direct MP4 but stable. Privacy-safe `youtube-nocookie.com`.

## Recommended for v1

Path **1** (user-uploaded). 3 loops × ~5 MB = 15 MB repo size. Fastest TTFB. No external dependency.

## Cross-refs

- Component → [[components]] · [[VideoLoop.tsx]]
- Asset map → [[media]]
- Deploy implications → [[deploy]]
