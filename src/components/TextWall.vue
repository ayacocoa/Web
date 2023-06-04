<template>
  <div class="text-wall">
    <text-box />
    <el-pagination
      background
      layout="prev, pager, next"
      :total="40"
      class="page"
    />
  </div>
</template>

<script setup>
import TextBox from "./TextBox.vue";
</script>

<style scoped lang="less">
.text-wall {
  .page {
    display: flex;
    justify-content: center;
  }
}
</style>
