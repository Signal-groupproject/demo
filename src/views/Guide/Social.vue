<template>
  <div class="social">
    <!-- 搜索框区域 -->
    <div class="search-container" :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
      <el-input v-model="searchQuery" placeholder="搜索你想去的地名或群号" class="search-input"></el-input>
      <el-button type="primary" @click="searchComponent">搜索</el-button>
    </div>

    <!-- 搜索结果显示 -->
    <div v-if="searchClicked && searchResults.length" class="search-results">
      <p v-for="result in searchResults" :key="result" class="result-item">
        {{ result }}
      </p>
    </div>

    <!-- 图片九宫格 -->
    <div class="image-grid">
      <div v-for="(image, index) in filteredImages" :key="index" class="image-item" @mouseover="showInfo(index)" @mouseleave="hideInfo(index)">
        <img :src="image.src" alt="图片">
        <div class="info-box" v-if="infoIndex === index">
          <p>{{ image.info }}</p>
          <el-button size="mini" @click="copyToClipboard(image.info)">复制</el-button>
        </div>
        <div class="top-left-info">{{ image.topLeftInfo }}</div>
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
  name: 'About',
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      backgroundImage: require('@/pictures/page1/about_top.jpg'), // 背景图片路径
      images: [
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：123456', topLeftInfo: '福建' },
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：234567', topLeftInfo: '广东' },
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：345678', topLeftInfo: '浙江' },
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：456789', topLeftInfo: '贵州' },
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：567890', topLeftInfo: '四川' },
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：678901', topLeftInfo: '云南' },
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：789012', topLeftInfo: '重庆' },
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：890123', topLeftInfo: '广西' },
        { src: require('@/pictures/page1/about_top.jpg'), info: '群号：901234', topLeftInfo: '湖南' }
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
    showInfo(index) {
      this.infoIndex = index;
    },
    copyToClipboard(info) {
      navigator.clipboard.writeText(info)
          .then(() => {
            this.$message.success('群号已复制到剪贴板');
          })
          .catch(() => {
            this.$message.error('复制失败，请手动复制');
          });
    }
  }
};
</script>

<style scoped>
/* 搜索框区域样式 */
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-size: cover;
  background-position: center;
  margin-top: 0;
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

/* 图片九宫格样式 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  max-width: 1000px; /* 设置最大宽度 */
  margin: 0 auto; /* 居中 */
}

.image-item {
  position: relative;
  overflow: hidden;
  max-width: 100%; /* 图片最大宽度 */
  height: 100%; /* 图片高度 */
}

.image-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.info-box {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9); /* 白色背景框 */
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
}

.top-left-info {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px;
  z-index: 1;
}

.footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  color:#f0f0f0;
}

.footer p {
  position: relative; /* 相对定位 */
  z-index: 2; /* 提升文字层级，使其位于背景上方 */
  margin: 0; /* 去除段落的默认外边距 */
  color: #333; /* 设置文字颜色 */
  font-size: 16px; /* 设置文字大小 */
  font-weight: bold; /* 设置文字粗细 */
}

</style>
