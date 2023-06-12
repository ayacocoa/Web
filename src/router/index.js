import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";

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
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   store.commit("getAccessToken");
//   const token = store.state.access_token;
//   if (!token && to.name !== "login") {
//     next({ name: "login" });
//   } else if (token && to.name === "login") {
//     next({ name: "message" });
//   } else next();
// });

export default router;
