<template>
  <div class="button">
    <button class="left" @click="prevclick">
      <el-icon><ArrowLeft /></el-icon>
    </button>
    <button class="right" @click="nextclick">
      <el-icon><ArrowRight /></el-icon>
    </button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
let currentPage = 1;
const cxt = getCurrentInstance(); //相当于Vue2中的this
const bus = cxt.appContext.config.globalProperties.$bus;
bus.emit("currentPage", currentPage);
function prevclick() {
  if (currentPage > 1) {
    currentPage--;
    bus.emit("currentPage", currentPage);
  } else {
    alert("当前为第一页");
  }
}
function nextclick() {
  if (currentPage < 2) {
    currentPage++;
    bus.emit("currentPage", currentPage);
  } else {
    alert("当前为最后一页");
  }
}
</script>

<style lang="less" scoped>
.button {
  display: flex;
  justify-content: space-around;
  margin: 20px;
  .left {
    height: 50px;
    font-size: 50px;
    border-radius: 50px;
    background: linear-gradient(to left, white, skyblue);
  }
  .right {
    height: 50px;
    font-size: 50px;
    border-radius: 50px;
    background: linear-gradient(to right, white, skyblue);
  }
}
</style>
