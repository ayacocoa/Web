<template>
  <el-row>
    <el-col>
      <el-card
        :body-style="{ padding: '0px' }"
        class="card"
        @click="DetailCard"
      >
        <div class="header">
          <div class="time">{{ currentDate }}</div>
          <div class="id">{{ id }}</div>
        </div>
        <div class="content">
          这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
          这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
          这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
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

// const currentDate = ref(new Date());
const currentDate = "2023.01.01";
const id = "coco";
const emit = defineEmits(["detail"]);
function DetailCard() {
  emit("detail");
}
</script>

<style lang="less" scoped>
.card {
  border-radius: 20px;
  background: linear-gradient(to bottom, skyblue, white);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
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
  }

  .button {
    padding: 0;
    min-height: auto;
  }
}
</style>
