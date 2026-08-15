<script setup lang="ts">
import { ref } from 'vue'
import { formatPlatePriceRange } from '@/config/invitation'

const props = defineProps<{
  priceMin: number
  priceMax: number
  label: string
  moreInfoUrl: string
  moreInfoLabel: string
}>()

const revealed = ref(false)

function toggle() {
  revealed.value = !revealed.value
}
</script>

<template>
  <div class="plate-price-toggle">
    <button type="button" class="btn btn-outline-gold w-100" @click="toggle">
      {{ revealed ? formatPlatePriceRange(props.priceMin, props.priceMax) : props.label }}
    </button>
    <Transition name="fade-slide">
      <a
        v-if="revealed"
        :href="moreInfoUrl"
        target="_blank"
        rel="noopener"
        class="btn btn-outline-gold w-100 mt-2"
      >
        {{ moreInfoLabel }}
      </a>
    </Transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.fade-slide-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
