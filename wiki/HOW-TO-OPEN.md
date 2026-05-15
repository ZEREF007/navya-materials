---
tags: [index, navya, obsidian]
type: instructions
---

# How to open this vault in Obsidian

This `wiki/` directory IS the Obsidian vault.

## One-time setup

1. Install Obsidian → https://obsidian.md/download
2. Launch Obsidian → on the start screen click **"Open folder as vault"**.
3. Pick this folder:

   ```
   /Users/ace/Desktop/Claude_Projects/Navya Materials/wiki
   ```

4. Obsidian opens. `MOC.md` is the auto-opened start page (configured in `.obsidian/workspace.json`).
5. Press **⌘ + G** (Mac) to open the graph view — color groups are pre-configured, so you'll see image / video / story / fiber / code / data / ADR clusters in different colors.

## Layout

```
wiki/
├── MOC.md              ← Map of Content. Start here.
├── architecture.md     ← high-level
├── routes.md           ← URL → page map
├── components.md       ← UI / sections / layout tree
├── functions.md        ← lib + hooks inventory
├── data-model.md       ← src/data/*.ts schemas
├── design-system.md    ← tokens + type
├── motion.md           ← animation primitives
├── seo.md
├── deploy.md           ← GH Pages pipeline
├── glossary.md
├── media.md            ← every image/video/story → which code consumes it
├── future-videos.md    ← plan for adding real video
├── decisions/
│   ├── ADR_001_stack.md
│   ├── ADR_002_routing.md
│   ├── ADR_003_typography.md
│   └── ADR_004_host.md
└── assets/             ← one .md stub per image/video/story
    ├── README.md
    ├── images/         (14 stubs)
    ├── videos/         (1 stub: hero-video-pending)
    └── stories/        (3 stubs)
```

## Graph color groups (configured)

| Tag | Color | Cluster |
|---|---|---|
| `#image` | sand | Each image stub |
| `#video` | clay | Video stubs |
| `#story` | accent | Story narratives |
| `#fiber` | sage green | Banana / hemp / allo |
| `#community` | orange | Community stories |
| `#components` `#functions` `#lib` | forest | Code surface |
| `#data` | dark green | `src/data/*` schemas |
| `#routes` `#pages` | violet | Route map |
| `#deploy` `#host` | warning | Pipeline + GH Pages |
| `#adr` | red | Decisions |
| `#index` `#moc` | yellow | Indices |

## Why wiki-links work

Every asset / page references others via `[[file-name]]` (Obsidian's preferred). Obsidian resolves them to actual files. The graph then renders every connection — you literally see which code file consumes which image / story / fiber.

## Recommended starting routes through the graph

- **"Where does an image live?"** → [[media]] → image stub → backlinks pane shows consumer code files.
- **"Where does the Story `Carrying allo forward` show up?"** → [[Story: allo-forward]] → backlinks: [[impact.ts]] → [[ImpactStats.tsx]] → [[Community.tsx]] → route `/community`.
- **"What is this code file?"** → search bar (⌘ + O) → `ImpactStats.tsx` → page describes it + cross-links.

## Editing rules

- One topic per page. Don't duplicate.
- Update [[media]] whenever a new image / video / story is added.
- Decisions go in `decisions/ADR_NNN_title.md`.
- Tags must come from the legal set (above) so graph colors stay consistent.

## Sync with code

Vault and code share the same git repo. Pushing the repo backs the vault up too. Pulling on another machine = vault is right there in `wiki/`.

## See

- [[MOC]]
- [[media]]
- [[future-videos]]
