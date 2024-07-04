<template>
  <div class="social">
    <!-- 页面背景 -->
    <div class="page-background"></div>

    <!-- 搜索框区域 -->
    <div class="search-container">
      <el-input v-model="searchQuery" placeholder="搜索你想去的地名或群号" class="search-input"></el-input>
      <el-button type="primary" @click="searchComponent">搜索</el-button>
    </div>

    <!-- 搜索结果显示 -->
    <div v-if="searchClicked && searchResults.length" class="search-results">
      <p v-for="result in searchResults" :key="result" class="result-item">
        {{ result }}
      </p>
    </div>

    <!-- 卡片区域 -->
    <div class="card-container">
      <div v-for="(image, index) in filteredImages" :key="index" class="card" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseLeave">
        <div class="card-image">
          <img :src="image.src" alt="Card Image">
          <!-- 鼠标悬停时显示群号 -->
          <div v-if="infoIndex === index" class="group-info">
            <div class="info-text">
              {{ image.info }}
            </div>
            <el-button type="text" class="copy-button" @click="copyInfo(image.info)">复制</el-button>
          </div>
        </div>
        <div class="card-title" contenteditable="true">
          {{ image.topLeftInfo }}
        </div>
      </div>
    </div>

    <!-- 底部网站信息 -->
    <footer class="footer">
      <p>青春没有售价，疯狂就在当下，爱着这炙热的青春。</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      images: [
        { src: require('@/views/Guide/socialImages/fujian.jpg'), info: '群号：123456', topLeftInfo: '福建' },
        { src: require('@/views/Guide/socialImages/guangdong.jpg'), info: '群号：234567', topLeftInfo: '广东' },
        { src: require('@/views/Guide/socialImages/zhejiang.jpg'), info: '群号：345678', topLeftInfo: '浙江' },
        { src: require('@/views/Guide/socialImages/guizhou.jpg'), info: '群号：456789', topLeftInfo: '贵州' },
        { src: require('@/views/Guide/socialImages/sichuan.jpg'), info: '群号：567890', topLeftInfo: '四川' },
        { src: require('@/views/Guide/socialImages/yunnan.jpg'), info: '群号：678901', topLeftInfo: '云南' },
        { src: require('@/views/Guide/socialImages/chongqing.jpg'), info: '群号：789012', topLeftInfo: '重庆' },
        { src: require('@/views/Guide/socialImages/guangxi.jpg'), info: '群号：890123', topLeftInfo: '广西' },
        { src: require('@/views/Guide/socialImages/hunan.jpg'), info: '群号：901234', topLeftInfo: '湖南' }
      ],
      infoIndex: -1,
      searchClicked: false // 标记搜索按钮是否点击过
    };
  },
  computed: {
    filteredImages() {
      if (this.searchQuery.trim() === '') {
        return this.images;
      } else {
        const query = this.searchQuery.toLowerCase();
        return this.images.filter(image =>
            image.info.toLowerCase().includes(query) || image.topLeftInfo.toLowerCase().includes(query)
        );
      }
    }
  },
  methods: {
    searchComponent() {
      this.searchResults = this.components.filter(component =>
          component.includes(this.searchQuery)
      );
      this.searchClicked = true; // 设置搜索按钮点击状态为true
    },
    handleMouseOver(index) {
      this.infoIndex = index;
    },
    handleMouseLeave() {
      this.infoIndex = -1;
    },
    copyInfo(info) {
      // 创建一个临时textarea元素用于复制文本
      const textarea = document.createElement('textarea');
      textarea.value = info;
      textarea.style.position = 'fixed';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      // 可以添加提示信息或其他反馈
      alert('群号已复制到剪贴板');
    }
  }
};
</script>

<style scoped>
/* 页面背景样式 */
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: cover;
  filter: blur(5px);
}

/* 搜索框区域样式 */
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: rgba(255, 255, 255, 0.8) url('~@/views/Guide/socialImages/about_top.jpg');
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(4px);
  padding: 20px;
}

.search-input {
  width: 300px;
  margin-right: 10px;
}

.search-results {
  margin-top: 20px;
  text-align: center;
}

.result-item {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  display: inline-block;
  width: calc(100% - 40px);
}

.footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 70%;
}

.footer p {
  margin: 0;
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

/* 卡片样式 */
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  margin-top: 20px;
}

.card {
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: relative;
  border-radius: 10px; /* 圆角 */
}

.card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 悬停时添加阴影效果 */
}

.card-image {
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; /* 圆角 */
}

.group-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0; /* 初始隐藏 */
  transition: opacity 0.3s ease-in-out;
  z-index: 10;
}

.card:hover .group-info {
  opacity: 1; /* 鼠标悬停时显示 */
}

.info-text {
  font-size: 14px;
  padding: 10px;
}

.copy-button {
  margin-top: 10px;
  font-size: 12px;
  color: #333;
  background-color: #eee;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.copy-button:hover {
  background-color: #ccc;
}
</style>
