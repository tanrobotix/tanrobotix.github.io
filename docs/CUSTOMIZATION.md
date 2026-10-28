# Customization

## Personal content

Edit `src/data/portfolio.ts`. Keep professional facts verifiable. Optional `dates` and project `href` fields are omitted until verified; absent links render plain project titles. `kind` distinguishes professional experience from independent work.

Populate `contacts` only with links you have verified, for example your actual `mailto:` address and public profile URLs. An empty array hides the link list. The location and contact closing remain visible. Public HTTPS contacts also populate Person structured data. Do not publish private employer information or the personal career-search context.

The overview, projects, experience, expertise, and about copy all live in this module. Editorial section labels and headings live in `src/components/Portfolio.astro`.

## Design system

`src/styles/global.css` owns paper, ink, rule, accent, font, and spacing tokens. Desktop uses twelve columns; mobile deliberately changes composition. Inter Tight Variable, Inter Variable, and IBM Plex Mono are self-hosted. Retain visible focus, semantic heading order, adequate contrast, and reduced-motion support when editing.

The SVG compute fabric describes a generic research compute concept. It must never become a representation of confidential production architecture. Edit the social preview source in `public/og.svg` and regenerate the committed 1200×630 `public/og.png` with an SVG rasterizer. Update its alt text in the layout when the content changes.

## Engineering notes

Create a real article at `src/content/notes/your-slug.md`:

```md
---
title: "Your actual article title"
description: "A concise, accurate summary."
published: 2026-10-27
draft: true
---

Write the article here.
```

After editorial review, set `draft: false`. Draft and future-dated articles are excluded from the homepage and generated routes. When no published articles exist, the entire notes section stays hidden. A production rebuild is required to publish scheduled content. Nested directories are supported in article slugs.

## Origin and base path

Copy `.env.example` to `.env` or export build-time variables in your shell. Shell values take precedence. `SITE_URL` must be an HTTPS origin without a path; `BASE_PATH` contains the repository path. See `DOMAIN_SETUP.md` before enabling `CUSTOM_DOMAIN`.

```sh
SITE_URL=https://example.com BASE_PATH=/ CUSTOM_DOMAIN=example.com npm run build
SITE_URL=https://example.com BASE_PATH=/ CUSTOM_DOMAIN=example.com npm test
```

Keep canonical metadata, generated sitemap, robots, assets, and optional CNAME consistent by using the same settings for build and tests. Pull request CI validates the default root site; deployment reads repository variables and validates the configured destination before publishing.
