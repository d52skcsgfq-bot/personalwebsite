# Jorge Iriarte — Personal Brand Website

Bilingual (ES/EN) personal brand site built with Astro 5 and Tailwind CSS v4.

## Tech Stack

- **Astro 5** — static site generator
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **Markdown** — article content via content collections

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:4321`.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── content/
│   └── articles/     # Markdown articles (ES & EN)
├── content.config.ts # Content collection schema
├── layouts/          # BaseLayout, ArticleLayout
├── pages/
│   ├── index.astro         # Home (ES default)
│   ├── articles/            # Spanish article pages
│   └── en/                  # English pages
│       ├── index.astro      # Home (EN default)
│       └── articles/        # English article pages
└── styles/
    └── global.css    # Tailwind @theme tokens & base styles
```

## Adding Articles

Create a new `.md` file in `src/content/articles/` with this frontmatter:

```md
---
title: 'Your Article Title'
date: 2025-03-15
lang: 'es'  # or 'en'
tags: ['Tag1', 'Tag2']
description: 'Short description for SEO and cards.'
urlSlug: 'your-article-slug'
draft: false
---

Article content here...
```

For bilingual articles, create two files with the same `urlSlug` but different `lang` values. Use quoted lang values (`'es'`/`'en'`) in frontmatter.

## Bilingual Support

- **Home page**: Uses JS-based language toggle — no page reload
- **Articles**: Separate files per language, filtered at build time
- Language preference saved in `localStorage`

## Deployment

Deployed to Hostinger VPS via GitHub Actions on push to `main`.

### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `SSH_HOST` | Hostinger VPS IP or hostname |
| `SSH_USER` | SSH username |
| `SSH_KEY` | Private SSH key |
| `SSH_PATH` | Remote path (e.g., `/var/www/jorgeiriarte.com/`) |

## Design Tokens

Defined in `src/styles/global.css` via Tailwind v4 `@theme`:

- **Fonts**: Epilogue (display), Plus Jakarta Sans (body)
- **Colors**: bg, surface, surface-alt, text, muted, blue, blue-soft, blue-mid, slate, border
- **Border radius**: card (10px)
