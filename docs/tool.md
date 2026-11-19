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
    <strong>Lisbon · 2022 XML sample</strong>
    <p>A supplied DATEX II XML file represents Lisbon's LEZ 1 with a polygon, issuing authority, regulation type, date, weekday operating period and sets of vehicle conditions and exemptions. This is an archived example dated 7 June 2022, **not current driving advice**.</p>
  </div>
  <div class="pilot-example">
    <strong>Aachen · early model walkthrough</strong>
    <p>The original technical walkthrough illustrates how an LEZ could use a traffic regulation order, geometric boundary and nested AND/OR conditions to represent complex exemptions. It documents modelling, not the current Aachen rules.</p>
  </div>
</div>

## Validation is more than a successful export

The official Final Report describes technical validation during import and the need for competent authorities to confirm and maintain the information. It records that city-level validation of some digitised entries remained outstanding at the end of the project.

That distinction matters for any future re-use. A file can be well formed yet be incomplete, stale or inconsistent with the current traffic regulation. NAPCORE's publicly available [Quality Framework for UVAR data (2025)](https://napcore.eu/wp-content/uploads/2025/03/3_NAPCORE-Quality-Framework-for-UVAR-v1.0.pdf) provides a later quality-assessment context.

## Historical implementation

The 2022 technical documentation describes a Vue/OpenLayers browser client, REST interfaces, a Java application server and PostgreSQL/PostGIS storage. Those details refer to the historic application; they should not be taken as a recommendation to deploy the legacy software unchanged.

For the project context, see [The project](/project). For what this provisional site currently provides, see [Status and next steps](/status).

### Sources

- [UVAR Box Final Report (official EU edition, published 2025)](/publications) — original inputs, tool workflow, validation and the 2022 pilot experience.
- *UVAR Box Technical and User Documentation*, D2.5, August 2022 — original functionality and software architecture; not redistributed on this provisional site.
- *UVAR Box LEZ Aachen Example Walkthrough*, project technical presentation — early DATEX II modelling illustration.
- *UVAR_20220607_LEZ_PT_LISBON1.xml*, archived example, 7 June 2022 — metadata and structure inspected; the original XML is not published here.

