# Beach App Guide

Independent editorial comparison of **beach volleyball player apps**. Not an OnSand marketing site.

Live: [https://0oz.github.io/beach-app-guide/](https://0oz.github.io/beach-app-guide/)

German is the default locale (`/beach-app-guide/de`). English lives at `/beach-app-guide/en`.

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

Browser tests expect a preview server. Astro preview serves the `base` path:

```bash
bun run build && bun run preview
# other terminal
BEACH_APP_GUIDE_BASE_URL=http://localhost:4377/beach-app-guide bun run test:browser
```

## Deploy

GitHub Pages from this repo via GitHub Actions. Public URL:

`https://0oz.github.io/beach-app-guide/`

Search Console: add that URL as a URL-prefix property after the first Pages deploy.

Operator for Impressum: evest.io UG (haftungsbeschränkt), Berlin.
