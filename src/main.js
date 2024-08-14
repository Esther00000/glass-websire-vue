import { createApp } from "vue";
import "@/assets/all.scss";
import App from "./App.vue";
import router from "@/router/router";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const app = createApp(App);
app.use(router);
app.mount("#app");
