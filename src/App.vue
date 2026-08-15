<script setup lang="ts">
import { invitation } from '@/config/invitation'
import PageHeader from '@/components/PageHeader.vue'
import FramedPhotoCard from '@/components/FramedPhotoCard.vue'
import EventDetails from '@/components/EventDetails.vue'
import LocationButton from '@/components/LocationButton.vue'
import PlatePriceToggleButton from '@/components/PlatePriceToggleButton.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="invitation-page">
    <div class="invitation-container container py-5">
      <PageHeader :title="invitation.heroTitle" class="mb-4" />

      <FramedPhotoCard :src="invitation.couplePhoto" alt="Foto do casal" class="mb-4" />

      <EventDetails
        :names="invitation.coupleNames"
        :date="invitation.weddingDate"
        :time="invitation.weddingTime"
        :civil-marriage-message="invitation.civilMarriageMessage"
        :message="invitation.dinnerMessage"
      />

      <div class="row row-cols-1 row-cols-md-2 g-2 my-4">
        <div class="col">
          <LocationButton
            :href="invitation.googleMapsUrl"
            :label="invitation.locationButtonLabel"
            class="btn-outline-gold w-100"
          />
        </div>
        <div class="col">
          <PlatePriceToggleButton
            :price-min="invitation.platePriceMin"
            :price-max="invitation.platePriceMax"
            :label="invitation.plateButtonLabel"
            :more-info-url="invitation.moreInfoUrl"
            :more-info-label="invitation.moreInfoLabel"
          />
        </div>
      </div>

      <AppFooter :message="invitation.footerMessage" />
    </div>
  </div>
</template>

<style scoped>
.invitation-page {
  min-height: 100vh;
  background-color: var(--color-c-bg);
}

.invitation-container {
  max-width: 480px;
  color: var(--color-c-text);
}
</style>
