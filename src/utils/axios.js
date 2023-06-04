import { baseUrl } from "./env";
import axios from "axios";

// 判断环境

const service = axios.create({
  baseURL: baseUrl,
  timeout: 1000, // 设置了在1000毫秒内请求数据 如果没有请求成功就执行错误函数
});

// 请求拦截：每一次发请求都要做的逻辑
service.interceptors.request.use(
  (req) => {
    // 每次请求都要作的逻辑
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截：每一次响应都要做的逻辑，在响应拦截中执行
service.interceptors.response.use(
  function (res) {
    // 每次响应都要做的逻辑
    // 统一打印数据
    // console.group("本次请求地址是：" + res.config.url);
    // console.log(res);
    // console.groupEnd();
    return res;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default service;
