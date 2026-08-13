<script setup lang="ts">
import { computed } from 'vue'
import { formatPlatePrice } from '@/config/invitation'

const props = defineProps<{
  label: string
  price: number
}>()

const formattedPrice = computed(() => formatPlatePrice(props.price))
</script>

<template>
  <button
    type="button"
    class="btn plate-price-btn"
    data-bs-toggle="modal"
    data-bs-target="#plate-price-modal"
  >
    {{ label }}
  </button>

  <div class="modal fade" id="plate-price-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content plate-price-modal-content">
        <div class="modal-header border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
        </div>
        <div class="modal-body text-center pb-4">
          <p class="mb-0">O valor médio por pessoa é de {{ formattedPrice }}.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plate-price-btn {
  background: var(--color-a-accent);
  color: var(--color-a-band-bg);
  border: none;
}

.plate-price-modal-content {
  font-family: var(--font-detail-a);
  font-style: italic;
  color: var(--color-a-detail);
}
</style>
