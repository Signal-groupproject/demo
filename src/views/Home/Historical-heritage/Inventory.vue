<template>
  <div class="page">
    <h3 class="t0">传统文化</h3>
    <h1 class="Htitle">非遗文化</h1>
    <h2 class="t1">打铁花</h2>
    <div class="spacer"></div>

    <p class="intro intro-box">
      打铁花是中国河南省及山西省等地流传的一种传统民<br>
      间烟火表演艺术，属于国家级非物质文化遗产。该技<br>
      艺源于北宋时期，兴盛于明清，至今已有千年历史。<br>
      表演时将高达千余度的高温铁水用特制工具击打至空<br>
      中或特定的柳枝花棚上，铁水瞬间绽放成绚烂的火<br>
      花，犹如铁树开花，同时伴有烟花鞭炮燃放，形成壮<br>
      观且极具视觉冲力的夜空景象。
    </p>

    <div class="spacer"></div>
    <div class="grid-container">
      <div class="grid-item1">
        <img src="./Himage/打铁花.png" class="image">
      </div>
      <div class="grid-item2">
        <div class="Hcard" :class="{ 'fade-in': cardHoverIndex === 0 }" @click="showNewCard(0)" @mouseover="cardHoverIndex = 0" @mouseout="cardHoverIndex = -1">
          <h3 class="card-title">打铁花中的化学知识</h3>
          <p class="card-description">
            在打铁花表演中，艺人们将高温熔化的铁水挥洒向<br>
            空中，瞬间化作千万朵绚烂的铁花，在夜空中绽放<br>
            出一幅幅壮丽的画面，犹如繁星坠落人间，场面蔚<br>
            为壮观。每一朵铁花的绽放，都是力与美的完美结<br>
            合，是匠人精神和民族智慧的生动体现。
          </p>
        </div>
      </div>
      <div class="grid-item3">
        <div class="Hcard" :class="{ 'fade-in': cardHoverIndex === 1 }" @click="showNewCard(1)" @mouseover="cardHoverIndex = 1" @mouseout="cardHoverIndex = -1">
          <h3 class="card-title">打铁花的发展历程</h3>
          <p class="card-description">
            "打铁花"是一种源自我国古代农耕文明的独特民<br>
            间艺术表演形式，主要流传于河南、山西、河北等<br>
            北方地区。它起源于北宋时期，是炼铁工匠在春节<br>
            或其他重要节庆时，以炽热的铁水击打出漫天火花，<br>
            寓意着驱邪避灾，祈福迎新的民俗活动，同时也展<br>
            现了劳动人民对生活的热爱和对美好未来的向往。

          </p>
        </div>
      </div>
      <div class="grid-item4">
        <img src="./Himage/打铁花1.png" class="image">
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
          title: '打铁花中的化学知识',
          description:

              '当铁水被拍成炽热的液滴四处飞溅的时候，液滴表面和内部会发生剧烈的氧化和还原反应。\n' +
              '首先，液滴处于高温状态，表面被强烈氧化，形成一层固态的氧化铁外壳。液滴中的碳在高温下极易与氧气发生反应，生成CO气体，使得氧化铁还原为Fe。',

          link: 'https://example.com/link1'
        },
        {
          title: '打铁花的发展历程',
          description: '在历史记载中，山西晋城市大阳镇作为古代重要的冶铁中心，其深厚的炼铁文化和发达的手工业也为打铁花技艺的形成和发展提供了土壤。\n' +
              '打铁花的起源可以追溯至北宋时期，据民间传说，它起源于河南确山县的一次农民为祈雨而熔铸大钟的活动。在活动中，铁匠无意间用柳木击打炽热铁水形成的火花驱散了乌鸦，从而形成了最初的打铁花表演形式。\n' +
              '明清鼎盛期\n' +
              '明清两代是打铁花艺术发展的鼎盛时期，尤其是山西晋城市的泽州府地区，采煤、炼铁和铸造业高度发达，铁器制造不仅满足生活用具需求，还生产农具和兵器等，打铁花在此背景下逐渐演变为一种独特的庆祝仪式和祭祀活动。\n' +
              '这个时期的打铁花开始与工匠们的信仰崇拜紧密相连，成为每年年初开业之前的重要祭祀仪式之一，旨在祈求神灵保佑全年平安、生意兴\n' +
              '隆。' ,

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