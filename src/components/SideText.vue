<template>
  <!-- 新建 -->
  <transition name="tran-modal">
    <div class="modal" v-if="isModal == 1">
      <el-button class="cancel" type="danger" circle>
        <el-icon @click="Cancel"><CloseBold /></el-icon>
      </el-button>
      <p class="new">新建</p>
      <input
        type="text"
        class="input"
        placeholder="标题"
        v-model="Newdata.title"
      />
      <textarea
        class="card"
        name="newCard"
        v-model="Newdata.message"
      ></textarea>
      <input
        type="text"
        class="input"
        placeholder="您的昵称"
        v-model="Newdata.name"
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
      <p class="new">{{ Olddata.title }}</p>
      <textarea class="card" name="newCard" v-model="Olddata.message">
      </textarea>
    </div>
  </transition>
</template>

<script setup>
import {
  ref,
  toRefs,
  inject,
  onMounted,
  getCurrentInstance,
  reactive,
} from "vue";
import { signInApi, insertWallApi } from "../api/index";
import myData from "../utils/myData";
const textarea = ref("");
let nowtime = myData();
const props = defineProps({
  isModal: {
    default: "false",
  },
});
const Olddata = reactive({
  title: "",
  message: "",
  name: "",
  userId: "",
  message: "",
});
const Newdata = reactive({
  type: 0,
  message: "",
  name: "",
  userId: "",
  moment: nowtime,
  title: "",
});
let { isModal } = toRefs(props);
const emit = defineEmits(["close"]);
function Cancel() {
  emit("close");
}
const sign = signInApi();

function Onsubmit() {
  if (Newdata.title !== "" && Newdata.name !== "" && Newdata.message !== "") {
    sign.then((res) => {
      console.log(res);
      Newdata.userId = res.id;
    });
    insertWallApi(Newdata);
  } else {
    alert("不能为空");
  }
  console.log(Newdata);
}

//全局总线
const cxt = getCurrentInstance();
const bus = cxt.appContext.config.globalProperties.$bus;
onMounted(() => {
  bus.on("title", (tit) => {
    // debugger;
    Olddata.title = tit;
  });
  bus.on("message", (val) => {
    // debugger;
    Olddata.message = val;
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
