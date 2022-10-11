import { createRouter, createWebHistory } from "vue-router";
import Counter from "../views/Counter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Counter,
    },
  ],
});

export default router;
