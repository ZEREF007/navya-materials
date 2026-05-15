---
tags: [motion, animation, framer, navya]
---

# Motion

## Primitives

| Helper | Source | Usage |
| --- | --- | --- |
| `<Reveal>` | `src/components/common/Reveal.tsx` | Single element fade-up on in-view |
| `<StaggerGroup>` + `<StaggerItem>` | same file | Container with cascading children |
| `useReducedMotion()` | framer-motion | Bypasses animation entirely |

All three respect `prefers-reduced-motion: reduce`.

## Variants (`src/lib/motion.ts`)

```ts
fadeUp:   { hidden:{opacity:0,y:24}, show:{opacity:1,y:0, transition:{duration:0.7, ease:[0.22,1,0.36,1]}} }
fadeIn:   { hidden:{opacity:0},      show:{opacity:1, transition:{duration:0.8, ease:'easeOut'}} }
stagger:  { hidden:{},               show:{transition:{staggerChildren:0.08, delayChildren:0.05}} }
cardRise: { hidden:{opacity:0,y:32}, show:{opacity:1,y:0, transition:{duration:0.6, ease:[0.22,1,0.36,1]}} }
```

## Bespoke patterns

| Where | What | Notes |
| --- | --- | --- |
| Hero | Staggered headline + lede + CTA on mount | `motion.div initial="hidden" animate="show"` w/ inline `variants` controlling stagger |
| Hero image | Ken-Burns drift | Tailwind keyframe `animate-kenburns` (18s alternate) |
| FibersGrid / WhatWeDo / ProductsGrid | Image scale on hover | `transition-transform [transition-duration:1200ms]` (or 1500ms) |
| ContactForm submit | Loading spinner | `lucide-react Loader2` w/ `animate-spin` |
| Header nav active state | Underline scale-x | CSS transition on `origin-left` |
| Accordion | Height + opacity | tailwindcss-animate `accordion-down/up` |
| Marquee (reserved) | x → -50% loop | Custom `animate-marquee` keyframe |

## Adding motion

1. For most cases, wrap section in `<Reveal>` — that's enough.
2. For staggered cards, use `<StaggerGroup>` + `<StaggerItem>` directly. `StaggerItem` uses `cardRise` variant.
3. For one-off mount animations (like `<Hero>`), inline `motion.div initial animate variants={{...}}`.
4. For continuous CSS animation (like Ken-Burns), use Tailwind keyframes already defined in `tailwind.config.js`.
5. Custom keyframe? Add to `tailwind.config.js` `theme.extend.keyframes` + matching `animation`.

## Performance notes

- All motion uses transform / opacity → GPU-accelerated.
- `viewport={{ once: true, margin: "-80px" }}` ensures we only animate first time element enters viewport, with an 80px buffer above.
- No layout-affecting properties animated.

## Cross-refs

- Helper API surface → [[functions]]
- Where motion is applied → [[components]]
