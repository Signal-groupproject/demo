<template>
  <div>
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in loop" :key="item.title" @click="handleClick(item)">
        <img :src="item.img" height="500px" width="100%" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import router from "@/router";

const props = defineProps({
  loop: {
    type: Array,
    default: () => []
  }
});

function handleClick(item) {
  // 跳转到对应链接
  router.push(item.link);
}
</script>

<style>
/* 可选的样式 */
</style>
