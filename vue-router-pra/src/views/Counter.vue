<script setup lang="ts">
import { counter } from "../stores/counter";

const { count, double, increment, decrement } = counter();
</script>

<template>
  <div>{{ `${count}回buttonを押しました` }}</div>
</template>

<style></style>
