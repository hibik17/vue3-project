<script setup lang="ts">
import { reactive } from "vue";
const postForm = () => {
  alert(postData.name);
};

interface data {
  name: string;
  age: number;
}

const postData = reactive<data>({
  name: "",
  age: 0,
});
</script>

<template>
  <div class="container">
    <form>
      <div>
        <label for="name">name: </label>
        <input type="text" placeholder="name filed" v-model="postData.name" />
      </div>
      <div>
        <label for="age">age: </label>
        <input type="text" placeholder="age filed" v-model="postData.age" />
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
}
</style>
