<template>
  <!-- 新建 -->
  <transition name="tran-modal">
    <div class="modal" v-if="isModal == 1">
      <el-button class="cancel" type="danger" circle>
        <el-icon @click="Cancel"><CloseBold /></el-icon>
      </el-button>
      <p>新建</p>
      <textarea class="card" name="newCard"></textarea>
      <el-button type="success" round class="submit">提交</el-button>
    </div>
  </transition>
  <!-- 查看已存在 -->
  <transition name="tran-modal">
    <div class="modal" v-if="isModal == 2">
      <el-button class="cancel" type="danger" circle>
        <el-icon @click="Cancel"><CloseBold /></el-icon>
      </el-button>
      <p>{{ title }}</p>
      <textarea class="card" name="newCard" v-model="content"> </textarea>
      <el-button type="success" round class="submit">提交</el-button>
    </div>
  </transition>
</template>

<script setup>
import { ref, toRefs, inject, onMounted, getCurrentInstance } from "vue";
const textarea = ref("");
const props = defineProps({
  isModal: {
    default: "false",
  },
});
const title = ref("");
const content = ref("");
let { isModal } = toRefs(props);
const emit = defineEmits(["close"]);
function Cancel() {
  emit("close");
}
const cxt = getCurrentInstance();
const bus = cxt.appContext.config.globalProperties.$bus;
onMounted(() => {
  bus.on("title", (tit) => {
    // debugger;
    title.value = tit;
  });
  bus.on("content", (val) => {
    // debugger;
    content.value = val;
  });
});
</script>

<style lang="less" scoped>
.tran-modal {
  &-enter {
    &-from {
      transform: translateX(360px);
    }
    &-active {
      transition: all 1s;
    }
    &-to {
      transform: translateX(0px);
    }
  }
}
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
