<template>
  <div class="content" :class="store.state.theme ? 'green' : 'blue'">
    <p class="note">诗与远方</p>
    <p class="author">--coco</p>
  </div>
</template>

<script setup>
import store from "../store";
// const item = ref("");
</script>

<style scoped lang="less">
.content {
  height: 200px;
  display: flex;
  flex-flow: column;
  justify-content: center;

  .note {
    font-size: 60px;
    font-family: 方正舒体;
    display: flex;
    justify-content: center;
  }
  .author {
    height: 20px;
    font-size: 20px;
    display: flex;
    justify-content: right;
  }
}
</style>
