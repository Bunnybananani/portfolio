import { createRouter, createWebHistory } from "vue-router";

import { Main, Gallery } from "@/pages";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/gallery",
      component: Gallery,
    },
  ],
});
