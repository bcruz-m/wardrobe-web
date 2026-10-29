# Wardrobe — web

Public pages for **Wardrobe**, an AI-powered digital closet (Vibe Coding Bootcamp project).

| Route | Purpose |
|---|---|
| `/` | Product landing page |
| `/one-pager` | Bootcamp one-pager — prints on exactly one A4 page (Print / Save as PDF) |

Built with Next.js (App Router), TypeScript and Tailwind CSS. No other runtime dependencies.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Updating content

All copy, images and links live in `src/content/`:

- `site.ts` — brand copy, screenshots and photo (`media`), external `links`, feature status (`prototypeStatus`)
- `landing.ts` — landing page sections
- `one-pager.ts` — one-pager sections

A link with `href: null` is shown as a labeled placeholder. An image with `src: null` is shown as a labeled placeholder.

Screenshots in `public/images/display/` are copies of the original app screenshots with the Expo Go developer button painted out (`swift assets/remove-dev-button.swift <original> <output.png>`). The originals are kept locally in `assets/originals/`, which is git-ignored so they are neither pushed nor deployed.

## Deploy (Vercel)

Import the repository in Vercel with the default Next.js settings. No environment variables are required. The site is fully static — there is no backend.
