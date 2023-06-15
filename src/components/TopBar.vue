<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :class="store.state.theme ? 'green' : 'blue'"
  >
    <el-menu-item index="0">
      <img src="/coffee.png" alt="" style="width: 50px; height: 50px" />

      <el-switch
        v-model="value"
        class="ml-2"
        inline-prompt
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: skyblue"
        active-text="护眼模式"
        inactive-text="白天模式"
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
    <el-sub-menu index="3">
      <template #title>
        <div class="avatar">
          <el-avatar size="small" :src="img" />
        </div>
      </template>
      <el-menu-item index="3-1" style="height: 100px"
        ><el-avatar size="large" :src="img" />
        <div>.- - - - - - - - -.</div>
        <div>{{ name }}</div></el-menu-item
      >
      <el-menu-item index="3-2">修改信息</el-menu-item>
      <el-menu-item index="3-3">我发布的</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import store from "../store";
import { decode } from "../utils/encrypt";
let value = ref(false);
let img = decode(localStorage.getItem("user"))[0].imgurl;
let name = decode(localStorage.getItem("user"))[0].nickname;
function changeTheme() {
  store.commit("changeTheme", store.state.theme);
}
</script>

<style lang="less">
.el-menu-demo {
  // background: linear-gradient(to bottom, aqua, white);
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
