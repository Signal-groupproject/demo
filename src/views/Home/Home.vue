<template>

  <div class="home">
    <!-- 1. 轮播图 -->
    <Banner :banner="banner" />

    <!-- 欢迎部分 -->
    <section class="welcome-section animate__animated animate__fadeIn">
      <h1>WELCOME <span>TO</span> NEWMAN</h1>
      <div class="intro-container">
        <div class="intro-content">
          在这里，我们将带您领略中国最迷人的旅游胜地，探索大自然的壮丽奇观和人文风貌的深厚底蕴。<br>
          从北国的冰雪奇缘到南疆的热带风情，从历史悠久的古城遗迹到现代繁华的都市夜景，<span class="intro-highlight">NEWMAN</span>致力于为您提供最全面、最权威的旅游信息和服务。<br><br>

          无论您是热爱自然风光的探险者，还是沉迷文化历史的考古迷，亦或是追求都市时尚的潮流达人，<span class="intro-highlight">NEWMAN</span>都将为您精心推荐最佳的旅行路线和目的地。<br>
          在这里，您可以发现最新的旅游资讯、实用的旅行攻略、贴心的住宿推荐，以及丰富多彩的当地活动。<br><br>

          加入<span class="intro-highlight">NEWMAN</span>，让我们一起开启一段难忘的旅程，感受中国大地的无穷魅力，收获无数美好的回忆。<br>
          探索未知，发现美丽——这一切，从<span class="intro-highlight">NEWMAN</span>开始。
        </div>
        <div class="intro-cta">
          <a href="#explore">开始探索</a>
        </div>
      </div>
    </section>

    <!--  推荐网页 -->

    <section class="Content-Recommendation">
      <h1>魅力中国</h1>
      <div class="intro-container">

        <div class="image-grid">
          <div v-for="(image, index) in images" :key="index" class="image-item">
            <div class="image-container" @mouseenter="showOptions(index)" @mouseleave="hideOptions()">
              <img :src="image.src" alt="图片">

              <div class="image-caption">
                <h2 class="image-title">{{image.title}}</h2>
                <p class="image-description">{{ image.description }}</p>
              </div>

              <div class="options" v-if="showOptionsIndex === index">
                <ul>
                  <li v-for="(option, optionIndex) in image.options" :key="optionIndex" @click="handleOptionClick(option)">
                    {{ option.label }}
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>









    <!--  底栏 -->
    <div class="footer">
      <div class="footer-top">
        <div class="footer-left">
          <h3>关于我们</h3>
        </div>
        <div class="footer-center">
          <p>  1234567890 |  示例地址</p>
        </div>
        <div class="footer-right">
          <ul>
            <li>
              <a href="https://weibo.com">
                <i class="fab fa-weibo"></i>
              </a>
            </li>
            <li>
              <a href="https://weixin.qq.com">
                <i class="fab fa-weixin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <el-divider></el-divider>

      <div class="footer-custom-list">
        <div class="footer-column-left">
          <h3>合作伙伴</h3>
          <ul>
            <li><a href="https://github.com/LLL-yutamini">LLL</a></li>
          </ul>
        </div>
        <div class="footer-column-center">
          <h3>旅游FAQ</h3>
          <ul>
            <li @click="showAnswer('FAQ1')">FAQ1</li>
            <li @click="showAnswer('FAQ2')">FAQ2</li>
            <li @click="showAnswer('FAQ3')">FAQ3</li>
          </ul>
        </div>



        <div class="footer-column-right">
          <h3>服务优化</h3>
          <ul>
            <li @click="showQandA('问题解答')">问题解答</li>
            <li @click="showAdvice('游客意见')">游客意见</li>
            <li @click="improveExperience('优化体验')">优化体验</li>

          </ul>
        </div>


      </div>

      <div class="footer-bottom">
        <p>版权所有 © 2024</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import AnswerPage from "@/views/bottom/AnswerPage.vue";

export default {
  name: "Home",
  components: {
    Banner,
    AnswerPage,
  },
  data() {
    return {
      banner: [],
      list: [], // 蓝莓数据
      total: 100,
      pageSize: 10,

      images: [
        {
          src: require('./image/喀拉峻草原.png'),
          title: '自然',
          description: 'lllllll',
          options: [
            { label: '自然景观类别', value: 'option1' },
            { label: '游玩方式', value: 'option2' },
            { label: '发展前景', value: 'option3' }
          ]
        },
        {
          src: require('./image/古格王国遗址.png'),
          options: [
            { label: '文化遗产盘点', value: 'option4' },
            { label: '游玩方式', value: 'option5' },
            { label: '发展前景', value: 'option6' }
          ]
        },
        {
          src: require('@/views/Home/image/中国美食地图.png'),
          options: [
            { label: '中国饮食菜系', value: 'option7' },
            { label: '必吃美食', value: 'option8' },
            { label: '发展前景', value: 'option9' }
          ]
        }
      ],
      showOptionsIndex: -1



    };
  },
  created() {
    // 轮播图数据
    this.$api.getBanner().then((res) => {
      console.log(res.data);
      let banner = res.data.banner;
      for (let i = 0; i < banner.length; i++) {
        banner[i].img = banner[i].img.replace(
            "http://www.wwtliu.com/sxtstu",
            "http://iwenwiki.com/api"
        );
      }
      console.log(banner);
      this.banner = banner;
    });


  },


  methods: {
    // 其他方法

    showOptions(index) {
      this.showOptionsIndex = index;
    },
    hideOptions() {
      this.showOptionsIndex = -1;
    },
    handleOptionClick(option) {
      console.log('选中的选项:', option);

      if (option.value === 'option1') {
        this.$router.push({ name: 'LandscapeCategory', params: { option } });
      }
      else if (option.value === 'option2'){
        this.$router.push({ name: 'Nprospect', params: { option } });
      }
      else if (option.value === 'option3'){
        this.$router.push({ name: 'TravelMethod', params: { option } });
      }
      else if (option.value === 'option4'){
        this.$router.push({ name: 'Inventory', params: { option } });
      }
      else if (option.value === 'option5'){
        this.$router.push({ name: 'VisitMethod', params: { option } });
      }
      else if (option.value === 'option6'){
        this.$router.push({ name: 'Hprospect', params: { option } });
      }
      else if (option.value === 'option7'){
        this.$router.push({ name: 'Cuisine', params: { option } });
      }
      else if (option.value === 'option8'){
        this.$router.push({ name: 'MustEat', params: { option } });
      }
      else if (option.value === 'option9'){
        this.$router.push({ name: 'Dprospect', params: { option } });
      }

    },




    showAnswer(question) {
      this.$router.push({ name: 'AnswerPage', params: { question } });
    },

    showQandA(qAndA) {
      // 使用路由导航打开新界面
      this.$router.push({ name: 'QandA', params: { qAndA } });
    },

    showAdvice(advice){
      this.$router.push({ name: 'Advice', params: { advice } });
    },
    improveExperience(imp){
      this.$router.push({ name: 'ImproveExperience', params: { imp } });
    }



  },
};
</script>

<style>
/* 其他样式 */



.welcome-section {
  background-color: #f9f9f9;
  padding: 60px 0;
  text-align: center;
}

.welcome-section h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}

.welcome-section h1 span {
  color: #029df2;
}

.Content-Recommendation{
  background-color: #f9f9f9;
  padding: 60px 0;
  text-align: center;
}

.Content-Recommendation h1{
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}



.intro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1800px;
  margin: 0 auto;
}

.intro-content {
  font-size: 18px;
  line-height: 1.6;
  color: #666;
}

.intro-highlight {
  color: #029df2;
  font-weight: bold;
}

.intro-cta {
  margin-top: 30px;
}

.intro-cta a {
  display: inline-block;
  padding: 12px 30px;
  background-color: #029df2;
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s;
}

.intro-cta a:hover {
  background-color: #0276aa;
}



.footer {
  margin: 0 200px;
  background-color: #ffffff;
  padding: 20px;
}


.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left h3 {
  font-size: 32px; /* Double the original font size */
  margin-bottom: 10px;
}

.footer-center p {
  margin: 0;
  font-size: 25px; /* Double the original font size */
}

.footer-right ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.footer-right li {
  margin-right: 10px;
}

.footer-right a {
  text-decoration: none;
  color: #333;
  font-size: 30px; /* Double the original icon size */
}

.footer-right a:hover {
  color: #ff0000;
}

.footer-bottom {
  border-top: 1px solid #ccc;
  margin-top: 20px;
  padding-top: 10px;
  text-align: center;
  font-size: 20px; /* Double the original font size */
  color: #666;
}

.footer-custom-list {
  display: flex;
  justify-content: space-between;
}

.footer-column-left li{
  color: #333;
}

.footer-column-center li{
  color: #333;
}
.footer-column-right li {
  color: #333;
}


.footer-column h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 5px;
}

.footer-column ul li a {
  text-decoration: none;
  color: #333;
}

.footer-column ul li a:hover {
  color: #ff0000;
}






.recommend-websites h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.website img {
  width: 100%;
  height: auto;
  display: block;
}

.website:hover .link-container {
  opacity: 1;
  pointer-events: auto;
}

.link a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.link a:hover {
  color: #ff0000;
}




.image-grid {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* 添加此样式使图片与整个大页面左右空开一点 */
  padding: 0px; /* 添加此样式使图片与图片之间有一定间距 */
  width: 80%;
  height: 100%;
}

.image-item {
  position: relative;
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
}

.image-container {
  position: relative;
  width: 100%;
  height: auto;
}

img {
  width: 100%;
  height: auto;
}

.image-caption {
  position: relative;
}

.image-title {
  margin-top: 40px;
}

.image-description {
  margin-top: 20px;
}

.options {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-item:hover .options {
  opacity: 1;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

li {
  margin-bottom: 10px;
  cursor: pointer;
  color: #f1f0f0;
}





</style>