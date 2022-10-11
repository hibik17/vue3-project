import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const counter = defineStore("counter", () => {
  const count = ref<number>(0);

  const double = computed(() => {
    return count.value * 2;
  });

  const increment = () => {
    return count.value++;
  };

  const decrement = () => {
    return count.value--;
  };

  return { count, double, increment, decrement };
});
