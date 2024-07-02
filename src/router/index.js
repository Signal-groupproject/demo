import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)

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
        path: '/about',
        name: 'About',
        component: () => import('../views/About/About.vue'),
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/News/News.vue'),
      },
      {
        path: '/travel',
        name: 'Travel',
        component: () => import('../views/Travel/Travel.vue'),
      }
    ]
  }

]

//vue 路由相同路径跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})


export default router
