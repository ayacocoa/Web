<template>
  <div class="bottom-statement" :class="store.state.theme ? 'green' : 'blue'">
    <div class="logo">
      <img src="coffee.png" alt="" />
    </div>
    <div class="join">邮箱: hduly2023@outlook.com</div>
    <div class="two-code">
      <img src="coffee.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import store from "../store";
</script>

<style lang="less" scoped>
.bottom-statement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
}
</style>
