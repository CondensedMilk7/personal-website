import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Highlight from "@/directives/highlight";

createApp(App).use(router).use(Highlight).mount("#app");
