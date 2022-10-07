<script setup lang="ts">
import { person } from "./type/Person.vue";

interface Props {
  people: Array<person>;
}

defineProps<Props>();

const emit = defineEmits(["deletePerson"]);
const deletePerson = (index: number) => {
  emit("deletePerson", index);
};
</script>

<template>
  <div>
    <ul v-for="(data, index) in people" :key="index">
      <li>{{ data.name }}</li>
      <li>{{ data.age }}</li>
      <li>
        <button @click.prevent="deletePerson(index)">delete</button>
      </li>
    </ul>
  </div>
</template>

<style></style>
