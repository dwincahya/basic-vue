<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log("Mounted: DOM tersedia");
})

onUpdated(() => {
  console.log("Updated: count berubah ke", count.value);
})
</script>

<template>
  <button @click="count++">Klik: {{ count }}</button>
</template>
