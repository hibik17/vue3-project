<script setup lang="ts">
import { reactive } from "vue";
import PostForm from "./components/PostForm.vue";
import PersonList from "./components/PersonList.vue";
import { person } from "./components/type/person.vue";

const people = reactive<Array<person>>([
  { name: "John", age: 21 },
  { name: "Doe", age: 30 },
]);

const postForm = (postData: person) => {
  people.push(postData);
  console.log("post action done...");
};

const deletePerson = (index: number) => {
  people.splice(index, 1);
  console.log(`you have deleted index of ${index}`);
};
</script>

<template>
  <div class="container">this is vue</div>
  <PostForm @postForm="postForm" />
  <PersonList :people="people" @deletePerson="deletePerson" />
</template>

<style>
.container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
</style>
