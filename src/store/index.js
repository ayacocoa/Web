import { createStore } from "vuex";
import { encrypt } from "../utils/encrypt";
import { searchFun } from "../api/index";
import router from "../router";
// 用Vuex.Store对象用来记录token
const store = createStore({
  state: {
    token: "", // 存储token
    user: {}, // 用户信息
    theme: false,
    search: false,
    content: {
      data: "", // 搜索栏文本
    },
    searchresult: {
      results: [],
    },
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
      localStorage.setItem("user", encrypt(JSON.stringify(user[0])));
      console.log(user);
    },
    changeTheme(state) {
      state.theme = !state.theme;
    },
    submit(state) {
      state.search = !state.search;
      if (state.content.data) {
        router.push("/search?keyword=" + state.content.data);

        // const href = router.resolve({
        //   path: "/search",
        //   query: {
        //     keyword: state.content.data,
        //   },
        // });
        // window.open(href.href, " _blank");
      } else {
        router.push("/message");
      }
    },
  },

  actions: {
    // removeToken: (context) => {
    // context.commit('setToken')
    // }
  },
});
export default store;
