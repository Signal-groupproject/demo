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
  {img: require('@/pictures/page1/about_top.jpg'), link: '/loop1'},
  {img: require('@/pictures/page1/about_top.jpg'), link: '/loop2'},
  {img: require('@/pictures/page1/about_top.jpg'), link: '/loop3'},
  {img: require('@/pictures/page1/about_top.jpg'), link: '/loop4'},
];

// 8个卡片的数据
const cards = [
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 1', text: 'Card 1 Description', link: '/card1'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 2', text: 'Card 2 Description', link: '/card2'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 3', text: 'Card 3 Description', link: '/card3'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 4', text: 'Card 4 Description', link: '/card4'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 5', text: 'Card 5 Description', link: '/card5'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 6', text: 'Card 6 Description', link: '/card6'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 7', text: 'Card 7 Description', link: '/card7'},
  {img: require('@/pictures/page1/about_top.jpg'), alt: 'Card 8', text: 'Card 8 Description', link: '/card8'},
];

function handleCardClick(card) {
  // 跳转到对应链接
  router.push(card.link); // 如果使用了vue-router，需要解注释并确保已正确导入和配置
}

function search() {
  // 实现搜索逻辑
  console.log('Perform search');
}

let enlargeIndex = null;

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
