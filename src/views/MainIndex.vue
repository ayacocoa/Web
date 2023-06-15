<template>
  <div :class="store.state.theme ? 'green' : 'blue'">
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
import { ref, onMounted, onBeforeUnmount } from "vue";
import emitter from "../mitt/event";
import { getUser } from "../api/index";
import store from "../store/index";
// modal 判断侧栏的状态
let modal = ref(0);

function openModel() {
  modal.value = 1;
}
function closeModal() {
  modal.value = 0;
}
onMounted(() => {
  emitter.on("detail", () => {
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
  emitter.off("detail");
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
