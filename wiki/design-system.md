---
tags: [design, tokens, tailwind, navya]
---

# Design system

## Palette (CSS vars, HSL)

Defined in `src/index.css`.

| Token | HSL | Hex (approx) | Use |
| --- | --- | --- | --- |
| `--background` | `42 50% 95%` | `#F6F1E7` | Page background (warm cream) |
| `--foreground` | `140 28% 12%` | `#1B2A20` | Body text |
| `--primary` | `140 22% 24%` | `#344E41` | Primary buttons, links, accents |
| `--secondary` | `99 21% 42%` | `#588157` | Sage — eyebrows, illustrative tags |
| `--accent` | `38 47% 70%` | `#D8C9A3` | Warm beige — accents, badges |
| `--muted` | `42 30% 90%` | sand | Subtle bg blocks |
| `--card` | `0 0% 100%` | white | Cards |
| `--destructive` | `0 65% 45%` | red | Error states |
| `--border` | `42 20% 84%` | sand-line | Hairlines |
| `--ring` | `140 22% 24%` | forest | Focus rings |
| `--radius` | `0.625rem` | — | Default radius (10px) |

Custom palette extensions in `tailwind.config.js`:

- **sand**: 50 / 100 / 200 / 300 / 400 (cream → beige progression)
- **forest**: 50 / 100 / 300 / 500 / 600 / 700 / 800 / 900 (deepest = `#1B2A20`)
- **clay**: 400 / 500 (warm earth — reserved for future accents)

## Typography

| Family | Use | Source | Weights |
| --- | --- | --- | --- |
| **Fraunces** | Display (h1–h3, hero, eyebrow brand voice) | Google Fonts (variable, opsz+SOFT+WONK axes) | 300–900 |
| **Switzer** | Body, nav, labels | Fontshare (free) | 200–700 |
| **JetBrains Mono** | Monospace (timestamps, numerals on dark) | Google Fonts | 400 |

Loaded via `<link>` in `index.html` w/ preconnect to `fonts.googleapis.com` + `api.fontshare.com`. `font-display: swap`.

## Scale

| Level | Tailwind class | Use |
| --- | --- | --- |
| Hero H1 | `text-5xl md:text-7xl lg:text-[5.75rem] xl:text-[6.5rem] font-light` | Home `<Hero>` |
| Sub-hero H1 | `text-5xl md:text-6xl lg:text-7xl` | All `<SubHero>` |
| Section H2 | `text-3xl md:text-4xl lg:text-5xl` | `<SectionHeading>` |
| Card H3 | `text-xl md:text-2xl` | All cards |
| Eyebrow | `text-[11px] uppercase tracking-eyebrow` | `<span className="eyebrow">` |
| Body | `text-base md:text-lg leading-relaxed` | Default `<p>` |

## Spacing rhythm

- Section: `py-20 md:py-28 lg:py-32` (utility class `.section`)
- Container: `max-w-7xl mx-auto px-6 md:px-8 lg:px-10`
- Card padding: `p-6 md:p-8`
- Default radius: `rounded-2xl` (large) / `rounded-3xl` (hero cards) / `rounded-full` (buttons)

## Utilities

| Class | Effect |
| --- | --- |
| `.display` | Variation-settings tuned for Fraunces opsz 144 |
| `.eyebrow` | Uppercase + tracking-eyebrow + leading hairline mark |
| `.section` | `py-20 md:py-28 lg:py-32` |
| `.underline-grow` | 0 → 100% width hover underline |
| `.text-balance` / `.text-pretty` | CSS text-wrap helpers |
| `.mask-fade-b` | Bottom mask gradient |
| `.bg-grain` | Inline SVG noise overlay |

## Reduced motion

Wrapped in `@media (prefers-reduced-motion: reduce)` — disables all `animation`/`transition` globally. Framer Motion variants additionally bypassed via `useReducedMotion()` in `Reveal` + `Hero`.

## Cross-refs

- Motion variants reference → [[motion]]
- Component usage of tokens → [[components]]
