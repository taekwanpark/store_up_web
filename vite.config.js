import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // server: {
    //   https: true,
    //   host: "storeup.amuz",
    // },
    // dsvServer: {
    //   proxy: {
    //     "/api": {
    //       target: "https://storeup.amuz/",
    //       changeOrigin: true,
    //     },
    //   },
    // },
    plugins: [vue()],

    define: {
      "process.env": loadEnv(mode, process.cwd(), "STORE"),
      // 'process.env.development': loadEnv( mode, process.cwd() + 'development', 'TECH' ),
      // 'process.env.production': loadEnv( mode, process.cwd(), 'TECH' ),
    },
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
