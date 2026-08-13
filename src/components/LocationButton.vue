<script setup lang="ts">
defineProps<{
  href: string
  label: string
}>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener" class="btn btn-outline-dark location-btn px-4 py-2">
    {{ label }}
  </a>
</template>

<style scoped>
.location-btn {
  border-color: var(--color-text);
  color: var(--color-text);
  font-family: var(--font-body);
  letter-spacing: 0.05em;
}

.location-btn:hover {
  background-color: var(--color-text);
  color: var(--color-bg);
}
</style>
