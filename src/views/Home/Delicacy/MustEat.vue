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
          title: "佛跳墙",
          image: require("./Dimage/佛跳墙.png"),
          description:
              "佛跳墙是福建福州的一道名菜，也是当地宴席上的压轴大菜。它以慢火煨制的方式制成，配料包括鲍鱼、海参、蹄筋、排骨、鸽蛋等。",
          link: "https://www.bilibili.com/video/BV1PV411174z/"
        },
        {
          id: 2,
          title: "荔枝肉",
          image: require("./Dimage/荔枝肉.png"),
          description:
              "荔枝肉是福州的一道传统名菜，由于外形形似荔枝而得名。它以荔枝的颜色、形状和味道命名，吃起来滑嫩酸甜。荔枝肉经过油炸后，外表酥脆肉质鲜嫩。",
          link: "https://www.sohu.com/a/224984686_349458"
        },
        {
          id: 3,
          title: "莆田卤面",
          image: require("./Dimage/莆田卤面.png"),
          description:
              "莆田卤面是福建莆田的一道传统美食，以浓稠的卤汤和配料丰富的面条为主要特点。浓稠的卤汤里有海鲜、花蛤等食材，加入香菇、虾干等配料，既鲜美又营养。",
          link: "https://baike.baidu.com/item/%E8%8E%86%E7%94%B0%E5%8D%A4%E9%9D%A2/372491"
        },
        {
          id: 4,
          title: "福鼎肉片",
          image: require("./Dimage/福鼎肉片.jpg"),
          description:
              "福鼎肉片是福建省福鼎市一种很有名的地方传统名吃，以精瘦肉、淀粉等原料制成。它最过瘾的吃法是辣椒醋、香菜、紫菜、榨菜全都加进去，吃起来香辣中流露出淡淡的香菜之味。",
          link: "http://www.fuding.gov.cn/zjfd/mlfd/fdms/202311/t20231113_1882752.htm"
        },
        {
          id: 5,
          title: "厦门沙茶面",
          image: require("./Dimage/厦门沙茶面.png"),
          description:
              "厦门沙茶面是厦门最有名的特产小吃之一，它以沙茶酱和高汤为主要原材料，口味咸鲜微辣。沙茶面的特点是酱料独特，其中最有特色的是沙茶酱。",
          link: "https://www.tesegu.com/techan/176.html"
        },
        {
          id: 6,
          title: "烧鹅",
          image: require("./Dimage/img_1.png"),
          description:
              "烧鹅是广东的一道传统美食，以鹅为主要食材，经过腌制、烤制等多道工序制作而成。外皮酥脆，肉质鲜嫩，风味独特。",
          link: "https://baike.so.com/doc/6544928-6758672.html"
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
  background-image: url('./Dimage/美食背景图.png'); /* 背景图片路径根据实际情况调整 */
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