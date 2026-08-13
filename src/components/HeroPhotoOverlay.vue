<script setup lang="ts">
defineProps<{
  photoSrc: string
  photoAlt: string
  title: string
  coupleNames: string
  weddingDate: string
  dinnerMessage: string
}>()
</script>

<template>
  <section class="hero-photo position-relative vh-100 overflow-hidden">
    <img :src="photoSrc" :alt="photoAlt" class="hero-photo__img position-absolute top-0 start-0 w-100 h-100" />
    <div class="hero-photo__overlay position-absolute top-0 start-0 w-100 h-100"></div>
    <div
      class="hero-photo__content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center text-center px-3 pt-5"
    >
      <h1 class="hero-photo__title mb-4">{{ title }}</h1>
      <div class="hero-photo__details">
        <p class="mb-1">{{ coupleNames }}</p>
        <p class="mb-1">{{ weddingDate }}</p>
        <p class="mb-0">{{ dinnerMessage }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-photo__img {
  object-fit: cover;
  object-position: center;
}

.hero-photo__overlay {
  background: var(--color-a-overlay);
}

.hero-photo__content {
  z-index: 1;
}

.hero-photo__title {
  font-family: var(--font-script-a);
  color: var(--color-a-title);
  font-size: clamp(3rem, 12vw, 5rem);
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);
}

.hero-photo__details {
  font-family: var(--font-detail-a);
  font-style: italic;
  color: var(--color-a-detail);
  font-size: clamp(1rem, 4vw, 1.35rem);
  text-shadow:
    0 1px 3px rgba(255, 255, 255, 0.5),
    0 1px 10px rgba(0, 0, 0, 0.35);
}
</style>
