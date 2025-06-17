<script setup lang="ts">
import {ref, watch } from 'vue';

const productId = ref("")
const product = ref(null)

watch(productId, async (newVal, oldVal) => {
    console.log("Fetching: ", newVal)
    if (newVal) {
      const response = await fetch(`/${newVal}.json`);
      product.value = await response.json();
    } else {
      product.value = null
    }
  },
  { immediate: true }
)

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