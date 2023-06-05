<template>
  <div>
    <TopBar />
    <Carousel />
    <TextWall />
    <SideText @close="closeModal" :isModal="modal" />
    <el-button class="add" type="success" circle @click="openModel">
      <el-icon><Plus /></el-icon>
    </el-button>
    <BottomStatement />
  </div>
</template>

<script setup>
import TopBar from "../components/TopBar.vue";
import Carousel from "../components/Carousel.vue";
import TextWall from "../components/TextWall.vue";
import SideText from "../components/SideText.vue";
import BottomStatement from "../components/BottomStatement.vue";
import { signInApi } from "../api/index";
import {
  provide,
  ref,
  watch,
  getCurrentInstance,
  onMounted,
  onBeforeUnmount,
} from "vue";
const cxt = getCurrentInstance();
const bus = cxt.appContext.config.globalProperties.$bus;
let modal = ref(0);
function openModel() {
  modal.value = 1;
}
function closeModal() {
  modal.value = 0;
}
onMounted(() => {
  bus.on("detail", () => {
    if (modal.value == 2) {
      modal.value = 0;
    } else if (modal.value == 0) {
      modal.value = 2;
    }
  });
  //获取ip
  // signInApi().then((res) => {
  //   // console.log(res);
  //   let user = {
  //     id: res.ip,
  //   };
  // });
});
onBeforeUnmount(() => {
  bus.off("detail");
});
</script>

<style lang="less" scoped>
.add {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 25px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 999;
}
</style>
