---
tags: [assets, navya]
type: index
---

# Assets directory

One Markdown stub per asset. Links describe content + back-link the data file + component that uses it. Lets Obsidian graph view show **which code consumes which media**.

## Structure

```
wiki/assets/
├── images/        ← one .md per Unsplash photo
├── videos/        ← one .md per video (loops + stories)
└── stories/       ← one .md per story narrative
```

## Conventions

Every asset stub has:
- `tags:` `[image|video|story, …topic-tags]`
- frontmatter: `slot`, `source`, `consumed_by`, `license`
- body: subject + crop guidance + replacement notes
- back-links to consumers: `Used by → [[Hero.tsx]] · [[fibers.ts]]`

## See

- [[media]] — top-level index
- [[future-videos]] — plan for real video
