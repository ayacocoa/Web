import { baseUrl } from "./env";
import axios from "axios";
import store from "../store/index";
import router from "../router/index";
// 判断环境

const service = axios.create({
  baseURL: baseUrl,
  timeout: 2000, // 设置了在2000毫秒内请求数据 如果没有请求成功就执行错误函数
});

// 请求拦截：每一次发请求都要做的逻辑
service.interceptors.request.use(
  (config) => {
    // 每次请求都要作的逻辑
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截：每一次响应都要做的逻辑，在响应拦截中执行
service.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  function (error) {
    // 对响应错误做点什么
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: "/login",
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          this.$message({
            message: "登录过期，请重新登录",
            duration: 1000,
            type: "success",
          });
          // 清除token
          localStorage.removeItem("token");
          store.commit("loginSuccess", null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          }, 1000);
          break;

        // 404请求不存在
        case 404:
          this.$message({
            message: "网络请求不存在",
            duration: 1500,
            type: "success",
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          this.$message({
            message: error.response.data.message,
            duration: 1500,
            type: "success",
          });
      }
      return Promise.reject(error.response);
    }
  }
);

export default service;
