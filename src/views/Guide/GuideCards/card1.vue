<template>
  <div class="city-guide">
    <h1>成都旅游攻略</h1>

    <!-- 成都概述 -->
    <section class="section">
      <h2>成都概述</h2>
      <div class="text-box">
        <p>成都，简称“蓉”，是四川省省会，中国西南地区重要的中心城市。</p>
        <p>成都以其悠久的历史、丰富的文化和美味的川菜而闻名。</p>
      </div>
      <img :src="require('@/views/Guide/GuideCards/cardImage/1.jpg')" alt="成都">
    </section>

    <!-- 热门景点 -->
    <section class="section">
      <h2>热门景点</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>武侯祠</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/2.jpg')" alt="武侯祠">
          <div class="text-box">
            <p>武侯祠是一座纪念三国时期蜀汉丞相诸葛亮的祠庙，也是成都市内著名的古迹。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>宽窄巷子</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/3.jpg')" alt="宽窄巷子">
          <div class="text-box">
            <p>宽窄巷子是成都著名的历史文化街区，有着典型的四川巴蜀民居风格。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>锦里古街</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/4.jpg')" alt="锦里古街">
          <div class="text-box">
            <p>锦里是成都最具代表性的旅游景点之一，融合了古朴文化与现代商业。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>大熊猫基地</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/5.jpg')" alt="大熊猫基地">
          <div class="text-box">
            <p>成都大熊猫基地是中国乃至全球最著名的大熊猫繁育和保护中心。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>杜甫草堂</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/6.jpg')" alt="杜甫草堂">
          <div class="text-box">
            <p>杜甫草堂是唐代诗人杜甫的故居，保留了大量关于杜甫的文化遗产和历史遗迹。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>青城山</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/7.jpg')" alt="青城山">
          <div class="text-box">
            <p>青城山位于成都市西南，是道教名山之一，以其险峻的山势和古朴的道观建筑闻名。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 美食推荐 -->
    <section class="section">
      <h2>美食推荐</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>火锅</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/9.jpg')" alt="火锅">
          <div class="text-box">
            <p>成都火锅以麻辣见长，是成都人最爱的一道特色菜。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>兔头</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/10.jpg')" alt="兔头">
          <div class="text-box">
            <p>成都的兔头火锅以其独特的鲜香味道吸引了无数食客。</p>
          </div>
        </div>
        <div class="grid-item">
          <h3>夫妻肺片</h3>
          <img :src="require('@/views/Guide/GuideCards/cardImage/11.jpg')" alt="夫妻肺片">
          <div class="text-box">
            <p>夫妻肺片是成都的一道传统川菜，以其麻辣爽口著称。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>旅游路线推荐</h2>
      <div class="text-box">

        <!-- 文化古迹游 -->
        <h3>1. 文化古迹游</h3>
        <p><strong>第一天</strong></p>
        <p><strong>上午：</strong> 武侯祠
        <p>参观武侯祠，了解三国时期蜀汉丞相诸葛亮的生平和历史背景。</p>
        </p>
        <p><strong>午餐：</strong> 在周围的传统餐馆品尝地道的川菜。</p>
        <p><strong>下午：</strong> 杜甫草堂
        <p>参观杜甫草堂，感受唐代诗人杜甫的生活和文化。</p>
        </p>

        <p><strong>第二天</strong></p>
        <p><strong>上午：</strong> 宽窄巷子
        <p>漫步宽窄巷子，体验成都传统民居和文化艺术品。</p>
        </p>
        <p><strong>午餐：</strong> 在宽窄巷子或者锦里古街品尝成都小吃。</p>
        <p><strong>下午：</strong> 锦里古街
        <p>游览锦里古街，购买手工艺品或者尝试当地的甜品和茶点。</p>
        </p>

        <!-- 美食体验游 -->
        <h3>2. 美食体验游</h3>
        <p><strong>第一天</strong></p>
        <p><strong>全天：</strong> 火锅体验
        <p><strong>上午：</strong> 尝试麻辣火锅，可以选择知名的火锅连锁店或地方性小火锅店。</p>
        <p><strong>下午：</strong> 尝试清汤火锅，享受不同口味的成都火锅。</p>
        </p>

        <p><strong>第二天</strong></p>
        <p><strong>全天：</strong> 小吃探索
        <p><strong>上午：</strong> 到市场或地摊上品尝串串香、兔头火锅等特色小吃。</p>
        <p><strong>下午：</strong> 参观成都烹饪博物馆，了解川菜文化和历史。</p>
        </p>

        <!-- 自然风光游 -->
        <h3>3. 自然风光游</h3>
        <p><strong>第一天</strong></p>
        <p><strong>上午：</strong> 成都大熊猫基地
        <p>观赏熊猫，并了解它们的生活习性和保护现状。</p>
        </p>
        <p><strong>午餐：</strong> 在大熊猫基地周围的餐馆品尝午餐。</p>
        <p><strong>下午：</strong> 锦里古街
        <p>参观锦里古街，购买纪念品或者体验成都传统手工艺。</p>
        </p>

        <p><strong>第二天</strong></p>
        <p><strong>上午：</strong> 青城山
        <p>早晨爬青城山，欣赏自然风光和古建筑。</p>
        </p>
        <p><strong>午餐：</strong> 在山下的餐馆品尝当地山间菜。</p>
        <p><strong>下午：</strong> 回到市区，自由活动或购物。</p>
        </p>

      </div>
    </section>

    <!-- 交通信息 -->
    <section class="section">
      <h2>交通信息</h2>
      <div class="text-box">
        <p>成都市内交通便利，可以乘坐地铁、公交或出租车。</p>
        <p>从成都双流国际机场到市中心约需40分钟。</p>
      </div>
      <img :src="require('@/views/Guide/GuideCards/cardImage/8.jpg')" alt="成都交通路线图">
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
