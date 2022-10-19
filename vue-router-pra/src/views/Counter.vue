<script setup lang="ts">
import { ref, watch } from "vue";
import { counter } from "../stores/counter";

const { count, double, increment, decrement } = counter();
</script>

<template>
  <div class="content">
    {{ count }}
    <button @click="increment" class="addButton">add</button>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
}

.addButton {
  width: 50px;
  color: white;
  background-color: lime;
  border: none;
  border-radius: 5px;
  margin: 10px auto;
}
</style>
