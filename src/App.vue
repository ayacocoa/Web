<template>
  <router-view v-if="isRouterLive"></router-view>
</template>

<script setup>
import { nextTick, provide, ref } from "vue";

let isRouterLive = ref(true);
function reload() {
  isRouterLive.value = false;
  nextTick(() => {
    isRouterLive.value = true;
  });
}
provide("reload", reload);
</script>

<style></style>
