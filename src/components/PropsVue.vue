<script setup lang="ts">
const {title = 'judul', description = 'deskripsi'} = defineProps<{
  title: string,
  description: string,
}>();
</script>

<template>
  <div class="props-component">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>