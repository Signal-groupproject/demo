import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import Layout from '../views/Layout.vue';
import AnswerPage from '../views/bottom/AnswerPage.vue';
import QandA from '../views/bottom/QandA.vue';
import Advice from '../views/bottom/Advice.vue';
import Attractions from '../views/Travel/Attractions.vue'; // 新增
import Food from '../views/Travel/Food.vue'; // 新增
import Card1 from "@/views/Guide/GuideCards/card1.vue";
import Card2 from "@/views/Guide/GuideCards/card2.vue";
import Card3 from "@/views/Guide/GuideCards/card3.vue";
import Card4 from "@/views/Guide/GuideCards/card4.vue";
import Card5 from "@/views/Guide/GuideCards/card5.vue";
import Card6 from "@/views/Guide/GuideCards/card6.vue";
import Card7 from "@/views/Guide/GuideCards/card7.vue";
import Card8 from "@/views/Guide/GuideCards/card8.vue";
import Loop1 from "@/views/Guide/Loops/loop1.vue";
import Loop2 from "@/views/Guide/Loops/loop2.vue";
import Loop3 from "@/views/Guide/Loops/loop3.vue";
import ImproveExperience from '../views/bottom/ImproveExperience.vue'
import LandscapeCategory from "@/views/Nature/Landscape-category.vue";
import Nprospect from "@/views/Nature/Nprospect.vue";
import TravelMethod from "@/views/Nature/TravelMethod.vue";
import Inventory from "@/views/Home/Historical-heritage/Inventory.vue";
import VisitMethod from "@/views/Home/Historical-heritage/VisitMethod.vue";
import Hprospect from "@/views/Home/Historical-heritage/Hprospect.vue";
import Cuisine from "@/views/Home/Delicacy/Cuisine.vue";
import MustEat from "@/views/Home/Delicacy/MustEat.vue";
import Dprospect from "@/views/Home/Delicacy/Dprospect.vue";
import city from '../views/City/city.vue';
import Shanghai from '../views/City/Shanghai.vue';
import Beijing from "@/views/City/Beijing.vue";
import Fujian from "@/views/City/Fujian.vue";
import Hainan from "@/views/City/Hainan.vue";
import Hangzhou from "@/views/City/Hangzhou.vue";
import Guangzhou from "@/views/City/Guangzhou.vue";
import Wuhan from "@/views/City/Wuhan.vue";
import Changsha from "@/views/City/Changsha.vue";
import Guangdong from '../views/City/Guangdong.vue';
import Liaoning from "@/views/City/Liaoning.vue";
import Xinjiang from "@/views/City/Xinjiang.vue";
import Xizang from "@/views/City/Xizang.vue";
import Gansu from "@/views/City/Gansu.vue";
import Qinghai from "@/views/City/Qinghai.vue";
import Sichuan from "@/views/City/Sichuan.vue";
import Jiangxi from "@/views/City/Jiangxi.vue";
import Anhui from "@/views/City/Anhui.vue";
import Heilongjiang from "@/views/City/Heilongjiang.vue";
import Hebei from "@/views/City/Hebei.vue";
import Henan from "@/views/City/Henan.vue";
import Hubei from "@/views/City/Hubei.vue";
import Hunan from "@/views/City/Hunan.vue";
import Jilin from "@/views/City/Jilin.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/Tools/News.vue'),
      },
      {
        path: '/map',
        name: 'Maps',
        component: () => import('../views/Tools/Map.vue'),
      },
      {
        path: '/spots',
        name: 'Spots',
        component: () => import('../views/Tools/Spots.vue'),
      },
      {
        path: '/ai',
        name: 'Ai',
        component: () => import('../views/Tools/Ai.vue'),
      },
      {
        path: '/travel',
        name: 'Attractions',
        component: () => import('../views/Travel/Attractions.vue'),
      },
      {
        path: '/travel',
        name: 'Food',
        component: () => import('../views/Travel/Food.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/city.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Shanghai.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Beijing.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Fujian.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Hainan.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Hangzhou.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Guangzhou.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Wuhan.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Changsha.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Guangdong.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Liaoning.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Xinjiang.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Xizang.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Gansu.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Qinghai.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Sichuan.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Jiangxi.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Anhui.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Heilongjiang.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Hebei.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Henan.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Hubei.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Hunan.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/City/Jilin.vue'),
      },
      {
        path: '/AnswerPage',
        name: 'AnswerPage',
        component: AnswerPage,
      },
      {
        path: '/QandA',
        name: 'QandA',
        component: QandA,
      },
      {
        path: '/Advice',
        name: 'Advice',
        component: Advice,
      },
      {
        path: '/travel/attractions', // 新增
        name: 'Attractions',
        component: Attractions,
      },
      {
        path: '/travel/food', // 新增
        name: 'Food',
        component: Food,
      },
            {
        path: '/city/city', // 新增
        name: 'city',
        component: city,
      },
      {
        path: '/city/shanghai', // 新增
        name: 'Shanghai',
        component: Shanghai,
      },
      {
        path: '/city/beijing', // 新增
        name: 'Beijing',
        component: Beijing,
      },
      {
        path: '/city/fujian', // 新增
        name: 'Fujian',
        component: Fujian,
      },
      {
        path: '/city/hainan', // 新增
        name: 'Hainan',
        component: Hainan,
      },
      {
        path: '/city/hangzhou', // 新增
        name: 'Hangzhou',
        component: Hangzhou,
      },
      {
        path: '/city/guangzhou', // 新增
        name: 'Guangzhou',
        component: Guangzhou,
      },
      {
        path: '/city/wuhan', // 新增
        name: 'Wuhan',
        component: Wuhan,
      },
      {
        path: '/city/changsha', // 新增
        name: 'Changsha',
        component: Changsha,
      },
      {
        path: '/city/guangdong', // 新增
        name: 'Guangdong',
        component: Guangdong,
      },
      {
        path: '/city/liaoning', // 新增
        name: 'Liaoning',
        component: Liaoning,
      },
      {
        path: '/city/xinjiang', // 新增
        name: 'Xinjiang',
        component: Xinjiang,
      },
      {
        path: '/city/xizang', // 新增
        name: 'Xizang',
        component: Xizang,
      },
      {
        path: '/city/gansu', // 新增
        name: 'Gansu',
        component: Gansu,
      },
      {
        path: '/city/qinghai', // 新增
        name: 'Qinghai',
        component: Qinghai,
      },
      {
        path: '/city/sichuan', // 新增
        name: 'Sichuan',
        component: Sichuan,
      },
      {
        path: '/city/jiangxi', // 新增
        name: 'Jiangxi',
        component: Jiangxi,
      },
      {
        path: '/city/anhui', // 新增
        name: 'Anhui',
        component: Anhui,
      },
      {
        path: '/city/heilongjiang', // 新增
        name: 'Heilongjiang',
        component: Heilongjiang,
      },
      {
        path: '/city/hebei', // 新增
        name: 'Hebei',
        component: Hebei,
      },
      {
        path: '/city/henan', // 新增
        name: 'Henan',
        component: Henan,
      },
      {
        path: '/city/hubei', // 新增
        name: 'Hubei',
        component: Hubei,
      },
      {
        path: '/city/hunan', // 新增
        name: 'Hunan',
        component: Hunan,
      },
      {
        path: '/city/jilin', // 新增
        name: 'Jilin',
        component: Jilin,
      },
      {
        path: '/social',
        name: 'Guide',
        component: () => import('../views/Guide/Social.vue'),
      },
      {
        path: '/guidebook',
        name: 'Guide',
        component: () => import('../views/Guide/GuideBook.vue'),
      },
      { path: '/loop1', name:'Loop1', component: Loop1 },
      { path: '/loop2', name:'Loop2', component: Loop2 },
      { path: '/loop3', name:'Loop3', component: Loop3 },
      {
        path: '/card1',
        name: 'Card1',
        component: Card1
      },
      {
        path: '/card2',
        name: 'Card2',
        component: Card2
      },
      {
        path: '/card3',
        name: 'Card3',
        component: Card3
      },
      {
        path: '/card4',
        name: 'Card4',
        component: Card4
      },
      {
        path: '/card5',
        name: 'Card5',
        component: Card5
      },
      {
        path: '/card6',
        name: 'Card6',
        component: Card6
      },
      {
        path: '/card7',
        name: 'Card7',
        component: Card7
      },
      {
        path: '/card8',
        name: 'Card8',
        component: Card8
      },
      {
        path: '/ImproveExperience',
        name: 'ImproveExperience',
        component: ImproveExperience,
      },
      {
        path: '/LandscapeCategory',
        name: 'LandscapeCategory',
        component: LandscapeCategory,
      },
      {
        path: '/Nprospect',
        name: 'Nprospect',
        component: Nprospect,
      },
      {
        path: '/TravelMethod',
        name: 'TravelMethod',
        component: TravelMethod,
      },
      {
        path: '/Inventory',
        name: 'Inventory',
        component: Inventory,
      },
      {
        path: '/VisitMethod',
        name: 'VisitMethod',
        component: VisitMethod,
      },
      {
        path: '/Hprospect',
        name: 'Hprospect',
        component: Hprospect,
      },
      {
        path: '/Cuisine',
        name: 'Cuisine',
        component: Cuisine,
      },
      {
        path: '/MustEat',
        name: 'MustEat',
        component: MustEat,
      },
      {
        path: '/Dprospect',
        name: 'Dprospect',
        component: Dprospect,
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
