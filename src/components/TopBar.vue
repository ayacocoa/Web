<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :class="store.state.theme ? 'green' : 'blue'"
    background-color="rgba(255,255,255,0)"
  >
    <el-menu-item index="0">
      <!-- <img src="public\coffee.png" alt="" style="width: 50px; height: 50px" /> -->

      <el-switch
        v-model="value"
        class="ml-2"
        inline-prompt
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: skyblue"
        active-text="护眼模式"
        inactive-text="普通模式"
        @click="changeTheme"
      />
    </el-menu-item>

    <router-link to="message"
      ><el-menu-item index="1">
        <el-button type="primary" plain round>留言墙</el-button>
      </el-menu-item></router-link
    >

    <router-link to="photo"
      ><el-menu-item index="2">
        <el-button type="primary" plain round>照片墙</el-button>
      </el-menu-item></router-link
    >
    <el-menu-item index="3" style="margin-top: 10px">
      <div class="inputSearch">
        <input
          type="text"
          style="height: 30px"
          v-model="store.state.content.data"
        />
        <el-button type="primary" plain round @click="submit" class="button">
          <el-icon><Search /></el-icon>
        </el-button>
      </div>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <div class="avatar">
          <el-avatar size="small" :src="img" />
        </div>
      </template>
      <el-menu-item index="4-1" style="height: 100px"
        ><el-avatar size="large" :src="img" />
        <div>- - - - - - - - -</div>
        <div>{{ name }}</div></el-menu-item
      >
      <el-menu-item index="4-2">修改信息</el-menu-item>
      <el-menu-item index="4-3" @click="collect">我的收藏</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";
import store from "../store";
import { decode } from "../utils/encrypt";
let value = ref(false);
let img = decode(localStorage.getItem("user")).imgurl;
let name = decode(localStorage.getItem("user")).nickname;
const router = useRouter();
const reload = inject("reload");
function changeTheme() {
  store.commit("changeTheme", store.state.theme);
}
function submit() {
  store.commit("submit");
  reload();
}
function collect() {
  const url = router.resolve({
    path: "/mycollect",
  });
  window.open(url.href);
}
</script>

<style lang="less">
.inputSearch {
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border-radius: 40px;
    padding: 0 20px;
    border: 0;
  }
  .button {
    position: relative;
    width: 40px;
    right: 40px;
  }
}
.el-menu-demo {
  display: flex;
  justify-content: space-between;
  .avatar {
    display: flex;
    justify-content: center;
  }
}
.flex-grow {
  flex-grow: 0.35;
}
.flexg {
  flex-grow: 0.2;
}
.el-menu-demo {
  position: sticky;
  top: 0;
  z-index: 100;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
