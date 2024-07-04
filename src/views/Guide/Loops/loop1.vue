<template>
  <div class="city-guide">
    <h1>大理旅游攻略</h1>

    <!-- 大理概述 -->
    <section class="section">
      <h2>大理概述</h2>
      <div class="text-box">
        <p>大理，位于云南省西部，是中国著名的旅游胜地，以其美丽的自然风光和丰富的文化遗产而闻名。</p>
        <p>大理被誉为“风花雪月”的故乡，是许多游客心中的世外桃源。</p>
      </div>
      <img :src="require('@/views/Guide/Loops/loopImages/dali.jpg')" alt="大理">
    </section>

    <!-- 热门景点 -->
    <section class="section">
      <h2>热门景点</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>大理古城</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali1.jpg')" alt="大理古城">
          <div class="text-box">
            <p>大理古城是一座保存完好的古老城镇，以其独特的白族建筑风格和丰富的历史文化著称。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>洱海</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali2.jpg')" alt="洱海">
          <div class="text-box">
            <p>洱海是大理的标志性景点之一，以其清澈的湖水和美丽的湖滨风光吸引了无数游客。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>崇圣寺三塔</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali3.jpg')" alt="崇圣寺三塔">
          <div class="text-box">
            <p>崇圣寺三塔是大理的重要文化遗产，是中国南方最古老、保存最完整的佛塔建筑群之一。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>苍山</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali4.jpg')" alt="苍山">
          <div class="text-box">
            <p>苍山是大理的天然屏障，以其雄伟的山峰和丰富的植物群落而著称。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>喜洲古镇</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali5.jpg')" alt="喜洲古镇">
          <div class="text-box">
            <p>喜洲古镇是大理保存最为完好的白族古镇，保留了大量的传统白族民居和文化遗产。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>双廊</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali6.jpg')" alt="双廊">
          <div class="text-box">
            <p>双廊是洱海边的一个美丽小镇，以其独特的湖景和悠闲的生活方式而闻名。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 美食推荐 -->
    <section class="section">
      <h2>美食推荐</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>饵块</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali7.jpg')" alt="饵块">
          <div class="text-box">
            <p>饵块是大理的传统小吃，以其软糯的口感和多样的吃法深受当地人和游客的喜爱。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>乳扇</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali8.jpg')" alt="乳扇">
          <div class="text-box">
            <p>乳扇是大理的特色乳制品，以其独特的口感和丰富的营养而著称。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>白族三道茶</h3>
          <img :src="require('@/views/Guide/Loops/loopImages/dali9.jpg')" alt="白族三道茶">
          <div class="text-box">
            <p>白族三道茶是白族待客的一种礼仪，包含了苦茶、甜茶和回味茶，象征着人生的三种境界。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 旅游路线推荐 -->
    <section class="section">
      <h2>旅游路线推荐</h2>
      <div class="text-box">
        <h3>1. 文化古迹游</h3>
        <p><strong>第一天：</strong>大理古城 -> 崇圣寺三塔 -> 洱海公园</p>
        <p><strong>第二天：</strong>喜洲古镇 -> 苍山 -> 双廊</p>

        <h3>2. 美食体验游</h3>
        <p><strong>第一天：</strong>大理古城小吃街 -> 洱海边餐厅 -> 白族特色餐馆</p>
        <p><strong>第二天：</strong>喜洲小吃 -> 双廊湖景餐厅 -> 大理传统菜馆</p>

        <h3>3. 自然风光游</h3>
        <p><strong>第一天：</strong>洱海 -> 苍山</p>
        <p><strong>第二天：</strong>喜洲古镇 -> 双廊</p>
      </div>
    </section>

    <!-- 交通信息 -->
    <section class="section">
      <h2>交通信息</h2>
      <div class="text-box">
        <p>大理市内交通便捷，可以乘坐公交车、出租车或租赁自行车出行。</p>
        <p>从大理机场到市中心约需30分钟车程。</p>
      </div>
      <img :src="require('@/views/Guide/Loops/loopImages/dali10.jpg')" alt="大理交通路线图">
    </section>
  </div>
</template>
0
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
