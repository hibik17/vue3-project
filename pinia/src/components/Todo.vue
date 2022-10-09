<script setup lang="ts">
import { useTodoStore } from "../stores/todo";
const todo = useTodoStore();
</script>

<template>
  <div>{{ todo.data }}</div>
  <button
    @click="
      todo.addTodo({
        title: 'test',
        description: 'test description',
      })
    "
  >
    Add
  </button>
  <span style="color: red">{{ todo.numberTodo }}</span>
</template>
