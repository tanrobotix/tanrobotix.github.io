# Tan To — Engineering Portfolio

A fully static Astro portfolio with a Swiss Editorial visual identity: large typography, warm paper, a precise grid, fine rules, and restrained vermilion. Content lives separately from presentation. The homepage ships no client JavaScript and makes no external font requests.

## Develop

Use Node 24 LTS (`nvm use`) and npm:

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4321`. Development, preview, and the GitHub Pages deployment use the root path `/` for `tanrobotix.github.io`. Deployments read the optional `SITE_URL`, `BASE_PATH`, and `CUSTOM_DOMAIN` repository Actions variables.

```sh
npm run check          # Astro and strict TypeScript
npm run lint           # ESLint for TypeScript, Astro, and tooling
npm run format:check   # Prettier
npm run validate       # Lint, type check, production build, output/link tests
npm run test:browser   # Responsive, keyboard, assets, and axe accessibility
npm run test:publishing # Draft/scheduled notes and custom-domain builds
npm run build
npm run preview
```

Local browser tests use installed Google Chrome and an isolated production preview on port 4322. CI installs Playwright Chromium. Tests capture full-page screenshots in ignored `test-results/`. `npm test` expects a current `dist/`; use `npm run validate` for the full sequence.

## Structure

- `src/data/portfolio.ts`: typed identity, projects, experience, capabilities, and optional contact links.
- `src/components/`: homepage and conceptual compute diagram.
- `src/styles/global.css`: typography, design tokens, grids, and responsive behavior.
- `src/layouts/` and `src/pages/`: SEO shell, homepage, article routes, robots, and 404 page.
- `src/content/notes/`: Markdown articles; empty until real writing is supplied.
- `scripts/site-config.mjs`: validated origin, base path, and optional domain configuration.
- `tests/`: deployment configuration, generated links/metadata, and browser checks.

## Customize and publish

See [customization](docs/CUSTOMIZATION.md) and [domain/deployment setup](docs/DOMAIN_SETUP.md). Unknown contact URLs and dates are omitted. No fake articles or public project links are included. Provide verified email, GitHub, and LinkedIn links before making contact methods visible.

Pull requests and pushes to `main` run **Validate portfolio**. Pushes to `main` also run **Deploy GitHub Pages**, which validates formatting, lint, types, output, publishing behavior, and browser checks before uploading `dist/` and deploying. You can also run either workflow manually. In repository **Settings → Pages**, set **Source** to **GitHub Actions**; branch publishing runs Jekyll and cannot build this Astro site.

The implementation follows `prompt.md`. `docs/DESIGN_SPEC.md` was empty at implementation time and remains untouched. Third-party fonts are self-hosted through Fontsource under their bundled open font licenses.

## Wedding invitation

Open `/wedding` directly (locally, `http://127.0.0.1:4321/wedding`). It is intentionally unlinked from the portfolio homepage and excluded from the sitemap, with a `noindex` directive. It remains a publicly accessible static page, not a password-protected route.

The invitation was imported from the `tt-wedding` branch of the neighboring `tanrobotix.github.io` repository. Its original content, photo assets, map, and Typeform RSVP destination are preserved. `src/components/wedding/Invitation.html` holds the isolated source, `src/pages/wedding/index.astro` integrates it, and `public/wedding/img/` contains its referenced images. Tailwind utilities compile locally; the invitation does not load the portfolio layout or styles.
