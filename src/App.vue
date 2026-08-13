<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import LocationButton from './components/LocationButton.vue'
import PlatePriceReveal from './components/PlatePriceReveal.vue'
import AppFooter from './components/AppFooter.vue'
import { invitation, formatPlatePrice } from './config/invitation'
</script>

<template>
  <main class="container-fluid px-3">
    <div class="mx-auto" style="max-width: 480px">
      <HeroSection
        :hero-title="invitation.heroTitle"
        :couple-names="invitation.coupleNames"
        :wedding-date="invitation.weddingDate"
        :couple-photo="invitation.couplePhoto"
      />

      <div class="row row-cols-1 row-cols-md-2 g-3 justify-content-center text-center">
        <div class="col d-flex justify-content-center">
          <LocationButton :href="invitation.googleMapsUrl" :label="invitation.locationButtonLabel" />
        </div>
        <div class="col d-flex flex-column align-items-center">
          <PlatePriceReveal
            :label="invitation.plateButtonLabel"
            :price-label="formatPlatePrice(invitation.platePrice) + ' por pessoa'"
          />
        </div>
      </div>

      <AppFooter :message="invitation.footerMessage" />
    </div>
  </main>
</template>
