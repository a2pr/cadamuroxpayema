<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="figure-frame mx-auto">
    <img :src="src" :alt="alt" class="img-fluid rounded-circle" />
  </div>
</template>

<style scoped>
.figure-frame {
  width: min(60vw, 260px);
  aspect-ratio: 1 / 1;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  padding: 0.5rem;
}

.figure-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
