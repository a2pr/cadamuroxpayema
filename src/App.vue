<script setup lang="ts">
import { invitation } from '@/config/invitation'
import HeroPhoto from './components/HeroPhoto.vue'
import GlassPanel from './components/GlassPanel.vue'
import LocationButton from './components/LocationButton.vue'
import PlatePriceCollapse from './components/PlatePriceCollapse.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <main class="option-b">
    <HeroPhoto :src="invitation.couplePhoto" :alt="invitation.coupleNames">
      <GlassPanel
        :kicker="invitation.heroTitle"
        :names="invitation.coupleNames"
        :date="invitation.weddingDate"
        :message="invitation.dinnerMessage"
      >
        <div class="d-flex gap-2 justify-content-center flex-wrap">
          <LocationButton
            :href="invitation.googleMapsUrl"
            :label="invitation.locationButtonLabel"
            class="btn-glass-primary rounded-pill"
          />
          <PlatePriceCollapse :label="invitation.plateButtonLabel" :price="invitation.platePrice" />
        </div>
      </GlassPanel>
    </HeroPhoto>
    <AppFooter :message="invitation.footerMessage" class="option-b-footer" />
  </main>
</template>

<style scoped>
.option-b-footer {
  background: #fff;
}

.option-b-footer :deep(.footer-message) {
  font-family: var(--font-detail-b);
  font-style: italic;
  color: var(--color-b-text-muted);
}

.option-b-footer :deep(.footer-divider) {
  border-color: var(--color-b-panel-border);
}
</style>
