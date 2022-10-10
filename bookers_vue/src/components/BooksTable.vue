<script setup lang="ts">
import { useBooks } from "../stores/books";

const books = useBooks();
const Data = books.Data;
const deleteBook = books.deleteBook;
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>title</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody v-for="(book, index) in Data">
      <tr :key="index">
        <td>{{ book.title }}</td>
        <td>{{ book.description }}</td>
        <td>
          <button
            @click="deleteBook(index)"
            class="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
          >
            delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style></style>
