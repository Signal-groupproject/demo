import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import Layout from '../views/Layout.vue';
import AnswerPage from '../views/bottom/AnswerPage.vue';
import QandA from '../views/bottom/QandA.vue';
import Advice from '../views/bottom/Advice.vue';
import Attractions from '../views/Travel/Attractions.vue'; // 新增
import Food from '../views/Travel/Food.vue'; // 新增

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
        path: '/social',
        name: 'Social',
        component: () => import('../views/Social/Social.vue'),
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/News/News.vue'),
      },
      {
        path: '/travel',
        name: 'Travel',
        component: () => import('../views/Travel/Attractions.vue'),
      },
      {
        path: '/travel',
        name: 'Travel',
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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
