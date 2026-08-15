<script setup lang="ts">
defineProps<{
  names: string
  date: string
  time: string
  civilMarriageMessage: string
  message: string
}>()
</script>

<template>
  <div class="event-details text-center">
    <p class="names mb-2">{{ names }}</p>
    <p class="date mb-2">Data: {{ date }}</p>
    <p class="date mb-2">Horário: {{ time }}</p>
    <p class="civil-message mb-2">{{ civilMarriageMessage }}</p>
    <p class="civil-message mb-2">{{ message }}</p>
  </div>
</template>

<style scoped>
.event-details {
  font-family: var(--font-detail-c);
  color: var(--color-c-text);
}

.names {
  font-size: 1.75rem;
  font-style: italic;
}

.date {
  font-size: 1.25rem;
  font-style: italic;
  color: var(--color-c-text-muted);
}

.civil-message {
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 600;
  color: var(--color-c-text);
}
</style>
