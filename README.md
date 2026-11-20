# UVAR Box provisional website

The source for a **public-facing, provisional information website** about the EU-funded 2020–2022 UVAR Box project and the next steps under discussion. It is built with [VitePress](https://vitepress.dev/) and deliberately adapts the structure and visual system of [Awesome NAPCORE](https://awesome.napcore.eu/): the NAPCORE theme CSS, the VitePress default theme, panelled home-page sections, source-linked features, Markdown pages, local search and GitHub Pages deployment. The borrowed upstream theme elements are acknowledged in [third-party notices](THIRD-PARTY-NOTICES.md).

**Published GitHub Pages URL:** <https://napcore-tools.github.io/uvarbox-web/>

This website **does not operate the old UVAR Box tool or offer a current UVAR dataset**. It includes public historical documentation and cautiously labelled proposals for future work. Legacy application source code, credentials, private briefings, internal risk assessments, drafts and unreleased data are intentionally absent.

## Local development 

Requires Node.js 22.12+ or 24+ and npm.   

```bash
npm ci
npm run dev
```

`npm run build` performs a small content safety check and a VitePress production build. `npm run type-check` checks the site configuration and theme types.

For a local production preview:

```bash
VITEPRESS_BASE=/uvarbox-web/ npm run build
VITEPRESS_BASE=/uvarbox-web/ npm run preview
```

The site defaults to `/` for local development, but GitHub Actions sets the correct `/uvarbox-web/` base during deployment. Internal Markdown links and VitePress navigation are base-aware; the few custom HTML links use relative targets.

## Deploying to GitHub Pages

1. Push approved changes to `main` in [`napcore-tools/uvarbox-web`](https://github.com/napcore-tools/uvarbox-web), preferably via a reviewed pull request.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. The workflow `.github/workflows/deploy.yml` installs pinned dependencies, checks types, builds the page and publishes the VitePress output.
4. Confirm that <https://napcore-tools.github.io/uvarbox-web/> displays correctly, including its PDF links and internal navigation.
5. Use the enabled **Issues** facility for dated, source-backed public corrections; do not ask contributors to upload confidential materials.

Do **not** use the separate `/uvarbox` URL as the default for this repository. That would require a different repository or redirect and is not configured here. If a custom domain is approved later, update `VITEPRESS_BASE`, the canonical Open Graph URL, and GitHub Pages settings together; check the public URL before issuing QR codes or printed collateral.

## Editing content

| Public page | File |
| --- | --- |
| Home | `docs/index.md` |
| Historical project | `docs/project.md` |
| Original tool workflow | `docs/tool.md` |
| Historical pilot results | `docs/results.md` |
| Publications | `docs/publications.md` |
| Status and proposed next steps | `docs/status.md` |
| Stakeholder questions and corrections | `docs/contribute.md` |

The inherited Awesome NAPCORE colours and layout conventions are in `docs/.vitepress/theme/napcore-theme.css`; UVAR-specific sections are in `docs/.vitepress/theme/uvar-content.css`. The 2022 totals powering the bar chart are in `docs/data/pilot-results.json`, displayed by `PilotResults.vue`. Navigation, metadata and base URL behaviour are in `docs/.vitepress/config.ts`.

For the six UVAR-specific SVG icons, the responsive three-button hero and sizing guidance, see [DESIGN-ASSETS.md](DESIGN-ASSETS.md). The hero illustration is a new conceptual SVG, **not** an original image from the 2022 tool. The historic UVAR Box project artwork remains separately attributed.

To propose a public update, use GitHub Issues or a pull request. Check a claim against a dated public source and describe its **time period**, **publisher**, **version**, and **limitations**. Do not convert an internal assessment or an unapproved plan into a public status statement.

## Sources and editorial decisions

| Claim or content | Public evidence |
| --- | --- |
| 2020–2022 scope and five pilot countries | UVAR Box Final Report, official EU edition published 2025, recording the 2022 project |
| Historical 570 records and country / category totals | Official EU Final Report, Table 2 (p. 25) |
| Map, templates, import/export, XML checks and historical architecture | Official EU Final Report, Sections 3.1.1–3.1.2. |
| Historical beneficiary scenarios and country coaches | Recovered 2021–2022 project website, *Use Cases* and *Country Coaches* pages; these document intended uses and historical support, not current services. |
| UVAR Exchange as a separate follow-on project | [European Commission launch announcement](https://urban-mobility-observatory.transport.ec.europa.eu/news-events/news/uvarexchange-project-kicks-2021-09-24_en), September 2021, and [POLIS final stakeholder workshop](https://www.polisnetwork.eu/event/uvar-exchange-final-stakeholder-workshop/), October 2022. |
| Suggested 2027 priorities | November 2026 **draft** UVAR Box poster, not a confirmed release plan; current details must be cleared before public publication. |
| Earlier tool launch and intended audience | European Commission Urban Mobility Observatory, [18 August 2022](https://urban-mobility-observatory.transport.ec.europa.eu/news-events/news/uvarbox-tool-now-available-2022-08-18_en) |
| Consortium and original aims | [POLIS Network project page](https://www.polisnetwork.eu/project/uvar-box/) |
| NAP role | [European Commission NAP information](https://transport.ec.europa.eu/transport-themes/smart-mobility/road/its-directive-and-action-plan/national-access-points_en) |
| Public project brochure | [POLIS publication announcement](https://www.polisnetwork.eu/news/uvarbox-final-brochure/), September 2022 |
| Public project leaflet | [POLIS project publications](https://www.polisnetwork.eu/project/uvar-box/), 2021 |
| Official publication identifiers | [Final Report DOI 10.2832/897453](https://doi.org/10.2832/897453), ISBN 978-92-68-20054-4 |
| Current European policy context | [Delegated Regulation (EU) 2022/670](https://eur-lex.europa.eu/eli/reg_del/2022/670/oj/eng), [European Commission UVAR overview](https://transport.ec.europa.eu/transport-themes/urban-transport/urban-vehicle-access-regulations_en) |
| Data quality discussion | [NAPCORE Quality Framework for UVAR data](https://napcore.eu/wp-content/uploads/2025/03/3_NAPCORE-Quality-Framework-for-UVAR-v1.0.pdf), 2025 |

The site reports **570 digitised entries** as itemised in Table 2 of the official Final Report, explicitly as an end-of-project result from 2022.

The three hosted PDFs are the reconciled editions supplied in November 2026: the 49-page official EU Final Report, the 24-page 2022 brochure and the 3-page 2021 leaflet. The official EU report states that reproduction is authorised with source acknowledgement; rights for the other materials should still be checked with the publisher. Complete copies of several additional historic deliverables, including D2.4 and D2.5, were subsequently recovered; they remain **candidates for review, not approved public downloads**. See the thematic index in [publications](docs/publications.md) and [DOCUMENT-REVIEW.md](DOCUMENT-REVIEW.md) for the proposed decision register and original filenames. The historic UVAR Box logo and archival screenshot remain project artwork. The upstream theme/icon assets have a separate MIT licence (see notices).

## Publication checklist

- [ ] Approve any 2026/2027 poster-derived roadmap language with the responsible project owner; change or remove it if not approved.
- [ ] Confirm authorised public wording and logo/screenshot/document reuse.
- [ ] Check that every claim of current availability has a contemporary public source.
- [ ] Review PDFs for material that should not be republished; replace/remove as needed.
- [ ] Agree the **Host / Link / Cite / Exclude** decision for each additional recovered document in [DOCUMENT-REVIEW.md](DOCUMENT-REVIEW.md) before adding files or links.
- [ ] Confirm GitHub Pages URL and QR destination with the event/web team.
- [ ] Keep old tool login/registration and unavailable site links out of navigation.
- [ ] Confirm a named maintainer for corrections, hosting and future content review.
- [ ] Review the private source-audit notes separately; **never commit unpublished technical files, legacy source or example XML** to the public website repository.

