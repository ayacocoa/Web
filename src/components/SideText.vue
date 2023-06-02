<template>
  <!-- 新建 -->
  <transition name="tran-modal">
    <div class="modal" v-if="isModal == 1">
      <el-button class="cancel" type="danger" circle>
        <el-icon @click="Cancel"><CloseBold /></el-icon>
      </el-button>
      <p class="new">新建</p>
      <textarea
        class="card"
        name="newCard"
        v-model="data.newcontent"
      ></textarea>
      <input
        type="text"
        class="input"
        placeholder="您的昵称"
        v-model="data.name"
      />
      <el-button type="success" round class="submit" @click="Onsubmit"
        >提交
      </el-button>
    </div>
  </transition>
  <!-- 查看已存在 -->
  <transition name="tran-modal">
    <div class="modal" v-if="isModal == 2">
      <el-button class="cancel" type="danger" circle>
        <el-icon @click="Cancel"><CloseBold /></el-icon>
      </el-button>
      <p class="new">{{ title }}</p>
      <textarea class="card" name="newCard" v-model="data.content"> </textarea>
    </div>
  </transition>
</template>

<script setup>
import { ref, toRefs, inject, onMounted, getCurrentInstance } from "vue";
import { signInApi } from "../api/index";
const textarea = ref("");
const props = defineProps({
  isModal: {
    default: "false",
  },
});
const data = {
  title: "",
  content: "",
  name: "",
  newcontent: "",
};
let { isModal } = toRefs(props);
const emit = defineEmits(["close"]);
function Cancel() {
  emit("close");
}
function Onsubmit() {
  signInApi().then((res) => {
    console.log(res);
  });
}

//全局总线
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
  .new {
    margin-left: 10px;
    color: blue;
  }
  .card {
    width: 85%;
    height: 280px;
    resize: none;
    border-radius: 20px;
    background: linear-gradient(to bottom, skyblue, white);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    margin: 10px;
    padding: 12px;
    font-size: 22px;
  }
  .input {
    height: 30px;
    border-radius: 20px;
    background: linear-gradient(to bottom, skyblue, white);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    margin-left: 10px;
    text-align: center;
  }
  .submit {
    position: fixed;
    bottom: 90px;
    right: 30px;
  }
}
</style>
