<script setup lang="ts">
import { ref, reactive } from "vue";

const items = ref([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]);

const author = reactive({
  name: "John Doe",
  books: [
    { title: "Book 1", year: 2020 },
    { title: "Book 2", year: 2021 },
    { title: "Book 3", year: 2022 },
  ],
});
</script>

<template>
  <div class="wrapper flex flex-col items-center justify-center h-screen">
    <h1 class="text-black text-2xl">List Rendering Example</h1>
    <ul>
      <li class="text-black text-2xl" v-for="(item, index) in items" :key="`item-${index}`">
        {{ item.name }} - {{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="(data, key, index) in author" :key="key">{{ index }}. {{ key }} - {{ data }}</li>
    </ul>
    <ol>
      <li v-for="(item, index) in 10" :key="index">{{ item }} - Dwi Nur Cahya</li>
    </ol>
  </div>
  <template v-for="(book, index) in author.books" :key="`book-${index}`">
    <div class="text-black text-2xl" v-if="book.year >= 2021">
      {{ book.title }} - {{ book.year }}
    </div>
  </template>
</template>
