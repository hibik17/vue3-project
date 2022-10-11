<script setup lang="ts">
import { counter } from "../stores/counter";

const { count, double, increment, decrement } = counter();
</script>

<template>
  <div class="content">{{ `${count}回buttonを押しました` }}</div>
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
</style>
