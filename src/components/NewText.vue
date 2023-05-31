<template>
  <div class="modal" v-if="isModal">
    <el-button class="cancel" type="danger" circle>
      <el-icon @click="Cancel"><CloseBold /></el-icon>
    </el-button>
    <p>{{ title }}</p>
    <textarea class="card" name="newCard"></textarea>
    <el-button type="success" round class="submit">提交</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps, defineEmits, toRefs } from "vue";
const textarea = ref("");
const props = defineProps({
  title: {
    default: "标题",
  },
  isModal: {
    default: "false",
  },
});
let { isModal } = toRefs(props);
const emit = defineEmits(["close"]);
function Cancel() {
  emit("close");
}
console.log(props);
</script>

<style lang="less">
.modal {
  width: 360px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 56px;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  .cancel {
    font-size: 30px;
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .card {
    width: 95%;
    height: 300px;
    resize: none;
  }
  .submit {
    position: fixed;
    bottom: 90px;
    right: 30px;
  }
}
</style>
