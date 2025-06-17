<script setup lang="ts">
import {onWatcherCleanup, ref, watchEffect } from 'vue';

const productId = ref("Product1");
const product = ref(null)

watchEffect(async () => {
  onWatcherCleanup(() => {
    console.log("Cleanup watcher")
  })

  const response = await fetch(`/${productId.value}.json`);
  product.value = await response.json();
});


</script>

<template>
    <label for="productId">
        Product Id:
        <select v-model="productId">
            <option value=""></option>
            <option value="Product1">Product1</option>
            <option value="Product2">Product2</option>
            <option value="Product3">Product3</option>
        </select>
    </label>
</template>