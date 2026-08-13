<script setup lang="ts">
import CoupleFigureImage from './CoupleFigureImage.vue'

defineProps<{
  heroTitle: string
  coupleNames: string
  weddingDate: string
  couplePhoto: string
}>()
</script>

<template>
  <section class="hero text-center py-5">
    <p class="kicker mb-3">{{ heroTitle }}</p>
    <h1 class="couple-names mb-3">{{ coupleNames }}</h1>
    <p class="wedding-date text-uppercase mb-4">{{ weddingDate }}</p>
    <CoupleFigureImage :src="couplePhoto" :alt="`Foto de ${coupleNames}`" />
  </section>
</template>

<style scoped>
.kicker {
  font-family: var(--font-body);
  letter-spacing: 0.35em;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.couple-names {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 600;
  color: var(--color-text);
}

.wedding-date {
  font-family: var(--font-body);
  letter-spacing: 0.2em;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}
</style>
