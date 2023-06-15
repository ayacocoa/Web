<template>
  <div class="button">
    <button
      class="left"
      @click="prevclick"
      :class="store.state.theme ? 'green' : 'blue'"
    >
      <el-icon><ArrowLeft /></el-icon>
    </button>
    <button
      class="right"
      @click="nextclick"
      :class="store.state.theme ? 'green' : 'blue'"
    >
      <el-icon><ArrowRight /></el-icon>
    </button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import emitter from "../mitt/event";
import store from "../store";
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
  }
  .right {
    height: 50px;
    font-size: 50px;
    border-radius: 50px;
  }
}
</style>
