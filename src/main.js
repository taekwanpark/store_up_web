import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import { createPinia } from "pinia";
import { defaultConfig, plugin } from "@formkit/vue";
import "./styles.css";
import { generateClasses } from "@formkit/themes";
import formkitTailwndcss from "./libs/formkitTailwndcss";

const app = createApp(App);
const pinia = createPinia();

app
  .use(router)
  .use(pinia)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses(formkitTailwndcss),
      },
    })
  );
await router.isReady();
app.mount("#app");
