import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import { createPinia } from "pinia";
import { defaultConfig, plugin } from "@formkit/vue";
import "./styles.css";
import { generateClasses } from "@formkit/themes";
import formkitTheme from "@/libs/formkitTheme";
import axiosData from "@/libs/axiosData";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.axios = axiosData;
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
