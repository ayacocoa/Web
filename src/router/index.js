import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/MainIndex.vue"),
  },
  {
    path: "/message",
    name: "message",
    component: () => import("../views/MainIndex.vue"),
  },
  {
    path: "/photo",
    name: "photo",
    component: () => import("../views/PhotoMain.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
