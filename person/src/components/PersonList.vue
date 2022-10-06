<script setup lang="ts">
import { defineProps } from "vue";
import { person } from "./type/Person.vue";

interface Props {
  people: Array<person>;
}

defineProps<Props>();
</script>

<template>
  <div>
    <ul v-for="data in people">
      <li>{{ data.name }}</li>
      <li>{{ data.age }}</li>
    </ul>
  </div>
</template>

<style></style>
