<template>
  <div class="news">
    <h2>新闻界面</h2>
    <!-- 新闻列表 -->
    <ul>
      <li v-for="item in newsItems" :key="item.id">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
        <span class="time">{{ item.ctime }}</span>
      </li>
    </ul>
    <!-- 返回顶部按钮 -->
    <el-backtop></el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsItems: []  // 存储新闻数据
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
        const response = await this.$api.getNews();  // 调用接口获取数据
        if (response.data.code === 200) {
          this.newsItems = response.data.result.newslist;  // 将新闻列表存储到组件数据中
        } else {
          console.error('获取新闻数据失败');
        }
      } catch (error) {
        console.error('获取新闻数据异常', error);
      }
    }
  }
};
</script>

<style>
/* 可以添加一些样式来美化新闻列表 */
.news {
  padding: 20px;
}

.news ul {
  list-style-type: none;
  padding: 0;
}

.news li {
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.news li a {
  color: #007bff;
  text-decoration: none;
}

.news li a:hover {
  text-decoration: underline;
}

.news .time {
  margin-left: 10px;
  color: #999;
}
</style>
