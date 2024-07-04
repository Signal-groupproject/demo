<template>
  <div class="page">
    <h3 class="t0">传统文化</h3>
    <h1 class="Htitle">非遗文化</h1>
    <h2 class="t1">秦腔</h2>
    <div class="spacer"></div>

    <p class="intro intro-box">
      秦腔，别称"梆子腔""陕西梆子" ，中国汉族最古老的戏剧之一，<br>
      起于西周，源于西府，成熟于秦。秦腔因其整套成熟、完整的表演<br>
      体系，对各地的剧种产生了不同程度的影响，并直接影响了梆子腔<br>
      成为梆子腔剧种的始祖。秦腔的表演技艺朴实、粗犷、豪放，富有<br>
      夸张性，生活气息浓厚，技巧丰富。

    </p>

    <div class="spacer"></div>
    <div class="grid-container">
      <div class="grid-item1">
        <img src="./Himage/秦腔1.jpg" class="image">
      </div>
      <div class="grid-item2">
        <div class="Hcard" :class="{ 'fade-in': cardHoverIndex === 0 }" @click="showNewCard(0)" @mouseover="cardHoverIndex = 0" @mouseout="cardHoverIndex = -1">
          <h3 class="card-title">秦腔的价值</h3>
          <p class="card-description">
            秦腔，这门承载着西北大地厚重历史与民俗风情的古老戏曲艺术，<br>
            犹如黄土高原上的一颗璀璨明珠。听秦腔，仿佛能穿越时空，亲历<br>
            那金戈铁马、岁月峥嵘。

          </p>
        </div>
      </div>
      <div class="grid-item3">
        <div class="Hcard" :class="{ 'fade-in': cardHoverIndex === 1 }" @click="showNewCard(1)" @mouseover="cardHoverIndex = 1" @mouseout="cardHoverIndex = -1">
          <h3 class="card-title">秦腔的语言</h3>
          <p class="card-description">
            秦腔可分为东西两路，西路入川为梆子；东路在山西为晋剧，在河南为<br>
            豫剧，在河北为河北梆子。秦腔可以称为"百戏之祖"。<br>
            秦腔作为一种地方文化，所以它一大的特点是所谓的唱、念全都是以陕<br>
            西关中方言为基础的，同时也融入了我国汉唐时期的一些诗、词、曲的<br>
            语言，这些语言特点与音乐特点相融合，共同形成了秦腔艺术独特的声<br>
            腔风格，即语调高亢激昂、语音生硬、语气硬朗结实等风格。

          </p>
        </div>
      </div>
      <div class="grid-item4">
        <img src="./Himage/秦腔2.png" class="image">
      </div>
    </div>

    <div class="new-card" v-if="showNewCardFlag" @click="hideNewCard">
      <div class="card-content">
        <h3 class="card-title">{{ newCard.title }}</h3>
        <p class="card-description">{{ newCard.description }}</p>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      cardHoverIndex: -1,
      showNewCardFlag: false,
      newCard: {
        title: '',
        description: ''
      }
    };
  },
  methods: {


    showNewCard(index) {
      this.newCard.title = this.cards[index].title;
      this.newCard.description = this.cards[index].description;
      this.showNewCardFlag = true;
    },



    hideNewCard() {
      this.showNewCardFlag = false;
    }
  },
  computed: {
    cards() {
      return [
        {
          title: '秦腔的价值',
          description:

              '秦腔剧种内容主要以汉民族历史文化为核心，融合自古至今其他各民族民族文化的产生的产物，是中华民族文化中一颗璀璨夺目的明珠，是现代戏曲文化、伴奏音乐文化得以发展的基础，它非常深刻地体现了大汉文化的进步和发展，成为华夏民族具有的精神财富的最重要的组成部分。\n' +
              '秦腔是我国汉民族文化发展的活化石，它为研究占人口绝大多数的汉族文化、追寻中国古代久远艺术内容和形态提出了重要的依据。\n' +
              '秦腔在我国西部地区有深厚的群众基础，是这些地区人民群众不可缺少的文化精神生活依靠，是人们互相交流情感的一种方式，充分体现了它的历史性和现实功能。',

          link: 'https://example.com/link1'
        },
        {
          title: '秦腔的唱腔',
          description:
          '秦腔的唱腔为板式变化体，秦腔唱腔包括"板路"和"彩腔"两部分，板路有二六板、慢板、箭板、二倒板、带板、滚板等六类基本板式。\n' +
              '秦腔的板式和彩腔每部分均有欢音和苦音之分。 苦音腔最能代表秦腔特色，深沉哀婉慷慨激昂，适合悲愤，怀念、凄哀的感情。欢音腔欢乐明快，刚健有力，擅长表现喜悦、明朗的感情。\n' +
              '秦腔宽音大嗓，直起直落，既有浑厚深沉、悲壮高昂、慷慨激越的风格，同时又兼备缠绵悱恻、细腻柔和、轻快活泼的特点，凄切委婉，优美动听，为广大群众所喜爱。',

          link: 'https://example.com/link2'
        },
        {
          title: '卡片标题 3',
          description: '这是卡片 3 的描述',
          link: 'https://example.com/link3'
        }
      ];
    }
  }
};
</script>

<style>
.page {
  text-align: center;
}

.t0 {
  font-size: 15px;

  padding: 10px 20px;
  display: inline-block;
  background-color: #ad6407;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  margin-top: 20px;
}

.Htitle {
  font-size: 45px;
  font-weight: bold;
  margin-top: 20px;
  color: #da8023;
}

.t1 {
  font-size: 30px;
  font-weight: bold;
  color: #000000;
}

.intro {
  font-size: 18px;
  margin-bottom: 20px;
}

.intro-box {
  border: 3px dashed #ad6407;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
}

.spacer {
  height: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0px;
}

.grid-item1 {
  position: relative;
  width: 600px;
  height: 500px;
}

.grid-item2{
  position: relative;
  width: 400px;
  height: 500px;
  color: #ffffff;
  margin-top: 100px;
}

.grid-item3{
  position: relative;
  width: 400px;
  height: 500px;
  color: #ffffff;
  margin-top: 100px;
  margin-left: 60px;
}

.grid-item4{
  position: relative;
  width: 600px;
  height: 500px;
  margin-right: 30px;
}

.image {
  width: 60%;
  height: 80%;
  object-fit: cover;
  border-radius: 10px;
}

.Hcard {
  background-color: #f69633;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  text-indent: 30px;
  line-height: 1.5;
  font-size: 16px;
}

.fade-in {
  animation: fade-in 0.5s;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.page {
  background-image: url('./Himage/img.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.new-card {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.card-content {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
}

.new-card .card-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
}

.new-card .card-description {
  font-size: 18px;
}
</style>