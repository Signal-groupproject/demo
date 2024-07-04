<template>
  <div :style="backgroundStyle" class="big-container">
    <el-input
        type="text"
        prefix-icon="el-icon-search"
        v-model="searchText"
        placeholder="请输入要搜索的景点"
        style="width: 270px; cursor: pointer"
    ></el-input>
    <el-button type="primary" @click="handleSearch" style="margin-left: 10px;">搜索</el-button>
    <div v-if="loading" class="loading-spinner">
        <el-spinner></el-spinner>
      </div>
      <div v-else class="spots-container">
        <div v-for="item in spotItems" :key="item.id" class="spot-item">
          <h3>{{ item.name }}</h3> <!-- 显示景点名称 -->
          <p>{{ item.content }}</p> <!-- 显示景点内容 -->
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      spotItems: [], // 存储新闻数据
      loading: true, // 添加加载状态
      backgroundImage: '',
      searchText:''
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: this.backgroundImage,
        backgroundSize: 'cover', // 背景图片覆盖整个元素
        backgroundPosition: 'center', // 背景图片居中
        height: '91.85vh', // 设置高度
        width: '100vw' // 设置宽度，覆盖整个视口
      };
    }
  },
  created() {
    //获取随机4K高清背景图片
      this.$api.getRandomImage().then(res => {
          // 设置背景图片
          this.backgroundImage = `url(${res.data.data})`;
      }).catch(error => {
          console.error("获取随机图片失败:", error);
      });
  },
  methods: {
     async handleSearch() {
      this.loading = true; // 开始加载状态
      const apiKey = '3b7e02cb890ff3337c2bae1ccbb3030a';
      const url = `https://apis.tianapi.com/scenic/index?num=6&key=${apiKey}&word=${(this.searchText)}`;

      try {
        const response = await axios.get(url);
        if (response.data.code === 200) {
          this.spotItems = response.data.result.list.map((item, index) => ({
            id: index, // 使用索引作为ID
            name: item.name, // 获取景点名称
            content: item.content // 获取景点内容
          }));
        } else {
          console.error('搜索新闻失败');
        }
      } catch (error) {
        console.error('搜索新闻异常', error);
      } finally {
        this.loading = false; // 数据加载完毕后，取消加载状态
      }
    },
  }
};
</script>

<style scoped>
.big-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.news {
  width: 80%;
  margin: auto;
}

.spots-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 每个块之间的间距 */
  margin-top: 20px;
}

.spot-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33% - 40px); /* 每个块占据容器的1/3，并且考虑到间距 */
  max-width: calc(33% - 40px);
  min-width: 300px; /* 确保块的最小宽度 */
  box-sizing: border-box;
  max-height: 300px; /* 设置最大高度 */
  overflow: hidden; /* 确保内容超过时隐藏 */
  display: flex;
  flex-direction: column;
}

.spot-item h3 {
  margin-top: 0;
}

.spot-item .content {
  overflow-y: auto; /* 垂直方向出现滚动条 */
  max-height: 200px; /* 内容区域的最大高度 */
  margin-top: 10px; /* 与标题的间距 */
}

.spot-item p {
  margin-bottom: 0;
  line-height: 1.5; /* 行高 */
}
</style>
