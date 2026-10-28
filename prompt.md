# Build / Redesign My Personal Website — Swiss Editorial Portfolio

You are a world-class digital art director, Swiss typography specialist, senior frontend engineer, and technical content strategist.

Build a production-ready personal website for **To Nguyen Duy Tan (Tan To)**, a Principal DevOps / Platform Engineer specializing in cloud infrastructure, distributed systems, and AI/GPU computing.

Your most important responsibility is to create a distinctive, polished, editorial visual identity.

**Design direction: Swiss Editorial / International Typographic Style.**

This is NOT a typical developer portfolio, SaaS landing page, admin dashboard, or résumé template.

The website should feel like a beautifully art-directed independent publication about a technical engineer.

Think precise typography, strong grids, restraint, hierarchy, generous whitespace, and thoughtfully presented engineering work.

## 1. Execution Context

First inspect the existing repository.

If a website already exists:
- Preserve working architecture, content, tests, and deployment configuration wherever practical.
- Replace the existing visual design and page composition to match this specification.
- Refactor components when necessary rather than layering another visual theme over the previous design.

If the repository is empty:
- Initialize a clean Astro project.
- Implement the complete website from scratch.

Do not stop after producing a plan or mockup. Implement and verify the actual site.

## 2. Visual Design — Non-Negotiable

### Design Philosophy

Adopt principles of the Swiss International Typographic Style:

1. Typography is the primary visual element.
2. Layout is governed by a rigorous grid.
3. Hierarchy is established through scale, alignment, spacing, and contrast.
4. Asymmetry is intentional and balanced.
5. Whitespace is a compositional element, not unused space.
6. Every visual element must communicate something.
7. Avoid decoration without purpose.

The result should be contemporary and digital, not a literal reproduction of a 1960s print poster.

Aim for understated confidence rather than visual spectacle.

### Color System

Use a predominantly light visual identity.

Suggested palette:

- Primary background: `#F8F8F5` — warm off-white
- Surface: `#FFFFFF`
- Primary text: `#181818`
- Secondary text: `#686868`
- Dividers: `#D8D8D2`
- Accent: `#D64A36` — restrained vermilion red

Use the accent color sparingly, approximately 5% of the visual surface.

Use it for selected interactions, small editorial marks, navigation emphasis, and distinctive details.

Avoid colorful gradients, neon effects, dark navy sections, and large colored cards.

The homepage must be light by default. Dark mode is optional, not a priority. Do not compromise the light design to accommodate a theme toggle.

### Typography

Typography must be exceptional.

Use a high-quality, legally available font combination with Swiss-modernist characteristics.

Suggested:
- Display: Inter Tight or a similarly precise grotesk typeface
- Body: Inter
- Technical labels: IBM Plex Mono

Choose actual font weights deliberately.

Use:
- Oversized editorial headlines
- Tight but readable display leading
- Carefully controlled letter spacing
- Small uppercase section labels
- Monospaced indices and metadata
- Clear separation between editorial headlines and body copy

Do not overuse bold text.

Do not use futuristic, cyberpunk, stencil, or terminal-inspired fonts.

### Layout System

Implement a consistent 12-column editorial grid on desktop.

Design requirements:
- Max content width approximately 1360–1440px
- Generous outer margins
- Large vertical rhythm between sections
- Thin horizontal separators
- Asymmetric compositions
- Intentional column spans
- Strong baseline alignment
- Generous typography scaling using `clamp()`
- Responsive restructuring, not merely shrinking desktop layouts

Avoid center-aligning everything.

Most important content should use purposeful left alignment.

Some headings can intentionally extend across multiple grid columns.

### UI Shape Language

Prefer:
- Straight edges
- Minimal or zero border radius
- Fine 1px borders
- Large typographic links
- Underlined interactions
- Editorial numbering such as `01 / 05`
- Elegant monochromatic iconography

Avoid:
- Rounded SaaS cards
- Pill-shaped technology badges
- Floating dashboard widgets
- Glassmorphism
- Box shadows
- Bento-grid-heavy compositions
- Generic hero illustrations
- Stock data-center imagery
- Decorative code blocks
- Fake terminal interfaces
- Excessive gradients
- Particle animations
- Three.js unless an extraordinary justification exists

### Motion

Animations should feel subtle and intentional.

Examples:
- A restrained text reveal on initial load
- Underline animations on links
- Small image movement on project hover
- Gentle opacity and position transitions
- Smooth anchor navigation

Typical transitions should be around 150–300ms.

Respect `prefers-reduced-motion`.

Avoid dramatic scroll effects, parallax-heavy animations, and loading screens.

## 3. Personal Identity & Engineering Background

Name:
**To Nguyen Duy Tan**

Professional display name:
**Tan To**

Location:
Ho Chi Minh City, Vietnam.

Experience:
8+ years.

Professional positioning:
- Principal Platform / DevOps Engineer
- Cloud Infrastructure Architect
- Distributed Systems Engineer
- AI Infrastructure & GPU Computing Engineer

Professional experience:

**Masan Corporation**
Principal DevOps Engineer.

Enterprise cloud infrastructure, Azure/Kubernetes environments, retail platforms, cloud-native systems, and data infrastructure.

**MatchMove Fintech**
Senior DevOps Engineer.

AWS/Kubernetes infrastructure, platform operations, security, scalability, and financial technology systems.

**VinAI Research**
GPU/HPC infrastructure engineering.

NVIDIA DGX SuperPOD deployment, GPU clusters, research compute environments, Kubernetes, and Slurm.

**Xendit**
Fintech infrastructure engineering, Terraform-based infrastructure automation, and CI/CD.

**ZaloPay**
Payment infrastructure and reliability engineering.

Technical expertise:
- AWS, Azure, GCP
- Kubernetes, EKS, AKS, GKE
- Terraform, Helm, Ansible
- GitLab CI/CD, GitHub Actions
- Kafka, Debezium, CDC, Schema Registry
- NVIDIA DGX SuperPOD, GPU clusters, Slurm
- vLLM, NVIDIA Triton Inference Server
- Distributed systems, observability, infrastructure reliability
- Payment infrastructure and enterprise systems

Engineering interests:
- AI compute platforms
- GPU infrastructure
- High-performance computing
- Distributed systems
- AI-assisted quantitative research
- Cloud-native platforms
- Developer infrastructure and automation

Never invent dates, job responsibilities, public links, performance figures, certifications, or measurable achievements.

Never reveal confidential employer architecture or proprietary information.

## 4. Homepage — Editorial Composition

The website should be a cohesive, visually distinctive single-page experience with optional dedicated project pages.

Avoid simply stacking standard landing-page sections.

Each section should feel like a carefully composed editorial spread.

### SECTION 00 — Navigation

Minimal top navigation.

Left:
`TAN TO.`

Right:
`Work / Experience / About / Contact`

Use a restrained monospace label or small red editorial mark.

The navigation should be elegant, lightweight, and accessible.

A sticky navigation is acceptable if it does not consume too much screen space.

Do not use a large CTA button in the navbar.

### SECTION 01 — Hero

This is the visual centerpiece of the website.

Create an oversized editorial composition using typography and the 12-column grid.

The hero should communicate identity in less than five seconds.

Suggested hierarchy:

Small top label:

`TÔ NGUYỄN DUY TÂN — INFRASTRUCTURE ENGINEER`

Large headline direction:

"Making complex
systems reliable."

or another equally sharp, distinctive engineering statement.

Choose the best copy for the visual composition.

Avoid generic slogans such as:
- Building the future
- Passionate about technology
- Turning ideas into reality
- Innovating at scale

Supporting copy:

"I'm Tan, a platform engineer with 8+ years of experience across fintech, enterprise infrastructure, and AI research. I design and operate cloud-native platforms, distributed systems, and GPU computing environments."

Professional identity:

`PRINCIPAL PLATFORM ENGINEER`
`CLOUD / DISTRIBUTED SYSTEMS / AI INFRASTRUCTURE`

Include a clear link to selected work.

Design notes:
- Large typography must dominate the hero.
- Avoid a conventional two-column SaaS hero with an illustration on the right.
- Use small editorial metadata blocks.
- Introduce one distinctive red geometric mark or technical motif.
- Balance large and small text.
- Make the hero visually striking through composition, not special effects.

The hero must work beautifully at 1440px, 1024px, 768px, and 390px widths.

### SECTION 02 — Selected Engineering Work

Section label:

`01 / SELECTED WORK`

Heading:

"Systems, platforms,
and things I've built."

Use an editorial project index rather than a standard card grid.

Each project row should include:
- Number
- Project name
- Short engineering description
- Category
- Relevant technologies
- Year only if verified
- Link when a real destination exists

Use full-width rows with fine dividers.

Vary the visual treatment of featured projects to avoid repetitive layouts.

Feature the following work:

**NVIDIA DGX SuperPOD & GPU Infrastructure**

Experience building and operating AI research compute infrastructure at VinAI Research.

**Distributed Data & CDC Infrastructure**

Kafka, Debezium, Kafka Connect, and data movement across enterprise systems.

**Ho Chi Minh City Metro & Real Estate Map**

A personal geospatial application exploring real estate in relation to urban metro infrastructure.

**AI Inference & Model Serving**

Infrastructure experience and experimentation with vLLM and NVIDIA Triton.

**Quantitative Market Data Research**

Personal exploration of market data systems and AI-assisted quantitative trading research.

Distinguish actual professional experience from independent projects.

Do not fabricate a public demo, repository URL, screenshots, or business metrics.

Visual direction for projects:
- Large project titles
- Numbered rows
- Small metadata columns
- Technical SVG diagrams created locally
- Architectural abstractions drawn with thin lines
- Plenty of whitespace
- Occasional featured visual spread

Technical diagrams should convey real concepts rather than act as meaningless decoration.

Do not display sensitive production topology.

### SECTION 03 — Experience

Label:

`02 / EXPERIENCE`

Heading:

"Where I've worked."

Build a clean editorial experience list.

Each row:
- Company
- Role
- Focus area
- Verified date range if available

Use strong typographic hierarchy rather than company-logo cards.

A horizontal rule should separate each organization.

The five organizations:
- Masan Corporation
- MatchMove Fintech
- VinAI Research
- Xendit
- ZaloPay

Avoid fabricated timelines.

If dates are unavailable, omit them instead of guessing.

The layout should resemble a professional editorial index or architecture studio portfolio.

### SECTION 04 — Capabilities

Label:

`03 / EXPERTISE`

Heading:

"From cloud platforms
to GPU clusters."

Present four core domains:

01 — Cloud & Platform Engineering

02 — AI Infrastructure & GPU Computing

03 — Distributed Systems & Data

04 — DevOps, Automation & Reliability

Do not render dozens of technology logos.

Avoid skill percentage bars or proficiency meters.

Instead, use clean editorial columns with:
- Domain title
- A short sentence describing capability
- A compact list of associated technologies

Use typography and dividers to establish hierarchy.

### SECTION 05 — About / Personal Statement

Label:

`04 / ABOUT`

Heading:

"An engineer,
always curious."

This section should humanize the portfolio.

Explain that my work has moved across payment infrastructure, AI research, enterprise cloud systems, and personal software projects.

Show that I enjoy understanding complex systems and building reliable foundations.

Convey intellectual curiosity and pragmatic engineering thinking.

Tone:
- Natural
- Mature
- Technically credible
- First-person
- Not excessively corporate

Avoid vague self-congratulation.

Use an editorial text layout with a strong pull quote or large typographic statement.

Do not generate a fake portrait or AI representation of me.

If a real photo is unavailable, compose the layout without one.

### SECTION 06 — Engineering Notes

Label:

`05 / NOTES`

Create a small optional publishing area for technical writing.

Potential topics:
- GPU Infrastructure
- Kubernetes & Platform Engineering
- Distributed Systems
- AI Inference
- Engineering Trade-offs

Use an editorial article-list layout.

Important:
Do not create fake published articles.

If no real articles exist, provide a content collection and a tasteful empty-state strategy. The section can remain hidden until real content is supplied.

Make future publishing simple using Astro content collections and Markdown.

### SECTION 07 — Contact

Label:

`06 / CONTACT`

Create a memorable editorial closing section.

Large typography:

"Have something
interesting in mind?"

or a sharper alternative appropriate for engineering collaboration.

Provide contact methods:
- Email
- GitHub
- LinkedIn

Only display real, configured links.

Unknown contact details must remain optional and hidden until configured.

Do not invent a resume download.

End with a restrained footer:

`TAN TO — ENGINEERING SYSTEMS WITH INTENT.`

Include the current year generated programmatically.

## 5. Content Strategy

All content should be written in excellent professional English.

The website should convey technical depth without becoming an enormous online résumé.

Prioritize:
1. Clear positioning
2. Selected engineering work
3. Authentic experience
4. Technical credibility
5. Personality and curiosity

Avoid:
- Inflated titles
- Buzzword-heavy descriptions
- Unverified claims
- Excessively long paragraphs
- Generic motivational writing
- Lists of every technology ever used

All personal content must be separated from presentation components.

Use typed configuration or content collections for:
- Identity
- Professional summary
- Social links
- Experience
- Skills
- Projects
- Articles
- SEO

Ensure missing optional fields do not result in blank cards or broken links.

## 6. Technical Requirements

Preferred stack:
- Astro
- TypeScript, strict mode
- Tailwind CSS
- CSS custom properties for design tokens
- Astro content collections where appropriate
- Minimal browser-side JavaScript
- GitHub Actions
- GitHub Pages

Avoid introducing React or a heavy animation framework unless necessary.

Use a maintainable component structure.

The website must be fully static.

No backend, database, CMS subscription, paid API, or server runtime is required.

Keep the dependency tree small.

## 7. Responsive Design

Do not make the mobile version a mechanically compressed desktop site.

Adapt editorial compositions deliberately.

Desktop:
- 12-column grid
- Oversized typography
- Intentional asymmetric whitespace
- Multi-column editorial project layouts

Tablet:
- Fewer columns
- Adjusted display scale
- Preserved hierarchy

Mobile:
- Clean single-column reading flow
- Carefully controlled headline wrapping
- Readable metadata
- Touch-friendly navigation
- No horizontal overflow
- Comfortable margins and spacing

The design must maintain its Swiss editorial character across all breakpoints.

## 8. Accessibility, SEO & Performance

Implement:
- Semantic HTML
- Accessible navigation
- Keyboard support
- Visible focus states
- Appropriate contrast
- Reduced-motion support
- Responsive image handling
- Optimized font delivery
- Minimal JavaScript
- Correct heading hierarchy
- Metadata and Open Graph tags
- Favicon
- Social preview image
- Sitemap
- robots.txt
- Canonical URL
- JSON-LD Person schema using verified data only

Target excellent Lighthouse performance, accessibility, and SEO results.

Avoid heavy runtime libraries and unnecessary dependencies.

## 9. Deployment — GitHub Pages + is-a.dev

The intended hosting architecture:

Astro static build → GitHub Actions → GitHub Pages → is-a.dev custom domain.

Proposed domain:

`duytan.is-a.dev`

The domain is not yet confirmed or registered.

Keep the domain configurable.

Use the current official references:

https://docs.astro.build/en/guides/deploy/github/

https://docs.is-a.dev/

https://docs.is-a.dev/guides/github-pages/

Implement an appropriate GitHub Actions workflow following current official Astro and GitHub Pages documentation.

Include:
- Static build
- Production deployment workflow
- Least-privilege permissions
- Correct Astro `site` and `base` configuration
- Custom domain support
- Correct CNAME handling
- Clear separation between preview and canonical domain

Create `docs/DOMAIN_SETUP.md`.

Document the official is-a.dev registration procedure, including a proposed `domains/duytan.json` file in the external is-a.dev repository:

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

Explain:
- How to confirm subdomain availability
- How to deploy a live GitHub Pages preview
- How to register through an is-a.dev pull request
- How to configure the GitHub Pages custom domain after approval
- How to enable HTTPS
- How to verify DNS
- How to handle optional ownership verification records

Do not automatically register domains, submit external PRs, or push a production deployment without approval.

## 10. Visual Quality Assurance

Before considering the implementation complete, review the actual rendered website.

If browser tooling is available:
- Open the running website.
- Capture desktop and mobile screenshots.
- Inspect 1440px, 1024px, 768px, and 390px viewports.
- Check typography, wrapping, alignment, spacing, and page rhythm.
- Test navigation and all visible interactions.
- Check console errors and broken assets.
- Fix visually weak sections.

Evaluate the design critically.

Ask:
- Does this feel like an editorial designer created it?
- Is typography actually driving the design?
- Does the 12-column grid feel intentional?
- Is the whitespace balanced?
- Does the site look premium rather than empty?
- Are the project layouts varied but cohesive?
- Would this look credible for a Principal Engineer?
- Does this still resemble a generic SaaS template?

If it looks generic, refine the layout before finishing.

Do not claim screenshots or browser verification if the tools were unavailable.

## 11. Testing

Run all applicable checks:
- TypeScript checks
- Linting
- Production build
- Internal link validation
- Responsive smoke tests
- Navigation tests
- Accessibility checks where tooling permits

Fix all issues introduced by the implementation.

Do not claim a deployment occurred unless it was actually performed.

## 12. Final Deliverables

Deliver:
- Complete working Astro website
- Swiss Editorial visual design system
- Responsive homepage
- Project presentation components
- Experience and expertise sections
- Optional technical writing architecture
- SEO and social metadata
- GitHub Actions deployment workflow
- GitHub Pages / is-a.dev support
- README.md
- docs/DOMAIN_SETUP.md
- docs/CUSTOMIZATION.md

At completion, report:
1. What was implemented.
2. Important design decisions.
3. Tests and build results.
4. Any limitations.
5. Missing personal information that needs configuration.
6. Exact commands for development and production builds.
7. Manual steps required for GitHub Pages and is-a.dev.

## 13. Final Creative Direction

The website must look like an editorial portfolio for an experienced infrastructure engineer with a strong personal identity.

It should be light, refined, architectural, intelligent, and visually memorable.

It must not look like:
- A generic Tailwind template
- A SaaS product homepage
- A dashboard
- A dark developer portfolio
- A résumé builder
- An AI-generated landing page filled with meaningless design effects

Prioritize typography, composition, white space, and content clarity.

**Design with restraint. Implement with precision.**

Proceed with the full implementation.
