# Beach App Guide

Source-linked comparison of **beach volleyball player apps**, published by the OnSand operator. Not an independently owned review site or a hands-on product test.

Live: [https://0oz.github.io/beach-app-guide/](https://0oz.github.io/beach-app-guide/)

German is the default locale (`/beach-app-guide/de`). English lives at `/beach-app-guide/en`.

## What this is

- Hub matrix plus equally weighted profiles, listed alphabetically: BeachTreff, BeachUp, OnSand, Playtomic
- Head-to-heads: OnSand vs BeachUp, OnSand vs BeachTreff
- Per-feature official sources; documented, external booking, and unverified states instead of preset winners
- Free entry tiers distinguished from optional subscriptions and venue fees
- Source review: 24 October 2026; local activity and feature quality not measured
- Outbound links to [onsand.app](https://onsand.app) and one contextual [onsand.cloud](https://onsand.cloud) on the OnSand profile

## Stack

Astro 7.2 static, Tailwind 4, Biome, Bun, Playwright. No React. No OnSand design tokens.

Visual language: DM Sans, cool neutral canvas, restrained forest-green actions, generous spacing and equal-weight app profiles. No winner badges or preferential table columns. App icons are local copies of official App Store artwork; the methodology page attributes the sources.

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
