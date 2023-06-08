<template>
  <div class="comment">
    <div v-for="(item, index) in data" :key="index" class="oneComment">
      <div class="row">
        <div class="pic">
          <el-avatar :size="25" />
        </div>
        <div>
          <textarea class="text" disabled v-model="item.comment"> </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { findCommentPage } from "../api/index";
import { ref, onMounted } from "vue";
import emitter from "../mitt/event";
const props = defineProps({
  id: Number,
});
emitter.on("currentPage", (val) => {
  target.page = val;
});
let target = {
  page: 1,
  pagesize: 9,
  id: props.id,
};
let data = ref("");
onMounted(() => {
  findCommentPage(target).then((val) => {
    if (val.data.message != "") {
      data.value = val.data.message;
    } else {
      data.value = [
        {
          comment: "暂无评论",
        },
      ];
    }
  });
});
</script>

<style lang="less" scoped>
.comment {
  background-color: rgba(120, 255, 255, 0.5);
  max-height: 150px;
  margin-top: 40px;
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
  .row {
    display: flex;
  }
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
    width: 260px;
    height: 80px;
    margin-top: 10px;
    padding: 10px;
    font-size: 30px;
  }
}
</style>
