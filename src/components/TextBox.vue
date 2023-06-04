<template>
  <el-row>
    <el-col>
      <el-card
        :body-style="{ padding: '0px' }"
        class="card"
        v-for="(item, index) in cards.data"
        :key="index"
      >
        <div class="header">
          <div class="time">{{ item.moment }}</div>
          <div class="id">{{ item.title }}</div>
        </div>
        <div class="content" @click="DetailCard(index)">{{ item.message }}</div>

        <div class="bottom">
          <el-button text class="button">
            <el-icon><Star style="color: blue" /></el-icon>
          </el-button>
          <el-button text class="button">
            <el-icon><WarnTriangleFilled /></el-icon>
          </el-button>
          <el-button text class="button">
            <el-icon><Comment /></el-icon>
          </el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from "vue";
import { getCurrentInstance, onBeforeMount } from "vue";
import { findWall } from "../api/index";
const cxt = getCurrentInstance(); //相当于Vue2中的this
const bus = cxt.appContext.config.globalProperties.$bus;

// const currentDate = ref(new Date());

const emit = defineEmits(["detail"]);
function DetailCard(index) {
  let id = index;
  bus.emit("detail", id);
  bus.emit("cards", cards);
}
const data = {
  type: 0,
};
let cards = reactive({
  data: [],
});

const find = findWall(data);
onMounted(() => {
  find.then(async (res) => {
    // cards.data = cards.data.concat(res.data.message);
    cards.data = [...res.data.message];
    // console.log(cards);
  });
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
  position: relative;
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
    height: 150px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .bottom {
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    margin-left: 12px;
  }

  .button {
    font-size: 20px;
    padding: 0;
    min-height: auto;
    margin-left: 5px;
    margin-right: 130px;
  }
}
</style>
