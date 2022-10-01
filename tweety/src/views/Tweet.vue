<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
import { reactive, computed } from "vue";
import TweetPostForm from "../components/TweetPostForm.vue";

const checkLength = computed(() => {
  if (inputValue.description.length < 5) {
    return "input value is too short";
  } else {
    return "thank you for your tweet";
  }
});

interface value {
  id: number;
  description: string;
}

const inputValue = reactive<value>({
  id: 1,
  description: "",
});

const valueArray: Array<value> = reactive([
  { id: 2, description: "fdsa" },
  { id: 3, description: "fdsafds" },
]);

const buttonAction = () => {
  const newData = JSON.parse(JSON.stringify(inputValue));
  valueArray.push(newData);
  inputValue.description = "";
  return;
};

const deleteTodo = (index: number) => {
  valueArray.splice(index, 1);
  console.log("delete action done...");
};
</script>

<template>
  <container>
    <TweetPostForm />
    <span>{{ checkLength }}</span>

    <div class="list_container">
      <p v-if="valueArray.length === 0">no tweets have benn added</p>
      <ul v-for="(value, index) in valueArray" :key="index">
        <li>
          <span>{{ value.description }}</span>
        </li>
        <button @click="deleteTodo(index)">Delete</button>
      </ul>
    </div>

    <p class="text-red-300">this would be red text</p>
  </container>
</template>

<style scoped>
.text-red-300 {
  color: red;
}
.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
