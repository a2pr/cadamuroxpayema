<script setup lang="ts">
defineProps<{
  names: string
  date: string
  message: string
}>()
</script>

<template>
  <div class="event-details text-center">
    <p class="names mb-2">{{ names }}</p>
    <p class="date mb-2">{{ date }}</p>
    <p class="message mb-0">{{ message }}</p>
  </div>
</template>

<style scoped>
.event-details {
  font-family: var(--font-detail-c);
  color: var(--color-c-text);
}

.names {
  font-size: 1.5rem;
  font-style: italic;
}

.date {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--color-c-text-muted);
}

.message {
  font-size: 1rem;
  font-style: italic;
  color: var(--color-c-text-muted);
}
</style>
