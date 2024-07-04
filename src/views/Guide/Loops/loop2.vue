<template>
  <div class="guide-page">
    <h1>光遇重庆旅游攻略</h1>
    <div class="guide-content">
      <h2>景点介绍</h2>
      <p>重庆作为一座充满魅力的城市，拥有许多著名的旅游景点：</p>
      <ul>
        <li>洪崖洞</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="洪崖洞" class="place-image"> 洪崖洞是重庆的标志性建筑，夜晚灯火辉煌，别有一番风味。</li>
        <li>长江索道</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="长江索道" class="place-image"> 长江索道是欣赏重庆两岸美景的绝佳方式。</li>
        <li>解放碑步行街</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="解放碑步行街" class="place-image"> 解放碑步行街是购物和休闲的热门地点。</li>
        <li>三峡博物馆</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="三峡博物馆" class="place-image"> 三峡博物馆展示了长江三峡的自然和文化遗产。</li>
        <li>白公馆</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="白公馆" class="place-image"> 白公馆是重庆的历史古迹，见证了这座城市的变迁。</li>
      </ul>

      <h2>美食推荐</h2>
      <p>重庆以其辣味美食闻名，不可错过的美食包括：</p>
      <ul>
        <li>重庆火锅</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="重庆火锅" class="food-image"> 重庆火锅以其麻辣鲜香著称，让人欲罢不能。</li>
        <li>辣子鸡</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="辣子鸡" class="food-image"> 辣子鸡是一道色香味俱全的重庆特色菜。</li>
        <li>毛血旺</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="毛血旺" class="food-image"> 毛血旺是一道集合了重庆火锅元素的独特美食。</li>
        <li>酸辣粉</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="酸辣粉" class="food-image"> 酸辣粉以其酸辣可口的口感深受市民喜爱。</li>
        <li>重庆小面</li>
        <li><img src="@/pictures/page1/chongqing1.jpg" alt="重庆小面" class="food-image"> 重庆小面汤汁丰厚，面条劲道，是重庆人日常必吃的面食。</li>
      </ul>

      <h2>实用信息</h2>
      <p>参观重庆时需要注意的实用信息：</p>
      <ul>
        <li>交通：重庆轨道交通便捷，推荐使用地铁出行。</li>
        <li>季节：春秋季节是最佳旅行时间，避开夏季高温。</li>
        <li>购物：解放碑步行街是购物的好去处，各种特色小店和商场林立。</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 在这里可以添加逻辑处理或导入其他模块
</script>

<style scoped>
.guide-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.guide-content {
  font-size: 16px;
  line-height: 1.6;
}

h1, h2 {
  color: #333;
  text-align: center;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.place-image, .food-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin-top: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.place-image {
  margin-left: auto;
  margin-right: auto;
}

.food-image {
  margin-left: auto;
  margin-right: auto;
}

</style>
