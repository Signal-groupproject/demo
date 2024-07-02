<template>
  <div>
    <div class="center-top">
      <h2>热门旅游地点介绍</h2>
    </div>
    <div class="theLoop">
      <Loop :loop="carouselImages" />
    </div>
  </div>
</template>

<script>
import Loop from "@/views/Travel/Loop.vue";
import axios from 'axios';

export default {
  name: "Travel",
  components: {
    Loop
  },
  data() {
    return {
      carouselImages: [] // 初始化为空数组
    };
  },
  created() {
    this.fetchCarouselImages();
  },
  methods: {
    fetchCarouselImages() {
      let imageUrls = [];

      // 生成5次请求的Promise数组
      let requests = Array.from({length: 5}, () => axios.get('https://v2.api-m.com/api/random4kPic'));

      // 执行所有请求并等待所有请求完成后处理结果
      Promise.all(requests)
          .then(responses => {
            responses.forEach(response => {
              if (response.data && response.data.url) {
                imageUrls.push({img: response.data.url});
              }
            });
            // 更新carouselImages数据
            this.carouselImages = imageUrls;
          })
          .catch(error => {
            console.error("Error fetching data: ", error);
          });
    }
  }
};
</script>

<style scoped>
.center-top {
  text-align: center; /* 水平居中 */
  margin-top: 0; /* 顶部间距 */
  background-color: #FFA500; /* 桔黄色背景 */
  padding: 10px;
}
</style>
