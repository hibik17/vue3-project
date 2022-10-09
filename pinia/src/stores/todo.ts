import { computed, reactive } from "vue";
import { defineStore } from "pinia";

type todoType = {
  title: string;
  description: string;
};
export const useTodoStore = defineStore("todo", () => {
  const data: Array<todoType> = reactive<Array<todoType>>([
    {
      title: "test",
      description: "test description",
    },
    {
      title: "test",
      description: "test description",
    },
  ]);

  const addTodo = (todo: todoType) => {
    const newTodo = {
      title: todo.title,
      description: todo.description,
    };

    data.push(newTodo);
    console.log("you have completed add todo action...");
  };

  const deleteTodo = (index: number) => {
    data.splice(index, 1);
    console.log("you have completed delete todo action");
  };

  const numberTodo = computed(() => {
    if (data.length > 3) {
      return "todoが多すぎます";
    } else {
      return "まだtodoを追加できます";
    }
  });

  return {
    data,
    addTodo,
    deleteTodo,
    numberTodo,
  };
});
