<template>
  <div :style="backgroundStyle" class="big-container">
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
      backgroundImage: ''
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
    // 获取新闻数据
    this.getNewsData();
  },
  methods: {
    // 获取新闻数据的方法
    // async getNewsData() {
    //   try {
    //     const response = await this.$api.getNews(); // 调用接口获取数据
    //     if (response.data.code === 200) {
    //       this.newsItems = response.data.result.newslist; // 将新闻列表存储到组件数据中
    //       console.log(this.newsItems)
    //     } else {
    //       console.error('获取新闻数据失败');
    //     }
    //   } catch (error) {
    //     console.error('获取新闻数据异常', error);
    //   } finally {
    //     this.loading = false; // 数据加载完毕后，取消加载状态
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
        this.loading = false; // 数据加载完毕后，取消加载状态
      }, 1000); // 模拟异步请求延时
    },
  }
};
</script>

<style scoped>
/* 美化新闻列表 */
.news {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3); /* 半透明背景 */
  animation: shake 0.5s;
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
.loading-spinner::after { /*设置背景虚图层*/
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    left: 0;
    top: 0;
    filter: blur(5px);
    z-index: 2;
    border-radius: 60px;
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
