<template>
  <div>
    <Loop :loop="guideImages" />

    <!-- 搜索框区域 -->
    <div class="guideSearchContainer">
      <el-input v-model="guideSearchQuery" placeholder="请输入你想去的地名" class="guideSearchInput"></el-input>
    </div>

    <!-- 搜索结果显示 -->
    <div v-if="guideFilteredCards.length" class="guideCardContainer">
      <div class="guideCardGrid">
        <div v-for="guideCard in guideFilteredCards" :key="guideCard.text" class="guideCard">
          <div class="guideCardContent">
            <img :src="guideCard.img" :alt="guideCard.alt">
            <p>{{ guideCard.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 卡片区域 -->
    <div v-if="!guideFilteredCards.length" class="guideCardContainer">
      <div class="guideCardGrid">
        <div
            v-for="(guideCard, index) in guideCards"
            :key="index"
            class="guideCard"
            @click="handleCardClick(guideCard)"
        >
          <div class="guideCardContent">
            <img :src="guideCard.img" :alt="guideCard.alt">
            <p>{{ guideCard.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部网站信息 -->
    <div class="guideFooter">
      <p>这里是QQMaiMaiBu好玩到爆旅游攻略</p>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import Loop from "@/views/Guide/Loop.vue";
import router from "@/router";

const guideImages = [
  {img: require('@/views/Guide/Loops/loopImages/dali.jpg'), link: '/loop1', caption: "大理"},
  {img: require('@/views/Guide/Loops/loopImages/chongqing1.jpg'), link: '/loop2', caption: "重庆"},
  {img: require('@/views/Guide/Loops/loopImages/beijing3.jpg'), link: '/loop3', caption: "北京"}
];

// 8个卡片的数据
const guideCards = [
  {img: require('@/views/Guide/GuideCards/cardImage/5.jpg'), alt: 'GuideCard 1', text: '成都攻略', link: '/card1'},
  {img: require('@/views/Guide/GuideCards/cardImage/shanghai3.jpg'), alt: 'GuideCard 2', text: '上海攻略', link: '/card2'},
  {img: require('@/views/Guide/GuideCards/cardImage/guangzhou1.jpg'), alt: 'GuideCard 3', text: '广州攻略', link: '/card3'},
  {img: require('@/views/Guide/GuideCards/cardImage/xiamen1.jpg'), alt: 'GuideCard 4', text: '厦门攻略', link: '/card4'},
  {img: require('@/views/Guide/socialImages/guizhou.jpg'), alt: 'GuideCard 5', text: '贵州攻略', link: '/card5'},
  {img: require('@/views/Guide/Loops/loopImages/beijing3.jpg'), alt: 'GuideCard 6', text: '北京攻略', link: '/loop3'},
  {img: require('@/views/Guide/Loops/loopImages/chongqing1.jpg'), alt: 'GuideCard 7', text: '重庆攻略', link: '/loop2'},
  {img: require('@/views/Guide/Loops/loopImages/dali.jpg'), alt: 'GuideCard 8', text: '大理攻略', link: '/loop1'},
];

const guideSearchQuery = ref('');

const guideFilteredCards = computed(() => {
  if (guideSearchQuery.value.trim() === '') {
    return [];
  } else {
    const query = guideSearchQuery.value.toLowerCase();
    return guideCards.filter(guideCard =>
        guideCard.text.toLowerCase().includes(query)
    );
  }
});

function handleCardClick(guideCard) {
  // 跳转到对应链接
  router.push(guideCard.link);
}
</script>

<style scoped>

/* 搜索框区域样式 */
.guideSearchContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.guideSearchInput {
  width: 300px;
  margin-right: 10px;
}

.guideCardContainer {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 40px;
  margin: 20px auto;
  max-width: 1200px;
}

.guideCardGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 10px;
  margin-bottom: 40px; /* 增加底部间隔 */
  max-width: 1000px; /* 设置最大宽度 */
  margin-left: auto; /* 水平居中 */
  margin-right: auto; /* 水平居中 */
}

.guideCard {
  width: 230px; /* 调整卡片宽度 */
  height: 200px; /* 调整卡片高度 */
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
}

.guideCard:hover {
  transform: scale(1.05);
}

.guideCard .guideCardContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.guideCard img {
  width: 100%;
  max-height: 70%;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
  border-radius: 10px; /* 圆角 */
}

.guideCard p {
  margin-top: 8px;
  font-size: 14px;
}

.guideFooter {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
</style>
