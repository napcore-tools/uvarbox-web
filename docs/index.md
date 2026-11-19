---
layout: home
title: UVAR Box
titleTemplate: false
description: Making city access rules usable by digital services — the UVAR Box project, 2022 pilot and proposed next phase.
hero:
  name: UVAR Box
  text: Make city access rules usable by digital services.
  tagline: From low-emission zones to machine-readable data. Discover the EU pilot, the original UVAR Box workflow and the work being considered for its next phase.
  image:
    src: /brand/hero-uvar.svg
    alt: Illustration of a city access zone and a structured DATEX II information record
  actions:
    - theme: brand
      text: UVAR Box project
      link: /project
    - theme: alt
      text: Explore 2022 results
      link: /results
    - theme: alt
      text: Status and next steps
      link: /status
features:
  - icon:
      src: /icons/uvar-zone-map.svg
      alt: Stylised city map with a highlighted access zone
      width: "72"
      height: "72"
    title: Describe the zone
    details: The 2022 tool helped authorities define vehicle access rules using a map, structured forms and templates.
    link: /tool
    linkText: Understand the workflow
  - icon:
      src: /icons/uvar-data-exchange.svg
      alt: Structured UVAR record connecting data providers and services
      width: "72"
      height: "72"
    title: Exchange UVAR data
    details: Exported DATEX II records were intended to support publication through National Access Points and reuse by services.
    link: /project
    linkText: Why it matters
  - icon:
      src: /icons/uvar-roadmap.svg
      alt: Three milestones leading to a destination flag
      width: "72"
      height: "72"
    title: Shape the next phase
    details: Read the provisional status and suggest evidence-backed requirements for future work.
    link: /contribute
    linkText: Share your needs

involved:
  - icon:
      src: /icons/uvar-city-authorities.svg
      alt: City buildings and an urban access boundary
      width: "96"
      height: "96"
    title: Cities and public authorities
    details: What zone types and workflows do you need to digitise and maintain?
    link: /contribute#cities-and-authorities
    linkText: Share city requirements
  - icon:
      src: /icons/uvar-national-access-points.svg
      alt: National Access Point hub connecting three data sources
      width: "96"
      height: "96"
    title: National Access Points
    details: How should UVAR data reach the NAP, and how should quality be documented?
    link: /contribute#national-access-points
    linkText: Share NAP requirements
  - icon:
      src: /icons/uvar-data-users.svg
      alt: Digital journey-planning screen showing access information
      width: "96"
      height: "96"
    title: Data users and services
    details: What would help you interpret and reuse reliable access rules?
    link: /contribute#service-providers-and-data-users
    linkText: Share data needs
---

<script setup>
import { VPFeatures } from 'vitepress/theme';
import { withBase } from 'vitepress';
</script>

<div class="hp-sections uvar-hp">

<div class="uvar-event-ribbon">
  <span class="eyebrow">Provisional information page · November 2026</span>
  <p>Prepared ahead of <a href="https://napcore.eu/programme-2026/" target="_blank" rel="noopener">Mobility Data Days in Athens, 25–26 November 2026</a>.</p>
</div>

<section class="hp-section hp-panel uvar-flow-panel" aria-labelledby="flow-heading">
  <div class="hp-section-header">
    <span class="eyebrow">The original idea</span>
    <h2 id="flow-heading">From a city decision to a driver's screen</h2>
    <p>UVAR Box addressed the first part of a broader information chain: turning rules issued by authorities into structured data that services could interpret.</p>
  </div>

  <div class="uvar-flow-grid">
    <div class="uvar-flow-item"><span class="flow-icon">CITY</span><h3>Define</h3><p>The competent authority determines the zone, rules and exemptions.</p></div>
    <div class="uvar-flow-item"><span class="flow-icon">TOOL</span><h3>Digitise</h3><p>UVAR Box supported map geometry, templates and data entry.</p></div>
    <div class="uvar-flow-item"><span class="flow-icon">DATA</span><h3>Exchange</h3><p>Export the UVAR record in a DATEX II-based format.</p></div>
    <div class="uvar-flow-item"><span class="flow-icon">USE</span><h3>Inform</h3><p>NAPs and services can make reliable information available to road users.</p></div>
  </div>
  <p class="uvar-panel-note">A conceptual value chain from the 2022 project deliverables.</p>
</section>

<section class="hp-section hp-panel uvar-tool-panel" aria-labelledby="tool-heading">
  <div class="uvar-split">
    <div>
      <span class="eyebrow">A working pilot, 2022</span>
      <h2 id="tool-heading">A map-based tool for non-specialists</h2>
      <p>The original web application let users import a UVAR, create one from templates, draw or import zone geometry, and export standardised information. It also checked the structure of imported data against the configured DATEX II profile.</p>
      <p><a :href="withBase('/tool.html')">Explore the original four-step workflow</a></p>
    </div>
    <figure class="uvar-tool-figure">
      <img :src="withBase('/brand/uvarbox-2022-interface.png')" alt="Historical screenshot of the original UVAR Box pilot map and list of zone records" loading="lazy" />
      <figcaption>Original pilot interface (2022). Historical screenshot, not an interactive service.</figcaption>
    </figure>
  </div>
</section>

<section class="hp-section hp-panel" aria-labelledby="results-heading">
  <div class="hp-section-header">
    <span class="eyebrow">Documented outcome</span>
    <h2 id="results-heading">The 2020–2022 pilot in numbers</h2>
    <p>The final project report recorded 570 digitised UVAR entries. These figures describe the end-of-project dataset, not current regulation coverage.</p>
  </div>
  <PilotResults />
  <div class="hp-section-cta"><a :href="withBase('/results.html')">Read the pilot results and limitations</a></div>
</section>

<section class="hp-section hp-panel uvar-next-panel" aria-labelledby="next-heading">
  <div class="hp-section-header">
    <span class="eyebrow">Looking ahead</span>
    <h2 id="next-heading">A proposed modernisation direction</h2>
  </div>
  <div class="uvar-roadmap">
    <div><strong>Review</strong><span>Reassess the 2022 software and data</span></div>
    <div><strong>Prepare</strong><span>Clear rights, provenance and safe code publication</span></div>
    <div><strong>Modernise</strong><span>Security, usability and DATEX II compatibility</span></div>
    <div><strong>Engage</strong><span>Test requirements with cities, NAPs and data users</span></div>
  </div>
  <p class="uvar-panel-note">See <a :href="withBase('/status.html')">the current publication status</a> for what is and is not available now.</p>
</section>

<section class="hp-section hp-panel" aria-labelledby="get-involved-heading">
  <div class="hp-section-header">
    <span class="eyebrow">Get involved</span>
    <h2 id="get-involved-heading">What would you need from UVAR Box?</h2>
    <p>Help identify the practical requirements for trustworthy, maintainable UVAR information.</p>
  </div>
  <VPFeatures class="hp-features" :features="$frontmatter.involved" />
</section>

</div>
