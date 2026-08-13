<script setup lang="ts">
import { formatPlatePrice } from '@/config/invitation'

const props = defineProps<{
  label: string
  price: number
}>()
</script>

<template>
  <div class="plate-price">
    <button
      type="button"
      class="btn btn-glass-outline rounded-pill"
      data-bs-toggle="collapse"
      data-bs-target="#plate-price-reveal"
      aria-expanded="false"
      aria-controls="plate-price-reveal"
    >
      {{ props.label }}
    </button>
    <div id="plate-price-reveal" class="collapse plate-price-reveal">
      <p class="plate-price-value mb-0">{{ formatPlatePrice(props.price) }} por pessoa</p>
    </div>
  </div>
</template>

<style scoped>
.plate-price-reveal {
  margin-top: 0.75rem;
}

.plate-price-value {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-family: var(--font-body-b);
  font-size: 0.85rem;
  color: var(--color-b-text);
}
</style>
