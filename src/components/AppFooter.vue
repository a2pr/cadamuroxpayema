<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <footer class="text-center py-4">
    <hr class="footer-divider mx-auto mb-3" />
    <p class="footer-message mb-0">{{ message }}</p>
  </footer>
</template>

<style scoped>
.footer-divider {
  width: 80px;
  border: none;
  border-top: 1px solid currentColor;
  opacity: 0.6;
}
</style>
