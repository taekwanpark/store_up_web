import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import { createPinia } from "pinia";
import { defaultConfig, plugin } from "@formkit/vue";
import "./styles.css";
import { generateClasses } from "@formkit/themes";
import formkitTheme from "@/libs/formkitTheme";
import { useQuery } from "@/libs/axios";

const app = createApp(App);
const pinia = createPinia();

app.provide("useQuery", useQuery);
app
  .use(router)
  .use(pinia)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses(formkitTheme),
      },
    })
  );
await router.isReady();
app.mount("#app");
