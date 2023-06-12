/*
 * actions:在methods里面的方法
 * getter 在computed里面的方法
 * mutation 中间量，不应该在外面去操作它
 *
 * */

import { createStore } from "vuex"; // 引入createStore， 这里跟vue2不一样
import Cookies from "js-cookie";
// import login from "./loginstore/index";

// const store = new Vuex.Store({
//   modules: {
//     login_store: login,
//   },
// });
export default createStore({
  state: {
    // state里面定义了一些要使用的变量
    access_token: "",
    refresh_token: "",
    last_token_refresh_time: new Date("October 01, 1975 00:00:00"), // 以1975-10-01 00:00:00 为初始值
  },
  mutations: {
    // mutations里面主要是针对state里面的变量进行一些操作的函数，
    //  在登录这个场景中，分别对access token和refresh token有设置（set）、清除（clear）和获取（get）3个操作，一共6个
    // 额外还有一个更新access token的函数
    // access token 和 refresh token 我们是存储在cookie中，这个很简单，看代码就能理解了，想要深入了解的需要自行搜索
    setAccessToken(state, val) {
      state.access_token = val;
      Cookies.set("access_token", val);
    },
    clearAccessToken(state) {
      state.access_token = "";
      Cookies.remove("access_token");
    },
    getAccessToken(state) {
      state.access_token = state.access_token || Cookies.get("access_token");
    },
    setRefreshToken(state, val) {
      state.refresh_token = val;
      Cookies.set("refresh_token", val);
    },
    clearRefreshToken(state) {
      state.refresh_token = "";
      Cookies.remove("refresh_token");
    },
    getRefreshToken(state) {
      state.refresh_token = state.refresh_token || Cookies.get("refresh_token");
    },
    updateLastRefreshTime(state) {
      state.last_token_refresh_time = new Date().getTime();
      Cookies.set("last_token_refresh_time", state.last_token_refresh_time);
    },
  },
});
