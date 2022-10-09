<script setup lang="ts">
import { useCounterStore } from "./stores/counter";
import Todo from "./components/Todo.vue";
const counter = useCounterStore();
</script>

<template>
  <div>{{ counter.count }}</div>
  <button @click="counter.increment()">add</button>
  <Todo />
</template>

<style></style>
