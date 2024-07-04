<template>
  <div :style="backgroundStyle" class="big-container">
    <div class="box">
      <el-input
        type="text"
        prefix-icon="el-icon-search"
        v-model="searchText"
        placeholder="请输入要搜索的地点"
        style="width: 270px; cursor: pointer"
        @keyup.enter="handleSearch"
      ></el-input>
      <el-button type="primary" @click="handleSearch" style="margin-left: 10px;">搜索</el-button>
    </div>
    <div v-if="click">
      <!-- 加载中时显示加载动画 -->
      <div v-if="loading" class="loading-spinner">
        <el-spinner></el-spinner>
      </div>
      <!-- 加载完成后显示景点信息 -->
      <div v-else class="spots-container">
        <div v-for="item in spotItems" :key="item.id" class="spot-item">
          <h3>{{ item.name }}</h3> <!-- 显示景点名称 -->
          <p>{{ item.content }}</p> <!-- 显示景点内容 -->
        </div>
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
      searchText:'',
      click: false,
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
  },
  methods: {
     async handleSearch() {
       this.click = true;
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
.box {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: transparent;
}

.big-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.spots-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 每个块之间的间距 */
  margin-top: 20px;
  justify-content: center; /* 水平居中对齐 */
}

.spot-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33% - 40px); /* 每个块占据容器的1/3，并且考虑到间距 */
  max-width: calc(33% - 40px);
  min-width: 300px; /* 确保块的最小宽度 */
  box-sizing: border-box;
  max-height: 300px; /* 设置最大高度 */
  overflow: auto; /* 确保内容超过时隐藏 */
  display: flex;
  flex-direction: column;
  animation: shake 0.5s;
  /* 使用伪元素来隐藏滚动条 */
  position: relative;
}

.spot-item::-webkit-scrollbar {
  width: 0; /* 隐藏滚动条宽度 */
  height: 0; /* 隐藏滚动条高度 */
}

.spot-item::-webkit-scrollbar-thumb {
  background-color: transparent; /* 隐藏滚动条的 thumb 部分 */
}

.spot-item::-webkit-scrollbar-track {
  background-color: transparent; /* 隐藏滚动条的 track 部分 */
}

.spot-item h3 {
  margin-top: 0;
  text-align: center;
}

.spot-item p {
  margin-bottom: 0;
  line-height: 1.5; /* 行高 */
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
