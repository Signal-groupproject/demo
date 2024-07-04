<template>
  <div>
    <div class="body">

      <div class="content">
        <div class="title">
          <h1>城市介绍</h1>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Search" v-model="searchKeyword">
          <button @click="search">Search</button>
        </div>
        <div class="sidebar">
          <div
              v-for="(city, index) in citys"
              :key="index"
              class="sidebar-item"
              @mouseover="fillSearch(city.text)"
              @mouseleave="delayedClearSearch()"
          >
            <p>{{ city.text }}</p>
          </div>
        </div>
        <div class="city-list">
          <div
              v-for="(city, index) in filteredCitys"
              :key="index"
              class="city"
              @mouseover="showEnlarge(index)"
              @mouseleave="hideEnlarge()"
              @click="handlecityClick(city)"
          >
            <img :src="city.img" :alt="city.alt">
            <div class="city-content">
              <p class="city-text">{{ city.text }}</p>
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Footer content here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import router from "@/router";

const citys = [
  {img: require('@/pictures/city_p/Beijing.png'), alt: 'city 1', text: '北京', link: 'Beijing'},
  {img: require('@/pictures/city_p/Shanghai.png'), alt: 'city 2', text: '上海', link: 'Shanghai'},
  {img: require('@/pictures/city_p/Fujian.png'), alt: 'city 3', text: '福建', link: 'Fujian'},
  {img: require('@/pictures/city_p/Hainan.png'), alt: 'city 4', text: '海南', link: 'Hainan'},
  {img: require('@/pictures/city_p/Guangdong.png'), alt: 'city 5', text: '广东 ', link: 'Guangdong'},
  {img: require('@/pictures/city_p/Liaoning.png'), alt: 'city 6', text: '辽宁 ', link: 'Liaoning'},
  {img: require('@/pictures/city_p/Xinjiang.png'), alt: 'city 7', text: '新疆 ', link: 'Xinjiang'},
  {img: require('@/pictures/city_p/Anhui.png'), alt: 'city 9', text: '安徽 ', link: 'Anhui'},
  {img: require('@/pictures/city_p/Gansu.png'), alt: 'city 10', text: '甘肃 ', link: 'Gansu'},
  {img: require('@/pictures/city_p/Heilongjiang.png'), alt: 'city 11', text: '黑龙江 ', link: 'Heilongjiang'},
  {img: require('@/pictures/city_p/Jiangxi.png'), alt: 'city 12', text: '江西 ', link: 'Jiangxi'},
  {img: require('@/pictures/city_p/Qinghai.png'), alt: 'city 13', text: '青海 ', link: 'Qinghai'},
  {img: require('@/pictures/city_p/Sichuan.png'), alt: 'city 14', text: '四川 ', link: 'Sichuan'},
  {img: require('@/pictures/city_p/Hebei.png'), alt: 'city 15', text: '河北 ', link: 'Hebei'},
  {img: require('@/pictures/city_p/Henan.png'), alt: 'city 16', text: '河南 ', link: 'Henan'},
  {img: require('@/pictures/city_p/Hubei.png'), alt: 'city 17', text: '湖北 ', link: 'Hubei'},
  {img: require('@/pictures/city_p/Hunan.png'), alt: 'city 18', text: '湖南 ', link: 'Hunan'},
  {img: require('@/pictures/city_p/Jilin.png'), alt: 'city 19', text: '吉林 ', link: 'Jilin'},
];

const searchKeyword = ref('');
const enlargeIndex = ref(null);
let clearSearchTimeout = null;

function handlecityClick(city) {
  router.push(city.link);
}

function showEnlarge(index) {
  enlargeIndex.value = index;
}

function hideEnlarge() {
  enlargeIndex.value = null;
}

const filteredCitys = computed(() => {
  return citys.filter(city => {
    // 检查城市名称是否包含搜索关键字（忽略大小写）
    return city.text.toLowerCase().includes(searchKeyword.value.trim().toLowerCase());
  });
});

function search() {
  console.log('Perform search');
  // 这里可以执行额外的搜索逻辑，例如展示搜索结果等
}

function fillSearch(cityName) {
  searchKeyword.value = cityName;
}

function clearSearch() {
  searchKeyword.value = '';
}

function delayedClearSearch() {
  clearTimeout(clearSearchTimeout);
  clearSearchTimeout = setTimeout(() => {
    clearSearch();
  }, 1300); // 2秒延迟后清空搜索框
}
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
}

.sidebar {
  position: fixed;
  bottom: 0; /* 放置在页面底部 */
  left: 0; /* 放置在页面最左侧 */
  height: 86%;
  width: 100px;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* 如果内容溢出，显示滚动条 */
}

.sidebar-item {
  margin-bottom: 10px;
  cursor: pointer;
  text-align: center; /* 居中文字 */
  padding: 15px; /* 添加内边距 */
  border-radius: 4px; /* 添加圆角 */
  background-color: #ffffff; /* 添加背景色 */
}

.content {
  max-width: 800px;
}

.title {
  text-align: center;
}

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

.city-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.city {
  display: flex;
  width: 100%;
  max-width: 600px; /* 调整最大宽度 */
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.city:hover {
  transform: translateY(-5px);
}

.city img {
  width: 200px; /* 调整图片宽度 */
  height: auto;
  object-fit: cover;
}

.city-content {
  flex: 1;
  padding: 20px;
}

.city-text {
  font-size: 16px;
  color: #555;
}

.footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #ccc;
}
</style>
