<script setup lang="ts">
import { provide } from "vue";
import { books, bookKey } from "./stores/books";
import Form from "./components/Form.vue";
import BooksTable from "./components/BooksTable.vue";
provide(bookKey, books);
</script>

<template>
  <div class="min-h-screen flex justify-center mx-5">
    <div class="grid grid-cols-3 gap-2 row w-full">
      <div class="bg-red-300 w-full col-span-1 flex justify-center">
        <Form />
      </div>
      <div class="bg-sky-300 w-full col-span-2">
        <BooksTable class="m-10" />
      </div>
    </div>
  </div>
</template>
