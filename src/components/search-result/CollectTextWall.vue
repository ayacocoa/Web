<template>
  <el-row>
    <el-col>
      <el-card
        :body-style="{ padding: '0px' }"
        class="card"
        :class="store.state.theme ? 'green' : 'blue'"
        v-for="(item, index) in cards.data.message"
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
          <el-button text class="button" @click="ClickLike(item.id)">
            <!-- <svg class="icon" aria-hidden="true" v-if="islike">
              <use xlink:href="#icon-icon-copy"></use>
            </svg> -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-copy"></use>
            </svg>
            <p>{{ item.tolike }}</p>
          </el-button>
          <el-button text class="button" @click="ClickDislike(item.id, index)">
            <!-- <svg
              class="icon"
              aria-hidden="true"
              v-if="!islike.data[index].dislike"
            > -->
            <!-- <use xlink:href="#icon-buxihuan"></use>
            </svg> -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-buxihuan-copy"></use>
            </svg>

            <p>{{ item.dislike }}</p>
          </el-button>
          <el-button text class="button" @click="ClickCollect(item.id, index)">
            <el-icon><Star /></el-icon>
            <p>{{ item.collect }}</p>
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
import nowtime from "../../utils/myData";
import { inject, onMounted, reactive, ref, toRefs, watch } from "vue";
import { findCollect } from "../../api/index";
import {
  findFeedback,
  findWallPage,
  insertFeedback,
  wallFeedback,
} from "../../api/index";
import emitter from "../../mitt/event";
import store from "../../store";
import { Dodecode } from "../../utils/encrypt";
// const currentDate = ref(new Date());
// const emit = defineEmits(["detail"]);

let islike = ref(false);
//单个数据wall
let cards = reactive({
  data: [],
});
onMounted(() => {
  let userid = Dodecode(localStorage.getItem("user")).id;
  findCollect(userid, 3).then((data) => {
    cards.data = data;
    console.log(data);
  });
});

function ClickLike(id) {
  findFeedback(id, Dodecode(localStorage.getItem("user")).id, 0).then(
    (result) => {
      if (!result.message.length) {
        let feedback = {
          wallId: id,
          userId: Dodecode(localStorage.getItem("user")).id,
          type: 0,
          moment: nowtime(),
        };
        insertFeedback(feedback);
        wallFeedback(id, 0).then(() => {
          findWallPage(data).then(async (res) => {
            // cards.data = cards.data.concat(res.data.message);
            cards.data = [...res.message];
            console.log(cards.data);
          });
        });
      } else {
        alert("已点赞");
      }
    }
  );
}
function ClickDislike(id) {
  findFeedback(id, Dodecode(localStorage.getItem("user")).id, 1).then(
    (result) => {
      if (!result.message.length) {
        let feedback = {
          wallId: id,
          userId: Dodecode(localStorage.getItem("user")).id,
          type: 1,
          moment: nowtime(),
        };
        insertFeedback(feedback);
        wallFeedback(id, 1).then(() => {
          findWallPage(data).then(async (res) => {
            // cards.data = cards.data.concat(res.data.message);
            cards.data = [...res.message];
            console.log(cards.data);
          });
        });
      } else {
        alert("已点踩");
      }
    }
  );
}
function ClickCollect(id) {
  findFeedback(id, Dodecode(localStorage.getItem("user")).id, 3).then(
    (result) => {
      if (!result.message.length) {
        let feedback = {
          wallId: id,
          userId: Dodecode(localStorage.getItem("user")).id,
          type: 3,
          moment: nowtime(),
        };
        insertFeedback(feedback);
        wallFeedback(id, 3).then(() => {
          findWallPage(data).then(async (res) => {
            // cards.data = cards.data.concat(res.data.message);
            cards.data = [...res.message];
            console.log(cards.data);
          });
        });
      } else {
        alert("已收藏");
      }
    }
  );
}
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
