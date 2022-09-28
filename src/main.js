import { createApp } from "vue";
import App from "./App.vue";
import "./styles.css";
import router from "@/router/router";
import { createPinia } from "pinia";

import VueFormulate from "@braid/vue-formulate";

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).use(VueFormulate.defaults);
await router.isReady();
app.mount("#app");
