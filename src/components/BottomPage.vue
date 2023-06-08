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
import emitter from "../mitt/event";
let currentPage = 1;
emitter.emit("currentPage", currentPage);
function prevclick() {
  if (currentPage > 1) {
    currentPage--;
    emitter.emit("currentPage", currentPage);
  } else {
    alert("当前为第一页");
  }
}
function nextclick() {
  if (currentPage < 2) {
    currentPage++;
    emitter.emit("currentPage", currentPage);
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
