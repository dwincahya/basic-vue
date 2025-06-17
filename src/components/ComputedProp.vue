<script setup lang="ts">
import { reactive, computed } from 'vue';

const author = reactive({
    name: 'John Doe',
    books: ['Vue.js Essentials', 'Advanced Vue.js', 'Vue.js for Beginners'],
})

const hasBooks = computed(() => {
    console.log(author.books);
return author.books.length > 0 ? 'Author has books' : 'No books available' 
});

const addBook = () => {
    author.books.push('New Book');
}
</script>

<template>
    <div>
        {{ hasBooks }}
        <button @click="addBook">add Book</button>
    </div>
</template>