<template>
  <div :class="store.state.theme ? 'green' : 'blue'" class="login">
    <el-form
      :model="formData"
      status-icon
      class="login-container"
      ref="formRef"
    >
      <div class="pic">
        <!-- <img src="login2.jpg" alt="" /> -->
      </div>
      <div class="content">
        <h3 class="login-title">注册</h3>
        <el-form-item label="用户名" prop="username" label-width="80px">
          <el-input
            type="input"
            auto-complete="off"
            placeholder="请输入用户名"
            v-model="formData.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone" label-width="80px">
          <el-input
            type="input"
            auto-complete="off"
            placeholder="请输入手机号码"
            v-model="formData.phone"
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
            >返回登陆</el-button
          >
          <el-button type="primary" class="login-submit" @click="regist()"
            >注册</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
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
  phone: "",
});
// 使用异步的方式请求api
function login() {
  router.push("/login");
}
function regist() {
  registApi(formData).then((res) => {
    alert("注册成功");
    router.push("/login");
  });
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 662px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: url(login.jpg) no-repeat;

  .login-container {
    background: #eaeaea;
    height: 250px;
    border-radius: 15px;
    width: 500px;
    padding: 35px 35px 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    .pic {
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        object-position: center;
      }
    }
    .content {
      width: 350px;
    }
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
}
</style>
