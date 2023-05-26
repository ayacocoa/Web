<template>
  <el-row class="row-bg" justify="center">
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <text-box />
    </el-col>
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple-light" />
      222</el-col
    >
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      333</el-col
    >
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      333</el-col
    >
  </el-row>
</template>
<script setup>
import TextBox from "./TextBox.vue";
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  text-align: center;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
