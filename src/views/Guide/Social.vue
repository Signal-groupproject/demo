<template>
  <div class="social">
    <!-- 页面背景 -->
    <div class="socialPageBackground"></div>

    <!-- 搜索框区域 -->
    <div class="socialSearchContainer">
      <el-input v-model="socialSearchQuery" placeholder="搜索你想去的地名或群号" class="socialSearchInput"></el-input>
    </div>

    <!-- 搜索结果显示 -->
    <div v-if="socialSearchResults.length" class="socialSearchResults">
      <p v-for="result in socialSearchResults" :key="result" class="socialResultItem">
        {{ result }}
      </p>
    </div>

    <!-- 卡片区域 -->
    <div v-if="!socialSearchResults.length" class="socialCardContainer">
      <div v-for="(socialImage, index) in socialFilteredImages" :key="index" class="socialCard" @mouseover="socialHandleMouseOver(index)" @mouseleave="socialHandleMouseLeave">
        <div class="socialCardImage">
          <img :src="socialImage.src" alt="Card Image">
          <!-- 鼠标悬停时显示群号 -->
          <div v-if="socialInfoIndex === index" class="socialGroupInfo">
            <div class="socialInfoText">
              {{ socialImage.info }}
            </div>
            <el-button type="text" class="socialCopyButton" @click="socialCopyInfo(socialImage.info)">复制</el-button>
          </div>
        </div>
        <div class="socialCardTitle" contenteditable="true">
          {{ socialImage.topLeftInfo }}
        </div>
      </div>
    </div>

    <!-- 底部网站信息 -->
    <footer class="socialFooter">
      <p>这里是QQMaiMaiBu好玩到爆旅游攻略社交群</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data() {
    return {
      socialSearchQuery: '',
      socialSearchResults: [],
      socialImages: [
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
      socialInfoIndex: -1,
      socialSearchClicked: false // 标记搜索按钮是否点击过
    };
  },
  computed: {
    socialFilteredImages() {
      if (this.socialSearchQuery.trim() === '') {
        return this.socialImages;
      } else {
        const query = this.socialSearchQuery.toLowerCase();
        return this.socialImages.filter(socialImage =>
            socialImage.info.toLowerCase().includes(query) || socialImage.topLeftInfo.toLowerCase().includes(query)
        );
      }
    },
    socialSearchResults() {
      if (this.socialSearchQuery.trim() === '') {
        return [];
      } else {
        const query = this.socialSearchQuery.toLowerCase();
        return this.socialImages
            .filter(socialImage =>
                socialImage.info.toLowerCase().includes(query) || socialImage.topLeftInfo.toLowerCase().includes(query)
            )
            .map(socialImage => socialImage.topLeftInfo);
      }
    }
  },
  methods: {
    socialHandleMouseOver(index) {
      this.socialInfoIndex = index;
    },
    socialHandleMouseLeave() {
      this.socialInfoIndex = -1;
    },
    socialCopyInfo(info) {
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
.socialPageBackground {
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
.socialSearchContainer {
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

.socialSearchInput {
  width: 300px;
  margin-right: 10px;
}

.socialSearchResults {
  margin-top: 20px;
  text-align: center;
}

.socialResultItem {
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  display: inline-block;
  width: calc(100% - 40px);
}

.socialFooter {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}


/* 卡片样式 */
.socialCardContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 80px;
}

.socialCard {
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: relative;
  border-radius: 10px; /* 圆角 */
}

.socialCard:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.socialCardImage {
  width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
}

.socialCardImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; /* 圆角 */
}

.socialGroupInfo {
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

.socialCard:hover .socialGroupInfo {
  opacity: 1; /* 鼠标悬停时显示 */
}

.socialInfoText {
  font-size: 14px;
  padding: 10px;
}
</style>
