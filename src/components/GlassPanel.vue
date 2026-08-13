<script setup lang="ts">
defineProps<{
  kicker: string
  names: string
  date: string
  message: string
}>()
</script>

<template>
  <div class="glass-panel">
    <p class="glass-panel-kicker">{{ kicker }}</p>
    <h1 class="glass-panel-names">{{ names }}</h1>
    <p class="glass-panel-date">{{ date }}</p>
    <p class="glass-panel-message">{{ message }}</p>
    <div class="glass-panel-actions">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.glass-panel {
  background: var(--color-b-panel-bg);
  border: 1px solid var(--color-b-panel-border);
  border-radius: 24px;
  padding: 1.75rem 1.5rem;
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow: 0 8px 32px rgba(43, 20, 24, 0.18);
  text-align: center;
}

.glass-panel-kicker {
  font-family: var(--font-script-b);
  font-size: 1.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-b-text);
  margin-bottom: 0.15rem;
}

.glass-panel-names {
  font-family: var(--font-detail-b);
  font-weight: 600;
  font-size: 1.85rem;
  line-height: 1.15;
  margin-bottom: 0.15rem;
  color: var(--color-b-text);
}

.glass-panel-date {
  font-family: var(--font-detail-b);
  font-size: 1.05rem;
  color: var(--color-b-text-muted);
  margin-bottom: 0.75rem;
}

.glass-panel-message {
  font-family: var(--font-detail-b);
  font-style: italic;
  font-size: 0.95rem;
  color: var(--color-b-text-muted);
  margin-bottom: 1.25rem;
}

.glass-panel-actions {
  font-family: var(--font-body-b);
}
</style>
