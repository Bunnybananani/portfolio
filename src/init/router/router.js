import { createRouter, createWebHashHistory } from "vue-router";
import { Main, Gallery } from "@/pages";

export const router = createRouter({
  history: createWebHashHistory("/portfolio/"),
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
