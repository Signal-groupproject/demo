<template>
  <div class="dali-tour-page">
    <header class="header">
      <h1>大理旅游介绍</h1>
    </header>
    <section class="introduction">
      <p>
        大理是中国云南省的一座古城，拥有丰富的历史和文化遗产。这里气候宜人，风景优美，是一个理想的旅游目的地。
      </p>
    </section>
    <section class="highlights">
      <h2>旅游景点</h2>
      <div class="highlight" v-for="spot in spots" :key="spot.name">
        <img :src="spot.img" :alt="spot.name" class="spot-image"/>
        <h3>{{ spot.name }}</h3>
        <p>{{ spot.description }}</p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const spots = ref([
  {
    name: '洱海',
    img: require('@/pictures/page1/dali.jpg'),
    description: '洱海是大理最著名的风景之一，清澈的湖水和环绕的群山构成了绝美的画卷。'
  },
  {
    name: '苍山',
    img: require('@/pictures/page1/dali.jpg'),
    description: '苍山是大理的标志性山脉，拥有壮丽的自然风光和丰富的动植物资源。'
  },
  {
    name: '大理古城',
    img: require('@/pictures/page1/dali.jpg'),
    description: '大理古城保存完好，城内有众多历史建筑和文化遗址，漫步其中仿佛穿越回了古代。'
  },
  // 其他景点可以继续添加
]);
</script>
<style scoped>
.dali-tour-page {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.header {
  text-align: center;
  margin: 20px 0;
}

.introduction {
  padding: 0 20px;
  margin-bottom: 20px;
}

.highlights {
  padding: 0 20px;
}

.highlight {
  margin-bottom: 20px;
}

.spot-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 0 auto;
}

h2, h3 {
  color: #333;
}
</style>
