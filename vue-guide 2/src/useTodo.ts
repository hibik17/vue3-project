import { ref } from "vue";

type Todo = {
  id: number;
  title: string;
};

const defaultTodos = [
  { id: 1, title: "first" },
  { id: 2, title: "second" },
];

// export const todos = ref<Todo[]>(defaultTodos);

// export const addTodo = (title: string) => {
//   const newData: Todo = {
//     id: Math.random(),
//     title,
//   };
//   todos.value.push(newData);
// };

export const todos = (() => {
  // データの宣言
  const todos = ref<Todo[]>(defaultTodos);

  // データに追加をする関数の宣言
  const addTodo = (title: string) => {
    const newData: Todo = {
      id: Math.random(),
      title,
    };
    todos.value.push(newData);
  };

  return { todos, addTodo };
})();
