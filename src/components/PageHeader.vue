<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <header class="text-center">
    <h1 class="hero-title mb-0">{{ title }}</h1>
  </header>
</template>

<style scoped>
.hero-title {
  font-family: var(--font-script-c);
  font-size: 3.75rem;
  color: var(--color-c-text);
}
</style>
