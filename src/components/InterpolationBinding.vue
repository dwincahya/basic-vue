<script setup lang="ts">
const bodyMessage = '<h1 class="text-green-600 text-2xl">Interpolation</h1>';
const MessageAttr = {
    id: 1,
    class: 'message',
};
</script>
<template>
    <div v-bind="MessageAttr">{{ bodyMessage }}</div>
    <div v-html="bodyMessage"></div>
</template>