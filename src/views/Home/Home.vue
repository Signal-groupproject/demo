<template>

  <div class="home">
    <head>
      <!-- Other head elements -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    </head>

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

    <!-- 2. 热门旅游景点展示 -->
    <!--    <Lanmei :list="list" />-->

    <!--    &lt;!&ndash;  推荐网页 &ndash;&gt;-->
    <!--    <section class="recommend-websites">-->
    <!--      <h2>推荐网页</h2>-->
    <!--      <div class="website-list">-->
    <!--        <div class="website" v-for="website in recommendWebsites" :key="website.title">-->
    <!--          <img :src="website.image" alt="网页图片" @mouseover="showLinks(website)" @mouseleave="hideLinks" />-->
    <!--          <div class="link-container" v-show="showLinksFlag && currentWebsite === website">-->
    <!--            <div class="link" v-for="link in website.links" :key="link.title">-->
    <!--              <a :href="link.url" target="_blank">{{ link.title }}</a>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

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

        <!-- 答案展示界面 -->
        <!--        <router-view></router-view>-->

        <div class="footer-column-right">
          <h3>服务优化</h3>
          <ul>
            <li @click="showQandA('问题解答')">问题解答</li>
            <li @click="showAdvice('意见')">意见</li>
            <li @click="show('')"></li>
            <!--            <li><a href="#">问卷调查</a></li>-->
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
import Lanmei from "./Lanmei.vue";
// import AnswerPage from "@/views/bottom/AnswerPage.vue";
import MyPagination from "../../components/MyPagination.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Lanmei,
    // AnswerPage,
    MyPagination,

  },
  data() {
    return {
      banner: [],
      list: [], // 蓝莓数据
      total: 100,
      pageSize: 10,


      // recommendWebsites: [
      //   {
      //     title: '推荐网页1',
      //     image: 'https://example.com/image1.jpg',
      //     links: [
      //       { title: '链接1', url: 'https://example.com/link1' },
      //       { title: '链接2', url: 'https://example.com/link2' },
      //       { title: '链接3', url: 'https://example.com/link3' },
      //     ],
      //   },
      //   {
      //     title: '推荐网页2',
      //     image: 'https://example.com/image2.jpg',
      //     links: [
      //       { title: '链接4', url: 'https://example.com/link4' },
      //       { title: '链接5', url: 'https://example.com/link5' },
      //       { title: '链接6', url: 'https://example.com/link6' },
      //     ],
      //   },
      //   {
      //     title: '推荐网页3',
      //     image: 'https://example.com/image3.jpg',
      //     links: [
      //       { title: '链接7', url: 'https://example.com/link7' },
      //       { title: '链接8', url: 'https://example.com/link8' },
      //       { title: '链接9', url: 'https://example.com/link9' },
      //     ],
      //   },
      // ],
      // showLinksFlag: false,
      // currentWebsite: null,



      // faqAnswers: {
      //   'FAQ项1': 'FAQ项1的答案',
      //   'FAQ项2': 'FAQ项2的答案',
      //   'FAQ项3': 'FAQ项3的答案'
      // },
      // selectedAnswer: '',

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

    // 蓝莓酱数据---------
    // this.getHttp(1);

    //
  },


  methods: {
    // 其他方法

    // showLinks(website) {
    //   this.showLinksFlag = true;
    //   this.currentWebsite = website;
    // },
    // hideLinks() {
    //   this.showLinksFlag = false;
    //   this.currentWebsite = null;
    // },



    showAnswer(question) {
      this.$router.push({ name: 'AnswerPage', params: { question } });
    },

    showQandA(qAndA) {
      // 使用路由导航打开新界面
      this.$router.push({ name: 'QandA', params: { qAndA } });
    },

    showAdvice(advice){
      this.$router.push({ name: 'Advice', params: { advice } });
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

.intro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
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

.footer-column {
  flex-basis: 30%;
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



.recommend-websites {
  margin: 40px 0;
}

.recommend-websites h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.website-list {
  display: flex;
  flex-wrap: wrap;
}

.website {
  flex-basis: 33.33%;
  margin-bottom: 20px;
  position: relative;
}

.website img {
  width: 100%;
  height: auto;
  display: block;
}

.link-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
}

.website:hover .link-container {
  opacity: 1;
  pointer-events: auto;
}

.link {
  margin-bottom: 5px;
}

.link a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.link a:hover {
  color: #ff0000;
}
</style>