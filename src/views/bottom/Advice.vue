<template>
  <div class="culture-events">
    <div class="header">
      <h2>全国旅游文化活动</h2>
      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="搜索活动">
        <button @click="search">搜索</button>
      </div>
    </div>

    <div class="event-list">
      <div v-for="(event, index) in events" :key="index" class="event-card">
        <div class="event-card-content">
          <div class="event-image">
            <img :src="event.image" :alt="event.name">
          </div>
          <div class="event-details">
            <h3 class="event-name">{{ event.name }}</h3>
            <p class="event-description">{{ event.description }}</p>
            <p class="event-location">{{ event.location }}</p>
            <p class="event-date">{{ event.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      events: [
        {
          name: '丽江玉龙雪山雪景节',
          image: require('@/pictures/activity pic/lijiang.png'),
          description: '丽江玉龙雪山雪景节是冬季丽江的重要文化活动，庆祝玉龙雪山的壮丽冰雪景观。',
          location: '丽江',
          date: '每年冬季'
        },
        {
          name: '海南椰林音乐节',
          image: require('@/pictures/activity pic/hainan.png'),
          description: '海南的椰林音乐节是一个国际性音乐盛会，将音乐艺术与椰林风光结合，吸引全球音乐爱好者。',
          location: '海南',
          date: '每年冬季'
        },
        {
          name: '河北承德避暑山庄文化节',
          image: require('@/pictures/activity pic/hebei.png'),
          description: '承德避暑山庄文化节是庆祝清朝皇家避暑山庄的历史与文化活动。',
          location: '承德',
          date: '每年夏季'
        },
        {
          name: '陕西西安丝绸之路国际文化节',
          image: require('@/pictures/activity pic/xian.png'),
          description: '西安丝绸之路国际文化节是庆祝丝绸之路历史与文化遗产的盛大节日。',
          location: '西安',
          date: '每年春季'
        },
        {
          name: '云南民族村水灯节',
          image: require('@/pictures/activity pic/yunnan.png'),
          description: '云南的水灯节是彝族传统节日，民族舞蹈、民间音乐与水灯艺术相结合。',
          location: '云南民族村',
          date: '每年农历正月十五'
        },
        {
          name: '山东青岛国际啤酒节',
          image: require('@/pictures/activity pic/qingdao.png'),
          description: '青岛国际啤酒节是中国最大的啤酒节之一，吸引世界各地的啤酒爱好者。',
          location: '青岛',
          date: '每年夏季'
        }
      ]
    };
  },
  methods: {
    search() {
      const url = `https://www.baidu.com/s?wd=${this.searchQuery}`;
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.culture-events {
  background-image: url('../../pictures/activity pic/back.png');
  background-size: cover;
  background-position: center;
  padding: 40px;
  position: relative;
}

.header {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
}

.header h2 {
  font-size: 32px;
  margin: 0 auto;
  padding: 10px 20px;
  display: inline-block;
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
}

.search-bar {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin: 10px;
}

.search-bar input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 200px;
  font-size: 14px;
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

.event-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.event-card {
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  overflow: hidden;
}

.event-card-content {
  display: flex;
  flex-direction: column;
}

.event-image {
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-5px);
}

.event-details {
  padding: 20px;
}

.event-name {
  font-size: 20px;
  margin-bottom: 10px;
}

.event-description {
  color: #666;
  margin-bottom: 10px;
}

.event-location, .event-date {
  font-style: italic;
  color: #999;
}
</style>
