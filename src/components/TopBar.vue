<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">
      <img src="/coffee.png" alt="" style="width: 50px; height: 50px" />
    </el-menu-item>

    <router-link to="message"
      ><el-menu-item index="1">
        <el-button type="primary" plain round>留言墙</el-button>
      </el-menu-item></router-link
    >

    <router-link to="photo"
      ><el-menu-item index="2">
        <el-button type="primary" plain round>照片墙</el-button>
      </el-menu-item></router-link
    >
    <el-sub-menu index="3">
      <template #title>
        <div class="avatar">
          <el-avatar size="small" :src="img" />
        </div>
      </template>
      <el-menu-item index="3-1">个人信息</el-menu-item>
      <el-menu-item index="3-2">修改信息</el-menu-item>
      <el-menu-item index="3-3">我发布的</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import store from "../store";
import { decode } from "../utils/encrypt";
let img = decode(localStorage.getItem("user"))[0].imgurl;
</script>

<style lang="less">
.el-menu-demo {
  background: linear-gradient(to bottom, aqua, white);
  display: flex;
  justify-content: space-between;
  .avatar {
    display: flex;
    justify-content: center;
  }
}
.flex-grow {
  flex-grow: 0.35;
}
.flexg {
  flex-grow: 0.2;
}
.el-menu-demo {
  position: sticky;
  top: 0;
  z-index: 100;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
