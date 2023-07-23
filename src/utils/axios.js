import { baseUrl } from "./env";
import axios from "axios";
import store from "../store/index";
import router from "../router/index";
// 判断环境

const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000, // 设置了在2000毫秒内请求数据 如果没有请求成功就执行错误函数
});

// 请求拦截：每一次发请求都要做的逻辑
service.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    // 每次请求都要作的逻辑
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截：每一次响应都要做的逻辑，在响应拦截中执行
service.interceptors.response.use(
  function (res) {
    return res ? res.data : res;
  },
  (err) => {
    console.log(err);
    if (err.response.status == "401") {
      console.log("请先登录");
      router.push("./login");
    }
  }
);

export default service;
