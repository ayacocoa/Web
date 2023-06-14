<template>
  <el-form :model="formData" status-icon class="login-container" ref="formRef">
    <h3 class="login-title">登录</h3>
    <el-form-item label="用户名" prop="username" label-width="80px">
      <el-input
        type="input"
        auto-complete="off"
        placeholder="请输入用户名"
        v-model="formData.username"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" label-width="80px">
      <el-input
        type="password"
        auto-complete="off"
        placeholder="请输入密码"
        v-model="formData.password"
      ></el-input>
    </el-form-item>
    <el-form-item class="login-submit">
      <!--  这里通过@click绑定login函数，用于点击的时候触发登录功能 -->
      <el-button type="primary" class="login-submit" @click="login()"
        >登录</el-button
      >
      <el-button type="primary" class="login-submit" @click="regist()"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
import { getCurrentInstance, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessageBox } from "element-plus"; //这是用来在账号密码错误时弹窗提示的
import store from "../store/index.js"; //这里引入vuex，暂时先忽略，后面会介绍
import { loginApi, registApi } from "../api/index";

const router = useRouter();
// vue3中获取表单数据需要使用reactive
const formData = reactive({
  username: "",
  password: "",
});
// 使用异步的方式请求api
function login() {
  loginApi(formData).then((res) => {
    // console.log(res);
    if (res.code == 200) {
      // 如果返回码是200表明账号密码正确，校验通过
      store.commit("setToken", res.token);
      store.commit("getUser", res.user);
      console.log(store.state.user);
      router.push({
        // 跳转到主页面，
        name: "message",
      });
    } else {
      // 如果账号密码错误的话就要进行提示，并且重新回到登录页面
      alert("账号密码错误，请重试！");
      router.push({
        name: "login",
      });
    }
  });
}
function regist() {
  registApi(formData).then((res) => {
    alert(res.message);
  });
}
</script>

<style lang="less" scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login-submit {
  margin: 10px auto 0 auto;
  justify-content: center;
}
</style>
