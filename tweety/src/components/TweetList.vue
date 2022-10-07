<script setup lang="ts">
// Propsの展開
import { defineProps } from "vue";
type valueArray = { id: number; description: string };
type Props = { valueArray: valueArray[] };
defineProps<Props>();

// deleteTodoの展開
const deleteTodo = (num: number) => {
  console.log("this is deleteTodo");
};
</script>

<template>
  <div>
    <div class="list_container">
      <p v-if="valueArray.length === 0">no tweets have benn added</p>
      <ul v-for="(value, index) in valueArray" :key="index">
        <li>
          <span>{{ value.description }}</span>
        </li>
        <button @click="deleteTodo(index)">Delete</button>
      </ul>
    </div>
  </div>
</template>

<style></style>
