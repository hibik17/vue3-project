<script setup lang="ts">
import { reactive } from "vue";

type inputType = {
  id: number;
  description: string;
};

const inputValue = reactive<inputType>({
  id: Math.random(),
  description: "",
});

const buttonAction = () => {};
</script>

<template>
  <div>
    <h1>Welcome to tweety</h1>
    <input type="text" v-model="inputValue.description" />
    <button @click="buttonAction()">press</button>
  </div>
</template>

<style></style>
