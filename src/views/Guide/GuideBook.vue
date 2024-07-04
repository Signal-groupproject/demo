<template>
  <div>
    <Loop :loop="images" />

    <div class="search-bar">
      <input type="text" placeholder="请输入搜索内容">
      <button @click="search">搜索</button>
    </div>
    <div class="card-grid">
      <div
          v-for="(card, index) in cards"
          :key="index"
          class="card"
          @mouseover="showEnlarge(index)"
          @mouseleave="hideEnlarge(index)"
          @click="handleCardClick(card)"
      >
        <div class="card-content">
          <img :src="card.img" :alt="card.alt">
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>这是底部文字内容</p>
    </div>
  </div>
</template>

<script setup>
import Loop from "@/views/Guide/Loop.vue";
import router from "@/router";

const images = [
  {img: require('@/views/Guide/Loops/loopImages/dali.jpg'), link: '/loop1', caption:"大理"},
  {img: require('@/views/Guide/Loops/loopImages/chongqing1.jpg'), link: '/loop2', caption:"重庆"},
  {img: require('@/views/Guide/Loops/loopImages/beijing3.jpg'), link: '/loop3', caption: "北京"}
];

// 8个卡片的数据
const cards = [
  {img: require('@/views/Guide/GuideCards/cardImage/5.jpg'), alt: 'Card 1', text: '成都攻略', link: '/card1'},
  {img: require('@/views/Guide/GuideCards/cardImage/shanghai3.jpg'), alt: 'Card 2', text: '上海攻略', link: '/card2'},
  {img: require('@/views/Guide/GuideCards/cardImage/guangzhou1.jpg'), alt: 'Card 3', text: '广州攻略', link: '/card3'},
  {img: require('@/views/Guide/GuideCards/cardImage/xiamen1.jpg'), alt: 'Card 4', text: '厦门攻略', link: '/card4'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 5', text: 'Card 5 Description', link: '/card5'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 6', text: 'Card 6 Description', link: '/card6'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 7', text: 'Card 7 Description', link: '/card7'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 8', text: 'Card 8 Description', link: '/card8'},
];

function handleCardClick(card) {
  // 跳转到对应链接
  router.push(card.link);
}

function search() {
  // 实现搜索逻辑
  console.log('Perform search');
}
function showEnlarge(index) {
  enlargeIndex = index;
}

function hideEnlarge() {
  enlargeIndex = null;
}
</script>

<style scoped>
.search-bar {
  text-align: center;
  margin-top: 20px;
}

.search-bar input {
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar button {
  margin-left: 10px;
  padding: 8px 12px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #0056b3;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-top: 40px;
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
