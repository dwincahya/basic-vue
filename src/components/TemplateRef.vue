<script setup lang="ts">
import { ref, reactive, useTemplateRef } from "vue";

const notes = reactive([])
const note = ref("")
const noteInput = useTemplateRef("noteInput");
const NoteList = useTemplateRef("noteList");

function addNote() {
  notes.push(note.value);
  note.value = ("");
  noteInput.value.focus();
  if (NoteList.value) {
    NoteList.value.forEach((li) => {
        console.info(li.textContent);
    });
  }
}
</script>

<template>
    <h1>Template Ref dengan Note</h1>
    <div>
        <input ref="noteInput" type="text" v-model="note" placeholder="Add a note" />
        <button @click="addNote">Add Note</button>
    </div>
    <h1>Isi Note</h1>
    <ul>
        <li v-for="note in notes" ref="notesList"> {{ note }}</li>
    </ul>
</template>