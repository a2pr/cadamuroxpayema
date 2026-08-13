<script setup lang="ts">
defineProps<{
  label: string
  priceLabel: string
}>()
</script>

<template>
  <div class="plate-price">
    <button
      class="btn btn-dark price-btn px-4 py-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#plate-price-reveal"
      aria-expanded="false"
      aria-controls="plate-price-reveal"
    >
      {{ label }}
    </button>
    <div id="plate-price-reveal" class="collapse mt-2">
      <p class="price-value mb-0">{{ priceLabel }}</p>
    </div>
  </div>
</template>

<style scoped>
.price-btn {
  background-color: var(--color-text);
  border-color: var(--color-text);
  font-family: var(--font-body);
  letter-spacing: 0.05em;
}

.price-value {
  font-family: var(--font-body);
  color: var(--color-text-muted);
  font-size: 0.95rem;
}
</style>
