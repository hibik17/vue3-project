import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const counter = defineStore("counter", () => {
  const count = ref<number>(0);

  const double = computed(() => {
    return count.value * 2;
  });

  const increment = () => {
    count.value++;
    console.log(`${count.value}回に数字が変更されました`);
  };

  const decrement = () => {
    return count.value--;
  };

  return { count, double, increment, decrement };
});
