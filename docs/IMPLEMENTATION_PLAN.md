# Implementation Plan

## Foundation

- Treat `prompt.md` as the product and design source; `docs/DESIGN_SPEC.md` is currently empty.
- Build a fully static Astro site with strict TypeScript and Tailwind's Vite integration.
- Use CSS tokens, a 12-column desktop grid, Inter Tight/Inter/IBM Plex Mono, warm paper, ink, and restrained vermilion.
- Main agent owns shared configuration, layouts, routes, deployment, tests, and integration.
- Content worker owns `src/data/portfolio.ts` and the empty notes content directory.
- Frontend worker owns `src/components/**` and `src/styles/**`; at most two workers concurrently.

## Implementation

- Compose navigation, typographic hero, numbered work index, GPU concept diagram, experience, expertise, about, optional notes, and contact.
- Separate typed professional content from rendering. Hide unknown contact links and unpublished notes.
- Support Markdown notes with validated metadata and static routes.
- Provide semantic landmarks, keyboard focus, reduced motion, responsive navigation, SEO, structured data, local fonts, favicon, and social preview.

## Production Readiness

- Derive canonical origin and base path from explicit environment configuration; keep custom-domain activation optional.
- Prepare GitHub Actions validation and a manually triggered Pages deployment, so commits do not publish automatically.
- Document customization, publishing, domain registration, verification, and HTTPS without changing external accounts.

## Acceptance

- Run formatting/lint, Astro/TypeScript checks, static output/link tests, production build, browser smoke tests, and automated accessibility checks.
- Inspect actual renders at 1440, 1024, 768, and 390 pixels; fix overflow, wrapping, interactions, and actionable review findings.
- Independently review implementation with the QA role after integration. Report actual checks and remaining manual steps.

## Completed Verification

- Integrated content and frontend worker contributions; independent QA review completed.
- Formatting, ESLint, Astro/TypeScript, production build, and six static/configuration tests pass.
- Browser checks pass at 1440, 1024, 768, and 390 pixels, including keyboard navigation, reduced motion, asset loading, no overflow, and axe WCAG A/AA checks.
- Verified published note generation and exclusion of drafts/future content using temporary fixtures, then removed fixtures.
- Verified root custom-domain output, CNAME, canonical metadata, sitemap, and internal links, then restored the default preview build.
- Remaining manual work: verified contact links, destination repository/Pages setup, approved publication, and optional domain registration. No external changes performed.
