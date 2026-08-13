<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
}>()
</script>

<template>
  <header class="text-center">
    <p class="kicker mb-1">{{ kicker }}</p>
    <h1 class="hero-title mb-0">{{ title }}</h1>
  </header>
</template>

<style scoped>
.kicker {
  font-family: var(--font-body-c);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-c-text-muted);
}

.hero-title {
  font-family: var(--font-script-c);
  font-size: 3.5rem;
  color: var(--color-c-text);
}
</style>
