<script setup lang="ts">
import AppFooter from './AppFooter.vue'

defineProps<{
  footerMessage: string
}>()
</script>

<template>
  <div class="bottom-band">
    <div class="container py-4 px-3">
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <slot name="buttons" />
      </div>
      <AppFooter :message="footerMessage" />
    </div>
  </div>
</template>

<style scoped>
.bottom-band {
  background: var(--color-a-band-bg);
  color: var(--color-a-band-text);
  font-family: var(--font-body-a);
}
</style>
