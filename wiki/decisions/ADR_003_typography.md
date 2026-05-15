---
tags: [adr, decision, typography, navya]
adr: 003
date: 2026-05-15
status: accepted
---

# ADR 003 — Fraunces + Switzer (avoid Inter)

## Context

Brand voice: editorial / nature-rooted / premium. Default sans (Inter, system) reads generic. Need fonts that feel agricultural + crafted, but still clear at body scale.

## Decision

- **Display:** Fraunces (variable, Google Fonts) with `opsz` 144 + custom `SOFT` + `WONK` axes. Reads warm + agricultural at hero scale, restrained at H3.
- **Body:** Switzer (Fontshare, free) — clean geometric grotesque, less common than Inter, pairs well with Fraunces.
- **Mono:** JetBrains Mono — used sparingly for timestamps, eyebrow numerals on dark.

## Considered

- **Inter** — explicitly avoided per design skill guidance; widely overused.
- **Söhne / GT America / GT Walsheim** — paid licenses, out of scope for v1.
- **DM Sans / Geist / Manrope** — free alternatives, but less distinctive than Switzer.

## Consequences

- Preconnect to `fonts.googleapis.com` + `api.fontshare.com` in `index.html`.
- `font-display: swap` ensures text renders fast even before fonts load.
- License: Fraunces (SIL OFL) + Switzer (Indian Type Foundry free use). Both safe for commercial use.

## See

[[design-system]]
