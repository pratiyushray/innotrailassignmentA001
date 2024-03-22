import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import ScreenOne from "./components/ScreenOne.vue";
import ScreenSec from "@/components/ScreenSec.vue";
import ScreenThree from "@/components/ScreenThree.vue";
import ScreenFour from "@/components/ScreenFour.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ScreenOne },
    { path: "/screen2", component: ScreenSec },
    { path: "/screen3", component: ScreenThree },
    { path: "/screen4", component: ScreenFour },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
