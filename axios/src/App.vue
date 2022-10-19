<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import axios from "axios";
import { computed, onMounted, reactive } from "vue";

type todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const allTodos: Array<todos> = reactive([]);

onMounted(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => allTodos.push(res.data))
    .catch((err) => console.log(err.message))
    .finally(() => console.log("this is final"));
});
</script>

<template>
  <div>
    {{ allTodos }}
  </div>
</template>
