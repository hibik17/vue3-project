<script setup lang="ts">
import { inject } from "vue";
import { bookKey } from "../stores/books";

const state = inject(bookKey);
if (!state) {
  throw new Error("state is undefined");
}

const { Data } = state;
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
      </tr>
    </tbody>
  </table>
</template>

<style></style>
