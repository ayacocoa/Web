<template>
  <OldComment :id="data.wallId" />
  <div class="addcomment">
    <input type="text" v-model="data.comment" />
    <el-button type="success" round class="submit" @click="Onsubmit"
      >提交
    </el-button>
  </div>
</template>

<script setup>
import { insertComment } from "../../src/api/index";
import OldComment from "./OldComment.vue";
import myData from "../utils/myData";
import emitter from "../mitt/event";
import { ref, onBeforeMount, onMounted, reactive } from "vue";
const props = defineProps({
  Olddata: Object,
  index: Number,
});
let dataArr = props.Olddata.data;
let index = props.index;
const data = reactive({
  wallId: dataArr[index].id,
  userId: "coco",
  imgurl: dataArr[index].imgurl,
  moment: myData(),
  comment: "",
  name: dataArr[index].name,
});
function Onsubmit() {
  if (data.comment) {
    insertComment(data);
  } else {
    alert("不能为空");
  }
}
</script>

<style lang="less" scoped>
.addcomment {
  display: flex;
  justify-content: space-around;

  height: 30px;
  width: 300px;
  margin: 20px;
  input {
    padding: 10px;
    border-radius: 20px;
  }
}
</style>
