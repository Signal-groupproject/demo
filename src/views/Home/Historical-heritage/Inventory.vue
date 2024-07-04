<template>
  <div class="page">
    <h3 class="t0"> 传统文化</h3>
    <h1 class="title">非遗文化</h1>
    <h2 class="t1">打铁花</h2>
    <div class="spacer"></div>
    <h2 class="subtitle">页面副标题</h2>
    <p class="intro">这是页面的简要介绍。</p>
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



.title {
  font-size: 36px;
  font-weight: bold;
  margin-top: 20px;
}

.subtitle {
  font-size: 24px;
  margin-bottom: 10px;
}

.intro {
  font-size: 18px;
  margin-bottom: 20px;
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