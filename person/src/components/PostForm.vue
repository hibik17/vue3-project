<script setup lang="ts">
import { computed, reactive } from "vue";
import { inputData } from "./type/InputData.vue";

const postForm = () => {
  alert("name:" + postData.name + " age:" + postData.age);
};

const postData = reactive<inputData>({
  name: "",
  age: 0,
});

const nameLength = computed(() => {
  if (postData.name.length > 10) {
    return "name is too long";
  }
});
</script>

<template>
  <div class="container">
    <form>
      <div class="name">
        <label for="name">name: </label>
        <input type="text" placeholder="name filed" v-model="postData.name" />
        <div style="color: red">{{ nameLength }}</div>
      </div>
      <div class="age">
        <label for="age">age: </label>
        <input type="number" placeholder="age filed" v-model="postData.age" />
      </div>
      <button @click="postForm" class="postButton">register</button>
    </form>
  </div>
</template>

<style>
.container {
  width: 100%;
  margin-top: 30px;
}
.postButton {
  color: white;
  background-color: greenyellow;
  border-radius: 5px;
  box-shadow: 20px;
  margin: 10px 70px;
}
.age {
  margin: 20px;
}
.name {
  margin: 20px;
}
</style>
