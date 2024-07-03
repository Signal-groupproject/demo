<template>
  <div class="food-container">
    <h2 class="food-title">美食介绍</h2>

    <!-- 说明文字 -->
    <p class="search-instruction">来找找你喜欢的美食吧!</p>

    <!-- 搜索栏 -->
    <div class="search-bar">
      <input type="text" v-model="searchQuery" placeholder="搜索美食...">
      <button @click="searchOnBaidu">搜索</button>
    </div>

    <!-- 美食列表 -->
    <div v-for="(item, index) in filteredFoods" :key="index" class="food-item fade-in">
      <div class="food-image">
        <img :src="item.img" alt="美食图片">
      </div>
      <div class="food-details">
        <h3 class="food-name">{{ item.name }}</h3>
        <p class="food-description">{{ item.description }}</p>
        <p class="food-location">{{ item.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodIntroduction',
  data() {
    return {
      foods: [
        {
          name: '北京烤鸭',
          img: require('@/pictures/travel pic/beijing duck.jpg'),
          description: '北京烤鸭是中国传统的名菜之一，以其皮脆肉嫩而闻名于世。它的历史可以追溯到元朝，在明清时期逐渐演变成为今天大家所熟知的形态。',
          location: '北京'
        },
        {
          name: '上海小笼包',
          img: require('@/pictures/travel pic/xiaolongbao.jpeg'),
          description: '小笼包是一种汤包类的传统上海点心，制作工艺复杂精细。其外皮白薄，蒸熟后柔软，内馅鲜美，带有一定的汤汁,口感鲜美，汤汁浓郁。',
          location: '上海'
        },
        {
          name: '广东烧腊',
          img: require('@/pictures/travel pic/roasted meat.jpeg'),
          description: '广东烧腊是广东地区的一类传统烹饪方式，主要包括烧鹅、烧鸭、烧肉等烤制肉类,经过特定工艺，使其表皮金黄酥脆，肉质鲜嫩，风味独特。',
          location: '广州'
        },
        {
          name: '四川火锅',
          img: require('@/pictures/travel pic/hotpot.jpg'),
          description: '四川火锅以麻辣味为主，汤底浓郁，配料丰富。其独特的麻辣鲜香口味，深受食客喜爱，成为川菜中的代表,吸引着全国各地的游客前来品尝',
          location: '成都'
        },
        {
          name: '云南过桥米线',
          img: require('@/pictures/travel pic/rice noodles.jpg'),
          description: '云南过桥米线是一道极具地方特色的传统美食，以其独特的烹饪方式和丰富的配料而闻名,它的汤底由多种材料长时间熬制而成，鲜美浓郁',
          location: '昆明'
        },
        {
          name: '广西糖水',
          img: require('@/pictures/travel pic/sweet water.jpeg'),
          description: '广西糖水是南方传统甜品，种类繁多，清甜可口。常见有红豆沙、椰汁西米露、莲子羹等，既能解暑，又能养生，深受喜爱，回味无穷。',
          location: '南宁'
        },
        {
          name: '福建海鲜',
          img: require('@/pictures/travel pic/sea food.jpeg'),
          description: '福建海鲜以其种类繁多和新鲜闻名，得益于沿海丰富的海洋资源。如清蒸石斑鱼、盐焗大虾、海蛎煎等，原汁原味，味道鲜美，营养丰富。',
          location: '福州'
        }
      ],
      searchQuery: ''
    };
  },
  computed: {
    filteredFoods() {
      // 根据搜索框内容过滤美食列表
      return this.foods.filter(food =>
          food.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    searchOnBaidu() {
      // 搜索框内容跳转到百度搜索页面
      if (this.searchQuery.trim() !== '') {
        window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(this.searchQuery)}`);
      } else {
        alert('请输入搜索内容！');
      }
    }
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.food-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px;
  background: url('~@/pictures/travel pic/background.jpg');
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.food-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.food-item {
  display: flex;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

.food-image {
  width: 40%;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.food-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.food-image:hover {
  transform: scale(1.05);
}

.food-details {
  padding: 20px;
}

.food-name {
  font-size: 20px;
  margin-bottom: 10px;
}

.food-description {
  color: #666;
  margin-bottom: 10px;
}

.food-location {
  font-style: italic;
  color: #999;
}

.search-bar {
  margin-bottom: 20px;
  text-align: center;
}

.search-bar input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 200px;
  font-size: 14px;
}

.search-instruction {
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}

.search-bar button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.search-bar button:hover {
  background-color: #0056b3;
}
</style>
