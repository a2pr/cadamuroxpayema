<script setup lang="ts">
import CoupleFigureImage from '@/components/CoupleFigureImage.vue'

defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="framed-card rounded-3 mx-auto">
    <CoupleFigureImage :src="src" :alt="alt" class="rounded-2" />
  </div>
</template>

<style scoped>
.framed-card {
  max-width: 360px;
  padding: 0.75rem;
  background-color: var(--color-c-card-bg);
  border: 1px solid var(--color-c-border);
  box-shadow: 0 4px 18px rgba(122, 46, 58, 0.1);
}
</style>
