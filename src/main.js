import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "highlight.js/styles/tokyo-night-dark.css";
import Highlight from "@/directives/highlight";

createApp(App).use(router).use(Highlight).mount("#app");
