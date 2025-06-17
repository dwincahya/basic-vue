<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
    name: "",
    email: "",
    age: 0,
    type: "Regular",
    complain: false,
    message: "",
})

</script>

<template>
    <form>
        <div class="flex flex-col items-center justify-center h-screen">
            <label for="name">Name:
                <input type="text" id="name" v-model="form.name" class="border p-2 rounded" />
            </label>
        </div>
        <div>
            <label for="email">Email:
                <input type="email" id="email" v-model="form.email" class="border p-2 rounded" />
            </label>
        </div>
        <div>
            <label for="age">Age:
                <input type="number" id="age" v-model.number="form.age" class="border p-2 rounded" />
            </label>
        </div>
        <div>
            <label for="type">Type:
                <select id="type" v-model="form.type" class="border p-2 rounded">
                    <option value="Regular">Regular</option>
                    <option value="VIP">VIP</option>
                </select>
            </label>
        </div>
        <div>
            <label for="complain">Complain:
                <input type="checkbox" id="complain" v-model="form.complain" />
            </label>
        </div>
        <div>
            <label for="message">Message:
                <textarea id="message" v-model="form.message" class="border p-2 rounded"></textarea>
            </label>
        </div>
    </form>

    <h1 class="text-3xl">Preview</h1>
    <div>
        <p>Name: {{ form.name }}</p>
        <p>Email: {{ form.email }}</p>
        <p>Age: {{ form.age }}</p>
        <p>Type: {{ form.type }}</p>
        <p>Complain: {{ form.complain }}</p>
        <p>Message: {{ form.message }}</p>
    </div>
</template>