import { createRouter, createWebHashHistory } from "vue-router";
// import { useStore } from "vuex"; // 引入useStore 方法
import store from "../store/index";
// const store = store(); // 该方法用于返回store 实例

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

// router.beforeEach((to, from, next) => {
//   // 设置路由守卫，在进页面之前，判断有token，才进入页面
//   if (store.state.token) {
//     store.commit("setToken", localStorage.getItem("token"));
//     next("/");
//   } else {
//     // 没有token就调用后端接口，跳转地址
//     next();
//   }
// });
export default router;
