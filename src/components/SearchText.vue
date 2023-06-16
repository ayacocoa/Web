<template>
  <el-row>
    <el-col>
      <el-card
        :body-style="{ padding: '0px' }"
        class="card"
        :class="store.state.theme ? 'green' : 'blue'"
        v-for="(item, index) in cards.data"
        :key="item.id"
      >
        <div class="header">
          <div class="time">{{ item.moment }}</div>
          <div class="id">{{ item.title }}</div>
        </div>
        <div class="content" @click="DetailCard(index)">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.message }}
        </div>

        <div class="bottom">
          <el-button text class="button" @click="ClickLike(item.id, index)">
            <svg
              class="icon"
              aria-hidden="true"
              v-if="!islike.data[index].islike"
            >
              <use xlink:href="#icon-icon"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else>
              <use xlink:href="#icon-icon-copy"></use>
            </svg>
            <p>{{ islike.data[index].likecount }}</p>
          </el-button>
          <el-button text class="button" @click="ClickDislike(item.id, index)">
            <svg
              class="icon"
              aria-hidden="true"
              v-if="!islike.data[index].dislike"
            >
              <use xlink:href="#icon-buxihuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" v-else>
              <use xlink:href="#icon-buxihuan-copy"></use>
            </svg>

            <p>{{ islike.data[index].discount }}</p>
          </el-button>
          <el-button text class="button" @click="DetailCard(index)">
            <el-icon><Comment /></el-icon>
          </el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import nowtime from "../utils/myData";
import { onMounted, reactive, ref, toRefs } from "vue";
import { getCurrentInstance, onBeforeMount, onBeforeUnmount } from "vue";
import { findWallPage, insertFeedback } from "../api/index";
import emitter from "../mitt/event";
import store from "../store";

// const currentDate = ref(new Date());
// const emit = defineEmits(["detail"]);

let data = reactive({ page: "1", pagesize: "9", type: 0, label: "-1" });

//单个数据wall
let cards = reactive({
  data: [],
});

let islike = reactive({
  data: [
    { likecount: 0, islike: false, discount: 0, dislike: false },
    { likecount: 0, islike: false, discount: 0, dislike: false },
    { likecount: 0, islike: false, discount: 0, dislike: false },
    { likecount: 0, islike: false, discount: 0, dislike: false },
    { likecount: 0, islike: false, discount: 0, dislike: false },
    { likecount: 0, islike: false, discount: 0, dislike: false },
    { likecount: 0, islike: false, discount: 0, dislike: false },
    { likecount: 0, islike: false, discount: 0, dislike: false },
    { likecount: 0, islike: false, discount: 0, dislike: false },
  ],
});
function ClickLike(id, index) {
  if (!islike.data[index].islike) {
    let feedback = {
      wallId: id,
      userId: "coco",
      type: 0,
      moment: nowtime(),
    };
    insertFeedback(feedback);
    islike.data[index].islike = !islike.data[index].islike;
    islike.data[index].likecount++;
  }
}
function ClickDislike(id, index) {
  if (!islike.data[index].dislike) {
    let feedback = {
      wallId: id,
      userId: "coco",
      type: 1,
      moment: nowtime(),
    };
    insertFeedback(feedback);
    islike.data[index].dislike = !islike.data[index].dislike;
    islike.data[index].discount++;
  }
}

function DetailCard(index) {
  emitter.emit("detail", index);
  emitter.emit("cards", cards);
}

onMounted(() => {
  emitter.on("currentPage", (val) => {
    data.page = val;
    // console.log(val);
    findWallPage(data).then(async (res) => {
      // cards.data = cards.data.concat(res.data.message);
      cards.data = [...res.message];
      for (let i = 0; i < cards.data.length; i++) {
        islike.data[i].likecount = cards.data[i].like[0].count;
        islike.data[i].discount = cards.data[i].dislike[0].count;
      }
      // console.log(cards);
    });
  });
  findWallPage(data).then(async (res) => {
    // cards.data = cards.data.concat(res.data.message);
    cards.data = [...res.message];
    // console.log(cards.data);
    for (let i = 0; i < cards.data.length; i++) {
      islike.data[i].likecount = cards.data[i].like[0].count;
      islike.data[i].discount = cards.data[i].dislike[0].count;
    }
    // console.log(islike.data);
  });
});
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.card {
  border-radius: 20px;
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
    flex: 1;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    .button {
      background-color: rgba(255, 255, 255, 0);
      font-size: 20px;
      padding: 0;
    }
    p {
      margin-left: 2px;
    }
  }
}
</style>
