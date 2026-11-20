---
title: How the tool worked
description: A source-backed walkthrough of the original 2022 UVAR Box pilot interface and DATEX II data workflow.
---

# How UVAR Box worked

<span class="page-kicker">Original pilot tool · 2022</span>

UVAR Box was designed as a web-based tool for authorities that needed to digitise urban vehicle access regulations without first becoming DATEX II specialists. It supported a map view, templates for common zone types and structured import/export of data.

<div class="page-callout"><p><strong>Historical functionality:</strong> this describes the 2022 pilot, not a currently operating public tool. There is no login, registration or live dataset on this website.</p></div>

## Four steps in the original workflow

1. **Outline the zone.** Draw a geographic boundary on a map or import an existing polygon from a Shapefile.
2. **Define the rules.** Enter the authority, regulation, dates, conditions and exemptions. Templates supported low-emission zones (LEZ), limited traffic zones (LTZ), pedestrian zones (PED) and parking regulations (PARK).
3. **Check the data.** The tool validated imported machine-readable content against the relevant configured DATEX II UVAR profile. Structural validation does **not** prove that a city's rule is legally or geographically correct.
4. **Export for onward publication.** The original tool could export DATEX II-formatted UVAR records. Publication and maintenance by the responsible data provider and discovery through a National Access Point were separate stages of the value chain.

The archived project documentation describes three input methods: importing an existing DATEX II record, creating an entry manually with templates, or importing semi-structured information using Shapefile geometry and an XML mapping template. These methods are described in the [official Final Report](/publications).

## The original interface

![Historical UVAR Box pilot tool interface showing a zone on a map and a list of records](/brand/uvarbox-2022-interface.png)

<p class="screenshot-caption">Original UVAR Box interface, 2022, reproduced from the supplied working poster. The image is archival and the controls are not active here. Map imagery credited to OpenStreetMap contributors in the source screenshot.</p>

## What a record needed to express

A machine-readable access restriction needs more than a point on a map. The model was designed to carry location, legal and operational conditions so another system could interpret when a regulation applies.

<div class="pilot-example-grid">
  <div class="pilot-example">
    <strong>Lisbon · best-effort outreach</strong>
    <p>Outside the five focus countries, the official Final Report records that two low-emission zones and one limited traffic zone in Lisbon were digitised. The DATEX II XML file type LEZ issued authority, regulation type, date, weekday operating period and sets of vehicle conditions and exemptions.</p>
  </div>
  <div class="pilot-example">
    <strong>Amsterdam · DATEX II walkthrough</strong>
    <p>A September 2021 UVAR Box workshop presentation traces a low-emission zone from its traffic regulation order to a DATEX II representation, including vehicle conditions and nested exemptions. It illustrates the historical data model, not today's Amsterdam rules.</p>
  </div>
</div>

## Validation is more than a successful export

The official Final Report describes technical validation during import and the need for competent authorities to confirm and maintain the information. It records that city-level validation of some digitised entries remained outstanding at the end of the project.

That distinction matters for any future re-use. A file can be well formed yet be incomplete, stale or inconsistent with the current traffic regulation. NAPCORE's publicly available [Quality Framework for UVAR data (2025)](https://napcore.eu/wp-content/uploads/2025/03/3_NAPCORE-Quality-Framework-for-UVAR-v1.0.pdf) provides a later quality-assessment context.

## Historical implementation

The official Final Report (Section 3.1.1.2) describes a Vue/OpenLayers browser client, REST interfaces, a Java application server and PostgreSQL/PostGIS storage.

For the project context, see [The project](/project). For what this provisional site currently provides, see [Status and next steps](/status).

### Sources

- [UVAR Box Final Report (official EU edition, published 2025)](/publications), Sections 3.1.1–3.1.2 and 3.3.1 — original tool design, workflow, architecture, validation and the Lisbon results.
- *From Traffic Regulation Order to UVAR to DATEX II: Amsterdam LEZ*, UVAR Box Workshop 3, September 2021 — historical modelling example, recovered for editorial review.
- See the [additional historical technical documentation catalogue](/publications#additional-historical-technical-documentation) for related deliverables awaiting publication review.

