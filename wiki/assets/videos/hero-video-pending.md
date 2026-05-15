---
tags: [video, hero, fiber, pending]
type: video-pending
slot: hero
consumed_by: [Hero.tsx]
status: pending — see future-videos.md
---

# Hero video (pending)

The hero **should** display a looping fiber-related video (banana stem cutting, hemp field in wind, hand spinning, allo harvest) rather than the static [[banana-plantation]] image.

Three viable paths to add this — see [[future-videos]].

## Wiring (when ready)

In [[Hero.tsx]] swap:

```tsx
<ImageWithFallback src={POSTER_URL} ... />
```

for:

```tsx
<VideoLoop src={VIDEO_URL} poster={POSTER_URL} className="h-full w-full object-cover" />
```

`<VideoLoop>` already exists at [[VideoLoop.tsx]] — autoPlay + muted + loop + IntersectionObserver pause-offscreen + image fallback on error.

## Used by

- [[Hero.tsx]]

## Related

- [[VideoLoop.tsx]] · [[future-videos]] · [[media]]
