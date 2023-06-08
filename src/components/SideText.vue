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
      <p class="new">{{ Olddata.data[index].title }}</p>
      <textarea
        class="card"
        name="newCard"
        disabled
        v-model="Olddata.data[index].message"
      >
      </textarea>

      <div class="author">--{{ Olddata.data[index].name }}</div>

      <CommentPage :Olddata="Olddata" :index="index" />
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
import CommentPage from "./CommentPage.vue";
import myData from "../utils/myData";
import emitter from "../mitt/event";
const textarea = ref("");
let nowtime = myData();
const props = defineProps({
  isModal: {
    default: "0",
  },
});

let Olddata = reactive({});
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
// const sign = signInApi();

function Onsubmit() {
  if (Newdata.title !== "" && Newdata.message !== "") {
    if (Newdata.name == "") {
      Newdata.name = "匿名";
    }
    // sign.then((res) => {
    //   // console.log(res);
    //   Newdata.userId = res.id;
    // });
    insertWallApi(Newdata);
    alert("提交成功");
  } else {
    alert("不能为空");
  }
  // console.log(Newdata);
}

//全局总线
let index;
onMounted(() => {
  emitter.on("detail", (val) => {
    // debugger;
    index = val;
    // console.log(id);
  });
  emitter.on("cards", (val) => {
    Olddata = val;
    // console.log(Olddata);
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
  z-index: 9999;
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
  .author {
    position: absolute;
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
