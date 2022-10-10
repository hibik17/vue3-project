<script setup lang="ts">
import Form from "./components/Form.vue";
import BooksTable from "./components/BooksTable.vue";
</script>

<template>
  <div class="flex justify-center min-h-screen mx-5">
    <div class="grid w-full grid-cols-3 gap-2 row">
      <div class="flex justify-center w-full col-span-1 bg-red-300">
        <Form />
      </div>
      <div class="w-full col-span-2 bg-sky-300">
        <BooksTable class="m-10" />
      </div>
    </div>
  </div>
</template>
