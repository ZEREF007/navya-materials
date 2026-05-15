---
tags: [image, fiber, banana, hero]
type: image-asset
source: unsplash
unsplash_id: photo-1653481006616-aab561a77a3b
license: Unsplash (free, no attribution required)
slot: hero · banana-fiber-card
consumed_by: [Hero.tsx, fibers.ts]
---

# Banana plantation (hero)

Tropical banana plantation, broad canopy seen from below. Used as the home-page hero + the Banana Fiber card in `/natural-fibers`.

## Subject

Banana trees (*Musa* spp.) — pseudo-stem visible. This is the plant whose discarded pseudo-stem becomes the banana fiber Navya extracts.

## Crop guidance

- Hero: full-bleed, gravity bottom-left (text overlays from bottom-left)
- Card: `aspect-[4/5]`, gravity center

## Used by

- [[Hero.tsx]] — `<ImageWithFallback src=... />`
- [[fibers.ts]] — `fibers[0].image`
- [[FibersGrid.tsx]] · [[FiberDeepDive.tsx]] — consume `fibers[0]`

## Replace with

If a closer banana-fiber close-up is available, swap this URL in [[fibers.ts]] and [[Hero.tsx]] — keep the alt text current.

## Related

- [[hemp-plants]] · [[himalayan-range]] (other fiber hero images)
- [[Story: by-product-to-income]]
