import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import mitt from "mitt";
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(VueAxios, axios);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
const bus = mitt();
app.config.globalProperties.$bus = bus;
app.mount("#app");
