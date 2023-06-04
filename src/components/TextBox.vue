<template>
  <el-row>
    <el-col>
      <el-card
        :body-style="{ padding: '0px' }"
        class="card"
        v-for="(item, index) in 12"
        :key="index"
      >
        <div class="header">
          <div class="time">{{ currentDate }}</div>
          <div class="id">{{ title }}</div>
        </div>
        <div class="content" @click="DetailCard">
          {{ content }}
        </div>
        <div style="padding: 14px">
          <div class="bottom">
            <el-button text class="button">
              <el-icon><Star /></el-icon>
            </el-button>
            <el-button text class="button">
              <el-icon><WarnTriangleFilled /></el-icon>
            </el-button>
            <el-button text class="button">
              <el-icon><Comment /></el-icon>
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import { getCurrentInstance, onBeforeMount } from "vue";
import { findWall } from "../api/index";
const cxt = getCurrentInstance(); //相当于Vue2中的this
const bus = cxt.appContext.config.globalProperties.$bus;

// const currentDate = ref(new Date());
const currentDate = "2023.01.01";
const title = "coco";
const content =
  "这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容";

const emit = defineEmits(["detail"]);
function DetailCard() {
  bus.emit("detail");
  bus.emit("title", title);
  bus.emit("content", content);
}
const data = {
  id: 1,
};
const find = findWall(data);

find.then((res) => {
  console.log(res.data.message);
});
</script>

<style lang="less" scoped>
.card {
  border-radius: 20px;
  background: linear-gradient(to bottom, skyblue, white);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  float: left;
  width: 30%;
  height: 238px;
  margin: 1%;
  .header {
    display: flex;
    justify-content: space-around;
  }
  .time {
    font-size: 12px;
    color: #999;
  }
  .content {
    margin: 10px;
    text-align: left;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 2px;
  }

  .button {
    padding: 0;
    min-height: auto;
  }
}
</style>
