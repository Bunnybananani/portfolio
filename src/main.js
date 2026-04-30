import { createApp } from "vue";
import { App, router } from "@/init";
import "@/init/styles/main.css";

createApp(App).use(router).mount("#app");
