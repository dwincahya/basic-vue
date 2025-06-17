<script setup lang="ts">
import { ref } from 'vue';

const ShowComponent = ref(false);

</script>

<template>
    <div class="conditional-rendering">
        <button class="bg-blue-600 text-white p-2 rounded-2xl" @click="ShowComponent = !ShowComponent">
        Show Component
        </button>
        <div v-if="ShowComponent">
        <h2>Conditional Component</h2>
        <p>This component is conditionally rendered based on the button click.</p>
        </div>
    </div>
</template>