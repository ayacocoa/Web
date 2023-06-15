import { createApp } from "vue";
import "./style.css";
import "./theme/style.less";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import mitt from "mitt";
import VueAxios from "vue-axios";
import axios from "axios";
import store from "./store/index";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(VueAxios, axios);
app.use(store);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
