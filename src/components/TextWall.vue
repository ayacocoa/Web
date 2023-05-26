<template>
  <div v-for="(item, index) in 10" :key="index">
    <one-text-wall />
  </div>
</template>

<script setup>
import OneTextWall from "./OneTextWall.vue";
</script>

<style></style>
