import { baseUrl } from "./env";
import axios from "axios";

const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
});

//添加请求拦截器
service.interceptors.request.use(
  //在发请求前
  (config) => {
    return config;
  },
  //请求错误
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

//添加响应拦截器
service.interceptors.response.use(
  //对响应数据处理
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      Promise.reject();
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);
export default service;
