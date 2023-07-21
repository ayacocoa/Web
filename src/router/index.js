import { createRouter, createWebHashHistory } from "vue-router";
// import { useStore } from "vuex"; // 引入useStore 方法
import store from "../store/index";
// const store = store(); // 该方法用于返回store 实例

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Login.vue"),
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
  {
    path: "/regist",
    name: "regist",
    component: () => import("../views/Regist.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/SearchIndex.vue"),
    props: (route) => ({ query: route.query.keyword }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 设置路由守卫，在进页面之前，判断有token，才进入页面
  if (localStorage.getItem("token")) {
    next();
  } else if (to.path != "/login") {
    if (to.path == "/regist") {
      next();
    } else {
      // 没有token就调用后端接口，跳转地址
      console.log("未登录");
      next("login");
    }
  } else {
    next();
  }
});
export default router;
