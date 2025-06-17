<script setup lang="ts">
import { ref } from 'vue';
const urlhref = '/';

const url = {
    attr: 'href',
    link: '/about',
}

const count = ref(0);
const increment = () => {
    count.value++;
};
</script>
<template>
    <a :[url.attr]="url.link">about</a>
    <a :href="urlhref"><h1>about</h1></a>
    <button class="bg-blue-500 text-white rounded-2xl text-2xl p-4" @click="increment">Count is: {{ count }}</button>
</template>