<template>
  <div class="page">
    <h3 class="Vt0">传统文化</h3>
    <h1 class="Htitle">非遗文化</h1>
    <h2 class="t1">川剧变脸</h2>
    <div class="spacer"></div>

    <p class="intro intro-box">
      川剧是传统戏曲剧种之一，流行于四川东中部、重庆<br>
      及贵州、云南部分地区。川剧变脸是川剧表演的特技<br>
      之一，用于揭示剧中人物的内心及思想感情的变化，<br>
      即把不可见、不可感的抽象的情绪和心理状态变成可<br>
      见、可感的具体形象﹣-脸谱。川剧变脸是运用在川<br>
      剧艺术中塑造人物的一种特技。是揭示剧中人物内心<br>
      思想感情的一种浪漫主义手法。

    </p>

    <div class="spacer"></div>
    <div class="grid-container">
      <div class="grid-item1">
        <img src="./Himage/川剧变脸1.jpg" class="image">
      </div>
      <div class="grid-item2">
        <div class="Hcard" :class="{ 'fade-in': cardHoverIndex === 0 }" @click="showNewCard(0)" @mouseover="cardHoverIndex = 0" @mouseout="cardHoverIndex = -1">
          <h3 class="card-title">川剧变脸</h3>
          <p class="card-description">
            相传"变脸"是古代人类在面对凶猛野兽的时候，<br>
            为了生存把自己脸部用不同的方式勾画出不同形<br>
            态，以吓跑入侵的野兽。川剧把"变脸"搬上舞台，<br>
            用绝妙的技巧使它成为一门独特的艺术。<br>
            变脸的手法大体上分为三种："抹脸"、"吹脸"、<br>
            "扯脸"。此外，还有一种"运气"变脸。

          </p>
        </div>
      </div>
      <div class="grid-item3">
        <div class="Hcard" :class="{ 'fade-in': cardHoverIndex === 1 }" @click="showNewCard(1)" @mouseover="cardHoverIndex = 1" @mouseout="cardHoverIndex = -1">
          <h3 class="card-title">川剧变脸的历史起源</h3>
          <p class="card-description">
            非遗文化川剧变脸：一种艺术，千种面孔。<br>
            川剧变脸，是中国四川地区特有的戏剧表演艺术。<br>
            它以瞬息万变的面部脸谱，展现角色的内心情感和人物性格，被誉为"东方的魔术"。



          </p>
        </div>
      </div>
      <div class="grid-item4">
        <img src="./Himage/川剧变脸2.png" class="image">
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
          title: '变脸种类',
          description:
              '"抹脸"是将化妆油彩涂在脸的某一特定部位上，到时用手往脸上一抹，便可变成另外一种脸色。如果要全部变，则油彩涂於额上或眉毛上，如果只变下半部脸，则油彩可涂在脸或鼻子上。如果只需变某一个局部，则油彩只涂要变的位置即可。\n' +
              '吹脸\n' +
              '"吹脸"只适合于粉末状的化妆品，如金粉、墨粉、银粉等等。有的是在舞台的地面上摆一个很小的盒子，内装粉末，演员到时做一个伏地的舞蹈动作，趁机将脸贴近盒子一吹，粉末扑在脸上，立即变成另一种颜色的脸。'
             ,

          link: 'https://example.com/link1'
        },
        {
          title: '历史起源',
          description: '四川乡镇村落码头处林立的庙堂都会搭起戏台以作庆典，久而久之，川剧就在街头巷尾之中渐成气候。清代"两湖填四川"，为蜀地的文化带来了诸多新元素，昆、高、胡、弹、灯，诸腔戏班汇集入巴蜀各大城中的酒肆街坊之中，生、旦、净、末、丑同亮相于茶馆的小戏台之上，日久逐渐形成共同的风格，清末时统称"川戏"，后才改称"川剧"。\n' +
              '相较于川剧艺术本身的渊源和博大，变脸的技艺成形则还要归属于二十世纪。在这期间，变脸在戏班的对台戏中不断摸索、演变、精化，渐渐成为川剧的一大特色。',

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

.Vt0 {
  font-size: 15px;

  padding: 10px 20px;
  display: inline-block;
  background-color: #fa6b42;
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
  background-image: url('./Himage/img_1.png');
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