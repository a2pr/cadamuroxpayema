<script setup lang="ts">
import CoupleFigureImage from './CoupleFigureImage.vue'

defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <section class="hero-photo">
    <CoupleFigureImage :src="src" :alt="alt" class="hero-photo-img" />
    <div class="hero-photo-overlay">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.hero-photo {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-photo .hero-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-photo-overlay {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 88%;
  max-width: 420px;
  z-index: 2;
}
</style>
