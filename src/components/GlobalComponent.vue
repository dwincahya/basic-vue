<script setup lang="ts">
    const message = "This is a global component!";
</script>
<template>
  <div class="wrapper flex flex-col items-center justify-center h-screen">
    <h1 class="text-black text-2xl"> {{ message }} </h1>
  </div>
</template>