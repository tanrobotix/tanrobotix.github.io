# GitHub Pages and is-a.dev Setup

The prepared architecture is Astro static build → GitHub Actions → GitHub Pages → optional custom domain. Nothing has been pushed, published, registered, or changed in an external account.

## 1. Publish a Pages preview after approval

1. Confirm the intended repository owner/name. The deployment workflow defaults assume `tanrobotix/tantnd`, with origin `https://tanrobotix.github.io` and base `/tantnd/`. Change the repository Actions variables `SITE_URL` and `BASE_PATH` if the destination differs. A user site repository (`OWNER.github.io`) uses `/`. Local development and preview default to the root path `/` on `0.0.0.0:4321`.
2. This working directory initially had no Git metadata. Initialize Git and configure the verified remote if needed. Push the reviewed code only after approval. In repository Settings → Pages, select **GitHub Actions** as the source.
3. Run **Deploy GitHub Pages** manually from Actions. This is the publication step. The build validates and uploads `dist/`; only the deployment job has `pages: write` and `id-token: write`. Optionally require reviewers on the `github-pages` environment.
4. Verify the real preview URL and assets before requesting a custom domain. Push and PR workflows validate only; they do not publish.

The workflow follows the [Astro Pages guidance](https://docs.astro.build/en/guides/deploy/github/) and uses a deliberate manual trigger.

## 2. Check availability and propose registration

`duytan.is-a.dev` is only a proposed domain; availability and ownership are unconfirmed. Check the current [is-a.dev registration repository](https://github.com/is-a-dev/register), including `domains/duytan.json` and open pull requests. Consult the [registration documentation](https://docs.is-a.dev/) for current requirements.

After approval, fork the external registration repository and propose this file **there**, not in this portfolio:

```json
{
  "owner": {
    "username": "YOUR_GITHUB_USERNAME"
  },
  "records": {
    "CNAME": "YOUR_GITHUB_USERNAME.github.io"
  }
}
```

Replace the username with the verified Pages account. CNAME targets contain neither `https://` nor a repository path. Include the working preview in the registration PR where requested. Do not submit the external PR without approval.

## 3. Activate the domain after approval and merge

Follow the [official is-a.dev GitHub Pages instructions](https://docs.is-a.dev/guides/github-pages/). Only after the registration PR is merged:

1. Set the repository Pages custom domain to the approved hostname.
2. Set Actions repository variables:

   | Variable        | Value for the proposed domain |
   | --------------- | ----------------------------- |
   | `SITE_URL`      | `https://duytan.is-a.dev`     |
   | `BASE_PATH`     | `/`                           |
   | `CUSTOM_DOMAIN` | `duytan.is-a.dev`             |

3. Manually deploy again. The build writes `dist/CNAME` only when the custom domain is explicitly configured. Preview builds omit CNAME. The domain must match the configured origin and use root base, or the build fails.
4. Wait for Pages DNS checks and certificate issuance, then enable **Enforce HTTPS** in Pages settings.
5. Verify DNS and the served site:

   ```sh
   dig +short CNAME duytan.is-a.dev
   curl -I https://duytan.is-a.dev/
   curl -fsS https://duytan.is-a.dev/robots.txt
   ```

Inspect canonical/OG URLs and sitemap links on the deployed page. The earlier Pages preview may redirect to the custom domain; it should not remain the canonical origin.

## Optional domain ownership verification

GitHub account Settings → Pages → Add a domain supplies a TXT hostname and value. Use those exact values. is-a.dev documents adding a separate `domains/hostname.subdomain.json` registration entry containing a `TXT` record. Submit that external change only after approval, wait for propagation, then complete GitHub verification. See the official guide above for the current procedure.

To return to the Pages preview, clear the Pages custom domain, remove `CUSTOM_DOMAIN`, restore the preview origin/base, and redeploy with approval. Never assume that adding CNAME to a build registers a domain or updates repository settings.
