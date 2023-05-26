<template>
  <el-row class="row-bg" justify="center">
    <el-col :span="5">
      <photo-box />
    </el-col>
    <el-col :span="5"> <photo-box /></el-col>
    <el-col :span="5"> <photo-box /></el-col>
    <el-col :span="5"> <photo-box /></el-col>
  </el-row>
</template>
<script setup>
import PhotoBox from "./PhotoBox.vue";
</script>
<style>
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  margin: 20px;
  border-radius: 40px;
  text-align: center;
}
</style>
