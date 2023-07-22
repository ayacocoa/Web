<template>
  <div :class="store.state.theme ? 'green' : 'blue'" class="login">
    <el-form
      :model="formData"
      status-icon
      class="login-container"
      ref="formRef"
    >
      <div class="pic">
        <img src="login2.jpg" alt="" />
      </div>
      <div class="content">
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
          <Vcode :show="isShow" @success="onSuccess" @close="onClose" />
          <el-button type="primary" class="login-submit" @click="regist()"
            >注册</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { getCurrentInstance, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessageBox } from "element-plus"; //这是用来在账号密码错误时弹窗提示的
import store from "../store/index.js"; //这里引入vuex，暂时先忽略，后面会介绍
import { loginApi, registApi } from "../api/index";
import Vcode from "vue3-puzzle-vcode";

const router = useRouter();
//验证功能
const isShow = ref(false);
const onShow = () => {
  isShow.value = true;
};
const onClose = () => {
  isShow.value = false;
};
const onSuccess = () => {
  onClose(); // 验证成功，需要手动关闭模态框
  router.push({
    // 跳转到主页面，
    name: "message",
  });
};

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
      onShow();
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
  router.push({
    name: "regist",
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
  // background: url(public\login2.jpg) no-repeat;

  .login-container {
    background: #eaeaea;
    height: 200px;
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
