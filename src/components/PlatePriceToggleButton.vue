<script setup lang="ts">
import { ref } from 'vue'
import { formatPlatePrice } from '@/config/invitation'

const props = defineProps<{
  price: number
  label: string
}>()

const revealed = ref(false)

function reveal() {
  revealed.value = true
}
</script>

<template>
  <button type="button" class="btn btn-outline-gold" @click="reveal">
    {{ revealed ? `${formatPlatePrice(props.price)} por pessoa` : props.label }}
  </button>
</template>
