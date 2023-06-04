<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">
      <img src="/coffee.png" alt="" style="width: 50px; height: 50px" />
    </el-menu-item>
    <div class="flex-grow" />
    <router-link to="message"
      ><el-menu-item index="1">
        <el-button type="primary" plain round>留言墙</el-button>
      </el-menu-item></router-link
    >
    <div class="flexg" />
    <router-link to="photo"
      ><el-menu-item index="2">
        <el-button type="primary" plain round>照片墙</el-button>
      </el-menu-item></router-link
    >
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
</script>

<style>
.el-menu-demo {
  background: linear-gradient(to bottom, aqua, white);
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
