<template>
  <div class="comment">
    <div class="pic">
      <el-avatar :size="50" :src="circleUrl" />
    </div>
    <div>
      <textarea class="text"></textarea>
    </div>
  </div>
  <div class="addcomment">
    <input type="text" />
    <button type="submit">submit</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.comment {
  background-color: rgba(120, 255, 255, 0.5);
  margin-top: 40px;
  display: flex;
  height: 150px;
  .pic {
    margin-right: 20px;
  }
  .text {
    border-radius: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    resize: none;
  }
}
.addcomment {
  display: flex;
  justify-content: space-around;

  height: 30px;
  width: 300px;
  margin: 20px;
  input {
    border-radius: 20px;
  }
}
</style>
