<template>
  <div>
    <Loop :loop="images" />

    <!-- 搜索框区域 -->
    <div class="search-container">
      <el-input v-model="searchQuery" placeholder="请输入你想去的地名" class="search-input"></el-input>
    </div>

    <!-- 搜索结果显示 -->
    <div v-if="filteredCards.length" class="search-results">
      <div v-for="card in filteredCards" :key="card.text" class="card">
        <div class="card-content">
          <img :src="card.img" :alt="card.alt">
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>

    <!-- 卡片区域 -->
    <div class="card-container">
      <div class="card-grid">
        <div
            v-for="(card, index) in cards"
            :key="index"
            class="card"
            @click="handleCardClick(card)"
        >
          <div class="card-content">
            <img :src="card.img" :alt="card.alt">
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部网站信息 -->
    <div class="footer">
      <p>这里是QQMaiMaiBu好玩到爆旅游攻略</p>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import Loop from "@/views/Guide/Loop.vue";
import router from "@/router";

const images = [
  {img: require('@/views/Guide/Loops/loopImages/dali.jpg'), link: '/loop1', caption: "大理"},
  {img: require('@/views/Guide/Loops/loopImages/chongqing1.jpg'), link: '/loop2', caption: "重庆"},
  {img: require('@/views/Guide/Loops/loopImages/beijing3.jpg'), link: '/loop3', caption: "北京"}
];

// 8个卡片的数据
const cards = [
  {img: require('@/views/Guide/GuideCards/cardImage/5.jpg'), alt: 'Card 1', text: '成都攻略', link: '/card1'},
  {img: require('@/views/Guide/GuideCards/cardImage/shanghai3.jpg'), alt: 'Card 2', text: '上海攻略', link: '/card2'},
  {img: require('@/views/Guide/GuideCards/cardImage/guangzhou1.jpg'), alt: 'Card 3', text: '广州攻略', link: '/card3'},
  {img: require('@/views/Guide/GuideCards/cardImage/xiamen1.jpg'), alt: 'Card 4', text: '厦门攻略', link: '/card4'},
  {img: require('@/views/Guide/socialImages/guizhou.jpg'), alt: 'Card 5', text: '贵州攻略', link: '/card5'},
  {img: require('@/views/Guide/Loops/loopImages/beijing3.jpg'), alt: 'Card 6', text: '北京攻略', link: '/loop3'},
  {img: require('@/views/Guide/Loops/loopImages/chongqing1.jpg'), alt: 'Card 7', text: '重庆攻略', link: '/loop2'},
  {img: require('@/views/Guide/Loops/loopImages/dali.jpg'), alt: 'Card 8', text: '大理攻略', link: '/loop1'},
];

const searchQuery = ref('');

const filteredCards = computed(() => {
  if (searchQuery.value.trim() === '') {
    return [];
  } else {
    const query = searchQuery.value.toLowerCase();
    return cards.filter(card =>
        card.text.toLowerCase().includes(query)
    );
  }
});

function handleCardClick(card) {
  // 跳转到对应链接
  router.push(card.link);
}
</script>

<style scoped>

/* 搜索框区域样式 */
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
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

.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 40px;
  margin: 20px auto;
  max-width: 1200px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 10px;
  margin-bottom: 40px; /* 增加底部间隔 */
  max-width: 1000px; /* 设置最大宽度 */
  margin-left: auto; /* 水平居中 */
  margin-right: auto; /* 水平居中 */
}

.card {
  width: 230px; /* 调整卡片宽度 */
  height: 200px; /* 调整卡片高度 */
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
}

.card .card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.card img {
  width: 100%;
  max-height: 70%;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
  border-radius: 10px; /* 圆角 */
}

.card p {
  margin-top: 8px;
  font-size: 14px;
}

.footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
</style>
