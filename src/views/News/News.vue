<template>
  <div :style="{ 'background-image': 'url(' + backgroundImage + ')' }" class="big-container">
    <div class="news">
      <h2>新闻界面</h2>
      <div v-if="loading" class="loading-spinner">
        <el-spinner></el-spinner>
      </div>
      <ul v-else>
        <li v-for="item in newsItems" :key="item.id" class="news-item">
          <a :href="item.url" target="_blank">{{ item.title }}</a>
          <span class="time">{{ item.ctime }}</span>
        </li>
      </ul>
      <el-backtop></el-backtop>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsItems: [], // 存储新闻数据
      loading: true, // 添加加载状态
      backgroundImage: require('@/pictures/page1/背景图.jpg'),
    };
  },
  created() {
    // 在组件创建时获取新闻数据
    this.getNewsData();
  },
  methods: {
    // 获取新闻数据的方法
    async getNewsData() {
      try {
        const response = await this.$api.getNews(); // 调用接口获取数据
        if (response.data.code === 200) {
          this.newsItems = response.data.result.newslist; // 将新闻列表存储到组件数据中
          console.log(this.newsItems)
        } else {
          console.error('获取新闻数据失败');
        }
      } catch (error) {
        console.error('获取新闻数据异常', error);
      } finally {
        this.loading = false; // 数据加载完毕后，取消加载状态
      }
    }
  }
};
</script>

<style scoped>
/* 美化新闻列表 */
.news {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.6); /* 半透明背景 */
  animation: fadeIn 1s ease-in-out; /* 淡入效果 */
}

.big-container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.news h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.news ul {
  list-style-type: none;
  padding: 0;
}

.news-item {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s, transform 0.3s; /* 过渡效果 */
  display: flex;
  align-items: center;
}

.news-item:hover {
  background-color: #f0f0f0;
  transform: scale(1.02); /* 悬停缩放效果 */
}

.news-item a {
  color: #000;
  text-decoration: none;
  font-size: 18px;
  flex-grow: 1;
}

.news-item a:hover {
  text-decoration: underline;
}

.news .time {
  display: block;
  margin-top: 5px;
  color: #333;
  font-size: 14px;
  flex-shrink: 0;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

/* 淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
