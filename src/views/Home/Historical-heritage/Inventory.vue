<template>
  <div class="page">
    <h3 class="t0"> 传统文化</h3>
    <h1 class="title">非遗文化</h1>
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
    <div class="card" v-for="(card, index) in cards" :key="index" @click="goToLink(card.link)" :class="{ 'fade-in': cardHoverIndex === index }" @mouseover="cardHoverIndex = index" @mouseout="cardHoverIndex = -1">
      <h3 class="card-title">{{ card.title }}</h3>
      <p class="card-description">{{ card.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: '卡片标题 1',
          description: '这是卡片 1 的描述',
          link: 'https://example.com/link1'
        },
        {
          title: '卡片标题 2',
          description: '这是卡片 2 的描述',
          link: 'https://example.com/link2'
        },
        {
          title: '卡片标题 3',
          description: '这是卡片 3 的描述',
          link: 'https://example.com/link3'
        }
      ],
      cardHoverIndex: -1
    };
  },
  methods: {
    goToLink(link) {
      window.open(link, '_blank');
    }
  }
};
</script>

<style>
.page {
  text-align: center;
}

.t0{
  font-size: 15px;
  margin: 0 auto;
  padding: 10px 20px;
  display: inline-block;
  background-color: #ad6407;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
}

.title {
  font-size: 45px;
  font-weight: bold;
  margin-top: 20px;
  color: #ad6407;
}

.t1{
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
}



.spacer {
  height: 20px;
}

.card {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px auto;
  width: 300px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
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
</style>