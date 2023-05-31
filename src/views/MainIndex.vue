<template>
  <div>
    <TopBar />
    <Carousel />
    <TextWall />
    <NewText @close="closeModal" :isModal="modal" title="lalala" />
    <el-button class="add" type="success" circle @click="openModel">
      <el-icon><Plus /></el-icon>
    </el-button>
  </div>
</template>

<script setup>
import TopBar from "../components/TopBar.vue";
import Carousel from "../components/Carousel.vue";
import TextWall from "../components/TextWall.vue";
import NewText from "../components/NewText.vue";
import { ref, watch } from "vue";
let modal = ref(false);
function openModel() {
  modal.value = true;
}
function closeModal() {
  modal.value = false;
}
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
}
</style>
