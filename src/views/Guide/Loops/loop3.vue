<template>
  <div class="guide-page">
    <h1>光遇北京旅游攻略</h1>
    <div class="guide-content">
      <h2>景点介绍</h2>
      <p>北京作为中国的首都，有许多著名的旅游景点：</p>
      <ul>
        <li>故宫</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="故宫" class="place-image"> 故宫是中国古代宫殿建筑的代表，气势宏伟，藏品丰富。</li>
        <li>长城</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="长城" class="place-image"> 长城是世界文化遗产，是中国古代的防御工程奇迹。</li>
        <li>天安门广场</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="天安门广场" class="place-image"> 天安门广场是政治活动和庆典活动的中心。</li>
        <li>颐和园</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="颐和园" class="place-image"> 颐和园是中国古典园林的典范，风景秀丽，建筑精美。</li>
        <li>798艺术区</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="798艺术区" class="place-image"> 798艺术区是现代艺术和文化的重要聚集地。</li>
      </ul>

      <h2>美食推荐</h2>
      <p>北京以其独特的地方美食吸引着众多游客：</p>
      <ul>
        <li>北京烤鸭</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="北京烤鸭" class="food-image"> 北京烤鸭以其酥脆的皮和嫩滑的肉闻名世界。</li>
        <li>老北京炸酱面</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="老北京炸酱面" class="food-image"> 老北京炸酱面是北京人爱吃的传统面食。</li>
        <li>驴打滚</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="驴打滚" class="food-image"> 驴打滚是一种香甜可口的传统小吃。</li>
        <li>豆汁儿</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="豆汁儿" class="food-image"> 豆汁儿是老北京人爱喝的传统饮品。</li>
        <li>炒板栗</li>
        <li><img src="@/pictures/page1/beijing.jpg" alt="炒板栗" class="food-image"> 炒板栗是北京秋季的特色小吃。</li>
      </ul>

      <h2>实用信息</h2>
      <p>来北京旅游需要注意的一些实用信息：</p>
      <ul>
        <li>交通：北京有发达的地铁网络，出行便捷。</li>
        <li>季节：春秋季是最佳的旅行时节，避开夏季和冬季的高峰。</li>
        <li>购物：王府井大街是购物的主要区域，有各种高端品牌和特色小店。</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 可以在此处添加逻辑处理或导入其他模块
</script>

<style scoped>
.guide-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.guide-content {
  font-size: 16px;
  line-height: 1.6;
}

h1, h2 {
  color: #333;
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
}
</style>
