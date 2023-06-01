<template>
  <div v-for="(item, index) in 4" :key="index">
    <one-photo-wall />
  </div>
</template>

<script setup>
import OnePhotoWall from "./OnePhotoWall.vue";
</script>

<style></style>
