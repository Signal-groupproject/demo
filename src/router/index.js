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
import Loop4 from "@/views/Guide/Loops/loop4.vue";
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
      { path: '/loop4', name:'Loop4', component: Loop4 },
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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
