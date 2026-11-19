# UVAR Box homepage — design and asset guide

This project inherits the default VitePress theme and the Awesome NAPCORE colour system. The UVAR Box-specific homepage and accessibility adjustments remain separate so the original NAPCORE theme can be updated without rewriting the site's content.

## Where to edit

| What | File | Change |
| --- | --- | --- |
| Hero labels, order, destinations | `docs/index.md` → `hero.actions` | The three actions are now **UVAR Box project** (`/project`), **Explore 2022 results** (`/results`), **Status and next steps** (`/status`). |
| Hero button layout | `docs/.vitepress/theme/uvar-content.css` | Three buttons in one row at desktop widths (≥960 px), natural wrapping on intermediate widths, stacked buttons at ≤520 px. |
| Main feature cards and icons | `docs/index.md` → `features` | Local SVG paths, descriptive `alt`, 72 × 72 px display size. |
| Stakeholder cards and icons | `docs/index.md` → `involved` | Local SVG paths, descriptive `alt`, 96 × 96 px display size. |
| Icon visibility, centring and sizes | `docs/.vitepress/theme/uvar-content.css` | Centres the SVGs via automatic horizontal margins, keeps their size and disables the upstream dark-mode brightness filter for this icon family. |
| Introductory ribbon and section notes | `docs/index.md`, `docs/.vitepress/theme/uvar-content.css` | The `uvar-hp.hp-sections` spacing aligns the ribbon-to-features gap with the 25 px gap below it. |
| Public-document links and cards | `docs/publications.md` | Three reconciled public PDF editions and their publisher/DOI source links. |
| Approved PDF file list | `scripts/check-content.mjs` | Prevents accidental publication of unreviewed document editions. |
| Pilot chart source attribution | `docs/.vitepress/theme/components/PilotResults.vue` | The source label remains, with the extra sentence removed. |
| Footer text | `docs/.vitepress/config.ts` → `themeConfig.footer` | The European Commission attribution remains. |

## Original UVAR Box SVG assets

All six icons are standalone SVG 1.1-compatible files, with a **96 × 96** viewBox. They use the same UVAR Box-inspired dark navy, yellow and green visual vocabulary and a light framed tile to maintain visibility on both light and dark cards. They do not load external fonts, scripts or images.

| Card | Asset file | Subject |
| --- | --- | --- |
| Describe the zone | `docs/public/icons/uvar-zone-map.svg` | Map polygon with highlighted access zone |
| Exchange UVAR data | `docs/public/icons/uvar-data-exchange.svg` | Structured record and linked data endpoints |
| Shape the next phase | `docs/public/icons/uvar-roadmap.svg` | Milestone route and destination flag |
| Cities and public authorities | `docs/public/icons/uvar-city-authorities.svg` | City buildings and urban boundary |
| National Access Points | `docs/public/icons/uvar-national-access-points.svg` | Shared data hub and connected endpoints |
| Data users and services | `docs/public/icons/uvar-data-users.svg` | Digital access-information screen |

For example, `src: /icons/uvar-zone-map.svg` is automatically served under `/uvarbox-web/icons/uvar-zone-map.svg` on GitHub Pages when `VITEPRESS_BASE=/uvarbox-web/`. Avoid hard-coding that deployment prefix into the source paths.

### Accessibility and portability

- The cards have distinct silhouettes and labels; colour is not their only identifier.
- The SVGs are vector images, so they remain sharp at larger display sizes and on high-density screens.
- Each VitePress feature's image has meaningful alternative text in the frontmatter.
- The cards retain VitePress keyboard navigation, with an additional visible focus outline.
- No automatic motion was introduced; the optional reduced-motion preference removes card transitions.
- A single SVG per icon is used in both themes; no JavaScript-based theme asset switching or external icon CDN is required.

The visual treatment is intended to reduce clutter and help scanning, including for readers with attention difficulties. This is a design consideration rather than a claim of clinical or formal accessibility certification.

## How to change sizes later

Keep the asset's `viewBox="0 0 96 96"` unchanged. Adjust the image's width/height in `docs/index.md` **and** the corresponding `.VPImage` rule in `uvar-content.css`:

- Main three features: `72px`.
- Three stakeholder cards: `96px`.

Do not resize to a PNG: an SVG remains sharp without extra resolution variants. Keep enough card space for longer labels and text zoom.

## Local checks on Windows

In PowerShell, from the repository root:

```powershell
npm ci
npm run type-check
npm run check:content
$env:VITEPRESS_BASE="/uvarbox-web/"
npm run build
```

For local development, clear the deployment base first, then leave the server terminal open and use the exact URL it prints:

```powershell
Remove-Item Env:\VITEPRESS_BASE -ErrorAction SilentlyContinue
npm run dev
```

The build checks that the three intended public PDFs are present, pilot data totals agree and generated internal links resolve. Before publishing, also inspect the desktop/mobile layouts and both colour themes in a real browser.

## Editorial caution

The requested short disclaimers were removed from the homepage and footer. The site still dates the 2022 material and retains substantive provenance and release limitations on the [project](docs/project.md), [tool](docs/tool.md), [results](docs/results.md) and [status](docs/status.md) pages. Removing those remaining distinctions would risk implying that the historical tool and dataset are current operational services.
