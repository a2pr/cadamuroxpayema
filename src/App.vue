<script setup lang="ts">
import HeroPhotoOverlay from '@/components/HeroPhotoOverlay.vue'
import LocationButton from '@/components/LocationButton.vue'
import PlatePriceModal from '@/components/PlatePriceModal.vue'
import BottomBand from '@/components/BottomBand.vue'
import { invitation } from '@/config/invitation'
</script>

<template>
  <main>
    <HeroPhotoOverlay
      :photo-src="invitation.couplePhoto"
      photo-alt="Foto do casal"
      :title="invitation.heroTitle"
      :couple-names="invitation.coupleNames"
      :wedding-date="invitation.weddingDate"
      :dinner-message="invitation.dinnerMessage"
    />
    <BottomBand :footer-message="invitation.footerMessage">
      <template #buttons>
        <LocationButton
          class="btn-outline-light"
          :href="invitation.googleMapsUrl"
          :label="invitation.locationButtonLabel"
        />
        <PlatePriceModal :label="invitation.plateButtonLabel" :price="invitation.platePrice" />
      </template>
    </BottomBand>
  </main>
</template>
