<template>
  <div class="bottom-statement" :class="store.state.theme ? 'green' : 'blue'">
    <div class="startment">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;免责声明：本站内收录的所有资源均来自于互联网，其版权均归原作者及其网站所有，本站虽力求保存原有的版权信息，但由于诸多原因，可能导致无法确定其真实来源，请原作者原谅!如果您对本站教程与资源的归属存有异议，请立即通知，情况属实，我们会第一时间予以删除，并同时向您表示歉意!真诚的小眼神，绝对不是故意侵犯原作者版权的哦!如果您有优秀的作品，也会帮您扩散推荐。
    </div>
    <div class="join">邮箱: hduly2023@outlook.com</div>
  </div>
</template>

<script setup>
import store from "../store";
</script>

<style lang="less" scoped>
.bottom-statement {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  .startment {
    height: 150px;
    width: 500px;
  }
}
</style>
