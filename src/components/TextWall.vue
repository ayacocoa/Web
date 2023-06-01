<template>
  <div class="text-wall">
    <div v-for="(item, index) in 4" :key="index">
      <one-text-wall />
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="40"
      class="page"
    />
  </div>
</template>

<script setup>
import OneTextWall from "./OneTextWall.vue";
</script>

<style scoped lang="less">
.text-wall {
  .page {
    display: flex;
    justify-content: center;
  }
}
</style>
