<script setup lang="ts">
import { useBooks } from "../stores/books";

const { newBook, addBook } = useBooks();
</script>

<template>
  <form class="w-full">
    <h3>New book</h3>
    <label for="title">
      <span class="block text-sm font-medium text-slate-700">Title</span>
      <input
        type="text"
        class="border rounded-sm peer border-sky-300"
        placeholder="title"
        v-model="newBook.title"
      />
    </label>
    <label for="description">
      <span class="block text-sm font-medium text-slate-700">Description</span>
      <input
        type="text"
        class="border rounded-sm peer border-sky-300"
        placeholder="description"
        v-model="newBook.description"
      />
    </label>
    <button
      class="block mx-auto text-green-300 bg-white rounded-sm btn-sm"
      @click.prevent="addBook(newBook)"
    >
      Create
    </button>
  </form>
</template>
