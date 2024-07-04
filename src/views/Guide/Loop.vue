<template>
  <div>
    <el-carousel trigger="click" height="700px">
      <el-carousel-item v-for="(item, index) in loop" :key="index" @click.native="handleClick(item)">
        <img :src="item.img" class="carousel-image" :alt="item.caption">
        <div class="carousel-caption">{{ item.caption }}</div>
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

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例填充，不拉伸变形 */
}

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.2); /* 背景色设为半透明 */
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  transition: opacity 0.3s ease-in-out;
  font-size: 30px;
  text-align: center;
}

.el-carousel__item:hover .carousel-caption {
  opacity: 1;
}
</style>
