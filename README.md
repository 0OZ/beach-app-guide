# Beach App Guide

Independent editorial comparison of **beach volleyball player apps**. Not an OnSand marketing site.

Live: [https://beach-app-guide.pages.dev](https://beach-app-guide.pages.dev)

German is the default locale (`/de`). English lives at `/en`.

## What this is

- Hub matrix plus profiles for OnSand, BeachUp, BeachTreff, and Playtomic
- Head-to-heads: OnSand vs BeachUp, OnSand vs BeachTreff
- Honest rows: OnSand does **not** win court-directory scale, Berlin waitlists, or in-app court booking
- Outbound links to [onsand.app](https://onsand.app) and one contextual [onsand.cloud](https://onsand.cloud) on the OnSand profile

## Stack

Astro 7.2 static, Tailwind 4, Biome, Bun, Playwright. No React. No OnSand design tokens.

```bash
bun install
bun test
bun run build
bun test tests/contract
bun run preview
```

Browser tests expect a preview server:

```bash
bun run build && bun run preview
# other terminal
BEACH_APP_GUIDE_BASE_URL=http://localhost:4377 bun run test:browser
```

## Deploy

Cloudflare Pages project `beach-app-guide`, production branch `main`.

Build: `bun run build`  
Output: `dist`

Custom domain is not attached yet. After you buy one (`beachapp.guide`, `sandapps.de`, or `welche-beach-app.de`):

1. Pages → Custom domains → add the hostname
2. Add the property in [Google Search Console](https://search.google.com/search-console)

Until then, Search Console can verify `https://beach-app-guide.pages.dev`.

Operator for Impressum: evest.io UG (haftungsbeschränkt), Berlin.
