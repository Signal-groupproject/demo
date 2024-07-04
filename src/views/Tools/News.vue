<template>
  <div :style="backgroundStyle" class="big-container">
    <div class="news-container">
      <div class="news">
        <h2>哔哩哔哩热榜</h2>
        <div v-if="loading1" class="loading-spinner">
          <el-spinner></el-spinner>
        </div>
        <ul v-else>
          <li v-for="item in bilibili_news.slice(0,7)" :key="item.id" class="news-item">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
            <span class="time">{{ formatDate(item.timestamp)}}</span>
          </li>
        </ul>
      </div>
      <div class="news">
        <h2>文旅新闻</h2>
        <div v-if="loading2" class="loading-spinner">
          <el-spinner></el-spinner>
        </div>
        <ul v-else>
          <li v-for="item in newsItems.slice(0,8)" :key="item.id" class="news-item">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
            <span class="time">{{ item.ctime }}</span>
          </li>
        </ul>
      </div>
      <div class="news">
        <h2>知乎热榜</h2>
        <div v-if="loading3" class="loading-spinner">
          <el-spinner></el-spinner>
        </div>
        <ul v-else>
          <li v-for="item in zhihu_news.slice(0,5)" :key="item.id" class="news-item">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
            <span class="time">{{ formatDate(item.timestamp)}}</span>
          </li>
        </ul>
      </div>
      <div class="news">
        <h2>百度热榜</h2>
        <div v-if="loading4" class="loading-spinner">
          <el-spinner></el-spinner>
        </div>
        <ul v-else>
          <li v-for="item in baidu_news.slice(0,8)" :key="item.id" class="news-item">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
            <span class="time">{{ formatDate(item.timestamp)}}</span>
          </li>
        </ul>
      </div>
      <div class="news">
        <h2>微博热搜</h2>
        <div v-if="loading5" class="loading-spinner">
          <el-spinner></el-spinner>
        </div>
        <ul v-else>
          <li v-for="item in weibo_news.slice(0,8)" :key="item.id" class="news-item">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
            <span class="time">{{ formatDate(item.timestamp)}}</span>
          </li>
        </ul>
      </div>
      <div class="news">
        <h2>今日头条</h2>
        <div v-if="loading6" class="loading-spinner">
          <el-spinner></el-spinner>
        </div>
        <ul v-else>
          <li v-for="item in todays_news.slice(0,5)" :key="item.id" class="news-item">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
            <span class="time">{{ formatDate(item.timestamp)}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsItems: [], // 存储新闻数据
      bilibili_news: [],
      zhihu_news: [],
      baidu_news: [],
      weibo_news: [],
      todays_news: [],
      loading1: true, // 添加加载状态
      loading2: true,
      loading3: true,
      loading4: true,
      loading5: true,
      loading6: true,
      backgroundImage: ''
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: this.backgroundImage,
        backgroundSize: 'cover', // 背景图片覆盖整个元素
        backgroundPosition: 'center', // 背景图片居中
        height: '93.7vh', // 设置高度
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
    // 获取新闻数据
    this.getNewsData();
    this.getBilibili_NewsData();
    this.getWeibo_NewsData();
    this.getZhihu_NewsData();
    this.getBaidu_NewsData();
    this.getTodays_NewsData();
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000); // 将时间戳乘以1000转换为毫秒
      const year = 2024;
      const month = ('0' + (date.getMonth() + 1)).slice(-2); // 加1并确保两位数
      const day = ('0' + date.getDate()).slice(-2); // 确保两位数
      return `${year}-${month}-${day}`;
    },
    // 获取新闻数据的方法
    // async getNewsData() {
    //   try {
    //     const response = await this.$api.getNews(); // 调用接口获取数据
    //     if (response.data.code === 200) {
    //       this.newsItems = response.data.result.newslist; // 将新闻列表存储到组件数据中
    //     } else {
    //       console.error('获取新闻数据失败');
    //     }
    //   } catch (error) {
    //     console.error('获取新闻数据异常', error);
    //   } finally {
    //     this.loading1 = false; // 数据加载完毕后，取消加载状态
    //   }
    // },
    //新闻接口调用上限时，使用一下代码
    getNewsData() {
      setTimeout(() => { // 模拟异步请求
        this.newsItems = [
          { id: 1, title: '新闻标题1', url: 'https://www.example.com/news1', ctime: '2024-09-01' },
          { id: 2, title: '新闻标题2', url: 'https://www.example.com/news2', ctime: '2024-09-01' },
          { id: 3, title: '新闻标题3', url: 'https://www.example.com/news3', ctime: '2024-09-01' },
          { id: 4, title: '新闻标题4', url: 'https://www.example.com/news4', ctime: '2024-09-01' },
          { id: 5, title: '新闻标题5', url: 'https://www.example.com/news5', ctime: '2024-09-01' },
        ];
        this.loading1 = false; // 数据加载完毕后，取消加载状态
      }, 1000); // 模拟异步请求延时
    },
    async getBilibili_NewsData() {
      try {
        const response = await this.$api.getBilibili_News(); // 调用接口获取数据
        if (response.data.code === 200) {
          this.bilibili_news = response.data.data; // 将新闻列表存储到组件数据中
        } else {
          console.error('获取新闻数据失败');
        }
      } catch (error) {
        console.error('获取新闻数据异常', error);
      } finally {
        this.loading2 = false; // 数据加载完毕后，取消加载状态
      }
    },
    async getZhihu_NewsData() {
      try {
        const response = await this.$api.getZhihu_News(); // 调用接口获取数据
        if (response.data.code === 200) {
          this.zhihu_news = response.data.data; // 将新闻列表存储到组件数据中
        } else {
          console.error('获取新闻数据失败');
        }
      } catch (error) {
        console.error('获取新闻数据异常', error);
      } finally {
        this.loading3 = false; // 数据加载完毕后，取消加载状态
      }
    },
    async getBaidu_NewsData() {
      try {
        const response = await this.$api.getBaidu_News(); // 调用接口获取数据
        if (response.data.code === 200) {
          this.baidu_news = response.data.data; // 将新闻列表存储到组件数据中
        } else {
          console.error('获取新闻数据失败');
        }
      } catch (error) {
        console.error('获取新闻数据异常', error);
      } finally {
        this.loading4 = false; // 数据加载完毕后，取消加载状态
      }
    },
    async getWeibo_NewsData() {
      try {
        const response = await this.$api.getWeibo_News(); // 调用接口获取数据
        if (response.data.code === 200) {
          this.weibo_news = response.data.data; // 将新闻列表存储到组件数据中
        } else {
          console.error('获取新闻数据失败');
        }
      } catch (error) {
        console.error('获取新闻数据异常', error);
      } finally {
        this.loading5 = false; // 数据加载完毕后，取消加载状态
      }
    },
    async getTodays_NewsData() {
      try {
        const response = await this.$api.getTodays_News(); // 调用接口获取数据
        if (response.data.code === 200) {
          this.todays_news = response.data.data; // 将新闻列表存储到组件数据中
        } else {
          console.error('获取新闻数据失败');
        }
      } catch (error) {
        console.error('获取新闻数据异常', error);
      } finally {
        this.loading6 = false; // 数据加载完毕后，取消加载状态
      }
    },
  }
};
</script>

<style scoped>
.news-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
/* 美化新闻列表 */
.news {
  flex-basis: calc(33.33% - 40px);
  padding: 20px;
  max-width: 500px;
  max-height: 400px;
  margin: 3px;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.7); /* 半透明背景 */
  animation: shake 0.5s;
  transition: box-shadow 0.3s ease; /* 添加过渡效果，使阴影变化更平滑 */
}

.news:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* 鼠标悬停时增加更深的阴影效果 */
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
  transition: background-color 0.3s, transform 0.3s; /* 过渡效果 */
  display: flex;
  align-items: center;
  background: transparent;
}

.news-item:hover {
  transform: scale(1.03); /* 悬停缩放效果 */
  animation: shake 0.25s;
}

.news-item a {
  color: #000;
  text-decoration: none;
  font-size: 18px;
  flex-grow: 1;
}

.news-item a:hover {
  text-decoration: none;
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

@keyframes shake {/*弹跳效果*/
    0%,
    10%,
    55%,
    90%,
    94%,
    98%,
    100% {
        -webkit-transform: scale(1, 1);
    }

    30% {
        -webkit-transform: scale(1.14, 0.86);
    }

    75% {
        -webkit-transform: scale(0.92, 1.08);
    }

    92% {
        -webkit-transform: scale(1.04, 0.96);
    }

    96% {
        -webkit-transform: scale(1.02, 0.98);
    }

    99% {
        -webkit-transform: scale(1.01, 0.99);
    }
}
</style>
