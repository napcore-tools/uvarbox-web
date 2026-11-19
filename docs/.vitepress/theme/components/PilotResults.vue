<script setup lang="ts">
import results from '../../../data/pilot-results.json';

const maximum = Math.max(...results.countries.map((country) => country.count));
const totalCountries = results.countries.reduce((total, country) => total + country.count, 0);
const totalTypes = results.types.reduce((total, kind) => total + kind.count, 0);
if (totalCountries !== results.total || totalTypes !== results.total) {
  throw new Error('The pilot results are inconsistent with the published total.');
}
</script>

<template>
  <div class="pilot-results">
    <div class="pilot-highlights">
      <div><strong>{{ results.total }}</strong><span>digitised UVAR records</span></div>
      <div><strong>{{ results.countriesRepresented }}</strong><span>countries represented</span></div>
      <div><strong>{{ results.types.find((t) => t.abbreviation === 'LEZ')?.count }}</strong><span>low-emission zones</span></div>
    </div>

    <div class="pilot-chart">
      <h3>UVAR records by country</h3>
      <div v-for="country in results.countries" :key="country.name" class="pilot-row">
        <div class="pilot-label">{{ country.name }}</div>
        <div class="pilot-track">
          <div class="pilot-bar" :style="{ width: `${(country.count / maximum) * 100}%` }"></div>
        </div>
        <strong class="pilot-count">{{ country.count }}</strong>
      </div>
      <p class="pilot-caption">Five focus Member States, plus Portugal under the project's best-effort outreach. The figures are a 2022 project snapshot.</p>
    </div>

    <p class="pilot-source">Source: {{ results.reference }}.</p>
  </div>
</template>
