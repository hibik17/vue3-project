<script setup lang="ts">
import { reactive } from "vue";
import PostForm from "./components/PostForm.vue";
import PersonList from "./components/PersonList.vue";
import { person } from "./components/type/person.vue";

const people = reactive<Array<person>>([
  { name: "John", age: 21 },
  { name: "Doe", age: 30 },
]);
</script>

<template>
  <div class="container">this is vue</div>
  <PostForm />
  <PersonList :people="people" />
</template>

<style>
.container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
</style>
