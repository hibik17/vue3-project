<script setup lang="ts">
import { reactive, computed } from "vue";
import { inputData } from "./type/InputData.vue";

const postData = reactive<inputData>({
  name: null,
  age: null,
});

const nameLength = computed(() => {
  if (postData.name === null) {
    return;
  } else if (postData.name!.length > 10) {
    return "name is too long. put your name under 10 words";
  }
});

// arrayに追加する処理（postForm）
const emit = defineEmits(["postForm"]);
const postForm = () => {
  emit("postForm", postData);
};
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
      <button @click.prevent="postForm" class="postButton">register</button>
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
  box-shadow: 3px;
  margin: 10px 70px;
  border-color: white;
}
.age {
  margin: 20px;
}
.name {
  margin: 20px;
}
</style>
