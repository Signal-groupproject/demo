<template>
  <div class="nature-tour">
    <h1>自然旅游的游玩方式</h1>
    <div class="tour-methods">
      <a v-for="(method, index) in methods" :key="index" class="method-item" :href="method.link" target="_blank">
        <h2>{{ method.title }}</h2>
        <img :src="method.image" :alt="method.title" class="method-image" />
        <p>{{ method.description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NatureTour",
  data() {
    return {
      methods: [
        {
          id: 1,
          title: "徒步旅行",
          image: require("./natureImg/徒步.png"),
          description:
              "适合在山地、森林和湖泊周围进行，强调与自然的亲密接触。推荐路线如长城徒步、川藏线徒步。",
          link: "https://www.sohu.com/a/76554798_376239"
        },
        {
          id: 2,
          title: "野营露宿",
          image: require("./natureImg/野营.png"),
          description:
              "可以在森林、山地和湖泊景区内搭建帐篷，享受夜晚的星空和清晨的露珠。注意选择合法露营地点，注意安全和环保。",
          link: "https://www.qibuluo.com/zhinan/1506/1052.html"
        },
        {
          id: 3,
          title: "探险活动",
          image: require("./natureImg/探险.png"),
          description:
              "包括攀岩、漂流、洞穴探险等，适合于追求刺激和挑战的游客。推荐地点如黄山的攀岩、张家界的漂流。",
          link: "http://www.dikuoya.com/?bd_vid=8830184175516507153"
        },
        {
          id: 4,
          title: "生态旅游",
          image: require("./natureImg/生态旅游.png"),
          description:
              "强调环境保护和可持续发展，如观鸟、植树、环保教育活动等。适合人群包括家庭游、学生团。",
          link: "https://www.mafengwo.cn/gonglve/ziyouxing/409896.html"
        },
        {
          id: 5,
          title: "湖泊钓鱼",
          image: require("./natureImg/钓鱼.png"),
          description:
              "在清澈的湖泊中享受宁静的钓鱼乐趣，体验捕捉美味食材的乐趣。适合休闲和享受大自然的人群。",
          link: "https://www.diaoyu123.com/diaodianxuanze/108029.html"
        },
        {
          id: 6,
          title: "滑雪冬季",
          image: require("./natureImg/滑雪.png"),
          description:
              "冬季的雪山是滑雪爱好者的天堂，体验飞奔在雪地上的速度与刺激。推荐地点如张家口、哈尔滨等滑雪胜地。",
          link: "https://www.mafengwo.cn/gonglve/ziyouxing/406402.html"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nature-tour {
  text-align: center;
  padding: 20px;
  background-image: url('./natureImg/p1.png'); /* 背景图片路径根据实际情况调整 */
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* 确保背景图片充满整个视口 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nature-tour h1 {
  margin-top: 30px;
  margin-bottom: 40px;
  color: #fff; /* 文字颜色调整为白色，以适应背景 */
}

.tour-methods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.tour-methods h2{
  color: #52bdf6;
}

.tour-methods p{
  color: #000000;
}

.method-item {
  width: 300px;
  height: 400px; /* 调整卡片的高度 */
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer; /* 添加光标样式以指示可点击 */
  overflow: hidden; /* 如果内容过长，隐藏溢出部分 */
}

.method-item:hover {
  transform: scale(1.05);
}

.method-image {
  width: 100%;
  height: 200px; /* 调整图片高度 */
  object-fit: cover; /* 保持图片比例填充 */
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.method-item h2 {
  font-size: 1.5rem; /* 调整标题字体大小 */
}

.method-item p {
  font-size: 1rem; /* 调整描述字体大小 */
  line-height: 1.5; /* 设置行高 */
  height: 100px; /* 调整描述内容高度 */
  overflow: hidden; /* 如果描述过长，隐藏溢出部分 */
}
</style>