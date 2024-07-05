<template>
  <div class="page-container">
    <el-container class="full-height">
      <el-header>中国各省代表美食</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="option1" @select="handleMenuSelect">
            <el-menu-item index="option1">福建</el-menu-item>
            <el-menu-item index="option2">广东</el-menu-item>
            <el-menu-item index="option3">海南</el-menu-item>
            <el-menu-item index="option4">重庆</el-menu-item>
            <el-menu-item index="option5">北京</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main-container">
          <div v-show="selectedOption === 'option1'" class="option-container">
            <div class="content-row" v-for="index in 4" :key="index">
              <div class="content-item">
                <div class="content-left">
                  <img :src="getImageUrl(index)" :alt="'Image ' + index" style="max-width: 50%; height: auto;">
                </div>
                <div class="content-middle">
                  <p class="description" v-for="paragraph in getDescriptions(index)" :key="paragraph">{{ paragraph }}</p>
                </div>
                <div class="content-right">
                  <a :href="getLinkUrl(index)" target="_blank" class="learn-more">了解更多</a>
                </div>
              </div>
            </div>
          </div>

          <div v-show="selectedOption === 'option2'" class="option-container">
            <div class="content-row" v-for="index in 2" :key="index">
              <div class="content-item">
                <div class="content-left">
                  <img :src="getImageUrlForOption2(index)" :alt="'Image ' + index" style="max-width: 50%; height: auto;">
                </div>
                <div class="content-middle">
                  <p class="description" v-for="paragraph in getDescriptionsForOption2(index)" :key="paragraph">{{ paragraph }}</p>
                </div>
                <div class="content-right">
                  <a :href="getLinkUrlForOption2(index)" target="_blank" class="learn-more">了解更多</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Repeat the above structure for other options -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: 'option1',
      descriptions: [
        [
          '佛跳墙',
          '佛跳墙是福建福州的一道名菜，也是当地宴席上的压轴大菜。它以慢火煨制的方式制成，配料包括鲍鱼、海参、蹄筋、排骨、鸽蛋等。'
        ],
        [
          '福鼎肉片',
          '福鼎肉片是福建省福鼎市一种很有名的地方传统名吃，以精瘦肉、淀粉等原料制成。它最过瘾的吃法是辣椒醋、香菜、紫菜、榨菜全都加进去，吃起来香辣中流露出淡淡的香菜之味。'
        ],
        [
          '荔枝肉',
          '荔枝肉是福州的一道传统名菜，由于外形形似荔枝而得名。它以荔枝的颜色、形状和味道命名，吃起来滑嫩酸甜。荔枝肉经过油炸后，外表酥脆肉质鲜嫩。'
        ],
        [
          '莆田卤面',
          '莆田卤面是福建莆田的一道传统美食，以浓稠的卤汤和配料丰富的面条为主要特点。浓稠的卤汤里有海鲜、花蛤等食材，加入香菇、虾干等配料，既鲜美又营养。'
        ],
        [
          '厦门沙茶面',
          '厦门沙茶面是厦门最有名的特产小吃之一，它以沙茶酱和高汤为主要原材料，口味咸鲜微辣。沙茶面的特点是酱料独特，其中最有特色的是沙茶酱。'
        ]
      ],
      descriptionsForOption2: [
        [
          '烧鹅',
          '烧鹅是广东的一道传统美食，以鹅为主要食材，经过腌制、烤制等多道工序制作而成。外皮酥脆，肉质鲜嫩，风味独特。'
        ],
        [
            '白切鸡',
            '白切鸡是广东最为经典的家常菜之一，选用鸡整体或鸡块，经过煮熟后，撒上葱花，然后配以鸡油、酱油、姜汁等调料。白切鸡口感嫩滑，汤汁鲜美，是广东人餐桌上常见的美食之一。'
        ]
      ],
      linkUrls: [
        'https://www.bilibili.com/video/BV1PV411174z/',
        'http://www.fuding.gov.cn/zjfd/mlfd/fdms/202311/t20231113_1882752.htm',
        'https://www.sohu.com/a/224984686_349458',
        'https://baike.baidu.com/item/%E8%8E%86%E7%94%B0%E5%8D%A4%E9%9D%A2/372491',
        'link-url-5'
      ],
      linkUrlsForOption2: [
        'https://baike.so.com/doc/6544928-6758672.html',
        'https://www.bilibili.com/video/BV1Y64y1W78H/'
      ],
      imagePaths: [
        require('./Dimage/佛跳墙.png'),
        require('./Dimage/福鼎肉片.jpg'),
        require('./Dimage/荔枝肉.png'),
        require('./Dimage/莆田卤面.png'),
        require('./Dimage/漫长的季节.png')
      ],
      imagePathsForOption2: [
        require('./Dimage/img_1.png'),
        require('./Dimage/img_2.png')
      ],
    };
  },
  methods: {
    handleMenuSelect(index) {
      this.selectedOption = index;
    },
    getImageUrl(index) {
      return this.imagePaths[index - 1];
    },
    getDescriptions(index) {
      return this.descriptions[index - 1];
    },
    getLinkUrl(index) {
      return this.linkUrls[index - 1];
    },
    getImageUrlForOption2(index) {
      return this.imagePathsForOption2[index - 1];
    },
    getDescriptionsForOption2(index) {
      return this.descriptionsForOption2[index - 1];
    },
    getLinkUrlForOption2(index) {
      return this.linkUrlsForOption2[index - 1];
    }
  }
};
</script>

<style scoped>
html, body, .page-container {
  height: 100%;
  margin: 0;
}

.page-container {
  background-image: url('./Dimage/美食背景图.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
}

.el-container.full-height {
  flex: 1;
}

.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 32px;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.el-main {
  color: #333;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.main-container {
  overflow-y: auto;
}

.option-container {
  display: flex;
  flex-wrap: wrap;
}

.content-row {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}

.content-item {
  display: flex;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.content-left {
  flex-basis: 20%;
}

.content-middle {
  flex-basis: 70%;
  padding: 0 10px;
}

.content-right {
  flex-basis: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.description {
  text-align: left;
  display: flex;
  align-items: center;
  text-indent: 30px;
  line-height: 1.5;
}

.learn-more {
  color: #409eff;
}
</style>