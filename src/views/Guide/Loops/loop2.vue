<template>
  <div class="city-guide">
    <h1>重庆旅游攻略</h1>

    <!-- 重庆概述 -->
    <section class="section">
      <h2>重庆概述</h2>
      <div class="text-box">
        <p>重庆，简称“渝”，是中国直辖市之一，位于中国西南地区，长江上游，是中国重要的中心城市之一。</p>
        <p>重庆以其独特的山城地貌、火锅文化和夜景闻名。</p>
      </div>
      <img :src="require('@/views/Guide/Loops/loopImages/chongqing1.jpg')" alt="重庆">
    </section>

    <!-- 热门景点 -->
    <section class="section">
      <h2>热门景点</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>洪崖洞</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing2.jpg')" alt="洪崖洞">
          <div class="text-box">
            <p>洪崖洞是重庆最具特色的吊脚楼群，也是游客打卡必到的网红景点之一。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>磁器口古镇</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing3.jpg')" alt="磁器口古镇">
          <div class="text-box">
            <p>磁器口古镇有着千年历史，是重庆的历史文化街区，保留了大量的明清建筑。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>长江索道</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing4.jpg')" alt="长江索道">
          <div class="text-box">
            <p>长江索道是重庆的一条跨江索道，被誉为“万里长江第一条空中走廊”。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>解放碑</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing5.jpg')" alt="解放碑">
          <div class="text-box">
            <p>解放碑是重庆的标志性建筑，也是商业和文化的中心。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>武隆天坑地缝</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing6.jpg')" alt="武隆天坑地缝">
          <div class="text-box">
            <p>武隆天坑地缝是世界自然遗产，以其壮丽的自然景观和丰富的地质资源著称。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>朝天门</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing7.jpg')" alt="朝天门">
          <div class="text-box">
            <p>朝天门是重庆的水陆交通枢纽，也是观赏两江汇流的最佳地点。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 美食推荐 -->
    <section class="section">
      <h2>美食推荐</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>重庆火锅</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing8.jpg')" alt="重庆火锅">
          <div class="text-box">
            <p>重庆火锅以其麻辣鲜香闻名全国，是到重庆必尝的美食。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>小面</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing9.jpg')" alt="重庆小面">
          <div class="text-box">
            <p>重庆小面是重庆特色面食，以其劲道的面条和丰富的佐料吸引众多食客。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>酸辣粉</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/chongqing10.jpg')" alt="重庆酸辣粉">
          <div class="text-box">
            <p>酸辣粉是一种具有重庆地方风味的传统小吃，以其酸辣爽口著称。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 旅游路线推荐 -->
    <section class="section">
      <h2>旅游路线推荐</h2>
      <div class="text-box">
        <h3>1. 文化古迹游</h3>
        <p><strong>第一天：</strong>洪崖洞 -> 磁器口古镇 -> 解放碑</p>
        <p><strong>第二天：</strong>武隆天坑地缝 -> 朝天门 -> 长江索道</p>

        <h3>2. 美食体验游</h3>
        <p><strong>第一天：</strong>南滨路 -> 洪崖洞 -> 火锅店</p>
        <p><strong>第二天：</strong>解放碑 -> 小面馆 -> 磁器口古镇</p>

        <h3>3. 自然风光游</h3>
        <p><strong>第一天：</strong>武隆天坑地缝 -> 芙蓉洞</p>
        <p><strong>第二天：</strong>长江索道 -> 南山一棵树观景台</p>
      </div>
    </section>

    <!-- 交通信息 -->
    <section class="section">
      <h2>交通信息</h2>
      <div class="text-box">
        <p>重庆市内交通便利，可以乘坐地铁、公交或出租车。</p>
        <p>从重庆江北国际机场到市中心约需40分钟。</p>
      </div>
      <img :src="require('@/views/Guide/Loops/loopImages/chongqing11.jpg')" alt="重庆交通路线图">
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
</style>
