<script setup lang="ts">
import { ref, reactive } from 'vue';

const count = ref(0);
const increment = () => {
    count.value++;
    };

const user = reactive({
    name: 'John Doe',
    age: 30,
});
</script>
<template>
    <div class="reactivity-state">
        <p>Current Count: {{ count }}</p>
        <button class="bg-blue-600 text-white p-3 rounded-2xl" @click="increment">Count</button>
    </div>
    <div class="user-info">
        <p>User Name: {{ user.name }}</p>
        <p>User Age: {{ user.age }}</p>
        <button class="bg-blue-600 text-white p-3 rounded-2xl" @click="user.age++">Increment Age</button>
    </div>
</template>