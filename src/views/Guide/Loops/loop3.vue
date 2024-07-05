<template>
  <div class="city-guide">
    <h1>北京旅游攻略</h1>
    <!-- Bilibili 视频 -->
    <section class="video-section">
      <div class="video-container">
        <iframe
            src="//player.bilibili.com/player.html?isOutside=true&aid=533845239&bvid=BV1Xu411g7xd&cid=1277515196&p=1"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
            class="video-iframe"
        ></iframe>
      </div>
    </section>
    <!-- 北京概述 -->
    <section class="section">
      <h2>北京概述</h2>
      <div class="text-box">
        <p>北京，简称“京”，是中华人民共和国的首都，也是中国的政治、文化、科技、国际交流中心。</p>
        <p>北京以其丰富的历史遗迹、深厚的文化底蕴和现代化的城市面貌而闻名。</p>
      </div>
      <img :src="require('@/views/Guide/Loops/loopImages/beijing.jpg')" alt="北京">
    </section>

    <!-- 热门景点 -->
    <section class="section">
      <h2>热门景点</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>故宫</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing2.jpg')" alt="故宫">
          <div class="text-box">
            <p>故宫是中国明清两代的皇家宫殿，也是世界上现存最大、最完整的古代木质结构建筑群。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>长城</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing3.jpg')" alt="长城">
          <div class="text-box">
            <p>长城是中国古代的军事防御工程，被誉为世界七大奇迹之一，横跨多个省份。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>天安门广场</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing4.jpg')" alt="天安门广场">
          <div class="text-box">
            <p>天安门广场是世界上最大的城市广场，也是中国政治活动和庆典的重要场所。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>颐和园</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing5.jpg')" alt="颐和园">
          <div class="text-box">
            <p>颐和园是中国现存规模最大、保存最完整的皇家园林之一，以其美丽的湖泊和古典建筑而著称。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>798艺术区</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing6.jpg')" alt="798艺术区">
          <div class="text-box">
            <p>798艺术区是北京的艺术文化中心，汇集了众多画廊、艺术工作室和时尚咖啡馆。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>南锣鼓巷</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing7.jpg')" alt="南锣鼓巷">
          <div class="text-box">
            <p>南锣鼓巷是北京最古老的街区之一，充满了老北京的风情和现代时尚的元素。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 美食推荐 -->
    <section class="section">
      <h2>美食推荐</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>北京烤鸭</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing8.jpg')" alt="北京烤鸭">
          <div class="text-box">
            <p>北京烤鸭是北京最著名的传统美食，以其酥脆的皮和嫩滑的肉而闻名。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>炸酱面</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing9.jpg')" alt="炸酱面">
          <div class="text-box">
            <p>炸酱面是北京传统的面食，以其浓郁的酱香味吸引了众多食客。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>驴打滚</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/beijing10.jpg')" alt="驴打滚">
          <div class="text-box">
            <p>驴打滚是北京的一种传统小吃，糯米粉外裹豆沙馅，外层滚上黄豆面。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 旅游路线推荐 -->
    <section class="section">
      <h2>旅游路线推荐</h2>
      <div class="text-box">
        <h3>1. 文化古迹游</h3>
        <p><strong>第一天：</strong>故宫 -> 天安门广场 -> 王府井大街</p>
        <p><strong>第二天：</strong>颐和园 -> 圆明园 -> 798艺术区</p>

        <h3>2. 美食体验游</h3>
        <p><strong>第一天：</strong>簋街 -> 南锣鼓巷 -> 烤鸭店</p>
        <p><strong>第二天：</strong>前门大街 -> 炸酱面馆 -> 北京小吃街</p>

        <h3>3. 自然风光游</h3>
        <p><strong>第一天：</strong>长城 -> 十三陵</p>
        <p><strong>第二天：</strong>北海公园 -> 什刹海</p>
      </div>
    </section>

    <!-- 交通信息 -->
    <section class="section">
      <h2>交通信息</h2>
      <div class="text-box">
        <p>北京市内交通便利，可以乘坐地铁、公交或出租车。</p>
        <p>从北京首都国际机场到市中心约需1小时。</p>
      </div>
      <img :src="require('@/views/Guide/Loops/loopImages/beijing11.jpg')" alt="北京交通路线图">
    </section>
  </div>
</template>

<script>
export default {
  name: 'CityGuide',
  // 这里可以添加组件的逻辑和数据
}
</script>

<style scoped>
.city-guide {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #333;
}

.section {
  margin-bottom: 30px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.text-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

p {
  line-height: 1.6;
}

.video-section {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  padding-top: 56.25%; /* 16:9 aspect ratio */
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
