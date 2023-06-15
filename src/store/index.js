import { createStore } from "vuex";
import { encrypt } from "../utils/encrypt";
// 用Vuex.Store对象用来记录token
const store = createStore({
  state: {
    token: "", // 存储token
    user: [], // 用户信息
    theme: false,
  },
  getters: {
    getToken(state) {
      return state.token || localStorage.getItem("token") || "";
    },
  },
  mutations: {
    // 修改token，并将token存入localStorage
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
      console.log("store、localstorage保存token成功!");
    },
    delToken(state) {
      state.token = "";
      localStorage.removeItem("token");
    },
    // 拿到用户信息
    getUser(state, user) {
      state.user = user;
      localStorage.setItem("user", encrypt(JSON.stringify(user)));
      console.log(user);
    },
    changeTheme(state, theme) {
      state.theme = !state.theme;
    },
  },

  actions: {
    // removeToken: (context) => {
    // context.commit('setToken')
    // }
  },
});
export default store;
