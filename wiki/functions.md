---
tags: [functions, lib, utils, navya]
---

# Functions

All app-wide functions exported by `src/lib/`. Pure, side-effect-free unless noted.

## `src/lib/utils.ts`

| Function | Signature | Purpose |
| --- | --- | --- |
| `cn(...inputs: ClassValue[]): string` | clsx + tailwind-merge | Combine + dedupe Tailwind classes. Used everywhere there's conditional styling. |

## `src/lib/seo.tsx`

| Export | Signature | Purpose |
| --- | --- | --- |
| `Seo` | `({ title, description?, path?, image? }) => JSX` | Per-route `<title>` + meta + OG + Twitter via `react-helmet-async`. See [[seo]]. |

Constants: `SITE = "https://navyamaterials.com"`, `DEFAULT_DESC`. Update both when domain changes.

## `src/lib/motion.ts`

Variants for Framer Motion. See [[motion]] for usage.

| Export | Type | Notes |
| --- | --- | --- |
| `fadeUp` | `Variants` | y:24→0, opacity 0→1, ease `[0.22, 1, 0.36, 1]` |
| `fadeIn` | `Variants` | opacity 0→1 |
| `stagger` | `Variants` | staggerChildren 0.08, delayChildren 0.05 |
| `cardRise` | `Variants` | y:32→0, used by `<StaggerItem>` |

## Common helper hooks

None custom yet. We rely on:

| Hook | Source | Used by |
| --- | --- | --- |
| `useReducedMotion` | framer-motion | `Reveal`, `Hero` |
| `useLocation` | react-router-dom | `ScrollToTop`, `Header` (mobile close on route change) |
| `useState` / `useEffect` | react | `Header` (scroll + mobile state), `ContactForm` (sending flag) |
| `useForm` | react-hook-form | `ContactForm` |
| `zodResolver` | @hookform/resolvers/zod | `ContactForm` |

## ContactForm flow (`src/components/sections/ContactForm.tsx`)

1. `useForm({ resolver: zodResolver(schema) })` — schema = `{ name, company?, email, subject, message }`
2. `onSubmit(values)`:
   - Set `sending=true`
   - Await fake `setTimeout(900ms)`
   - `toast.success(...)` via Sonner
   - Build `mailto:` URL with body
   - `window.location.href = mailto:...` (will be replaced with real form backend later — see [[deploy]])
   - `reset()`

## Schema reference

```
contactSchema = z.object({
  name:    z.string().min(2, "Please share your name."),
  company: z.string().optional(),
  email:   z.string().email("Looks like an invalid email."),
  subject: z.string().min(2, "Add a short subject."),
  message: z.string().min(10, "A few more words please."),
})
```

## Cross-refs

- Where the helpers are used → [[components]]
- Animation patterns → [[motion]]
