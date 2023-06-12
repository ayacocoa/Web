import axios from "axios";

export default {
  // 登录
  LoginAsync({ commit, state }, opt) {
    if (!opt.username) {
      opt.username = state.loginInfo.username;
    }
    if (!opt.password) {
      opt.password = state.loginInfo.password;
    }
    if (!opt.username || !opt.password) {
      alert("账号密码不可以为空！");
      return;
    }

    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3000/info", {
          params: { name: opt.username, password: opt.password },
        })
        .then(function (response) {
          resolve(response.data);
          localStorage.setItem("token", response.data[0].id);
          commit("UPDATEUSER", response.data[0]);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
};
