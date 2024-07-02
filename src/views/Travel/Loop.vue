<template>
  <div>
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in loop" :key="item.img">
        <img :src="item.img" height="500px" width="100%" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    loop: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
/* 可添加样式 */
</style>
