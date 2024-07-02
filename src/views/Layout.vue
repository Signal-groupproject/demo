<template>
  <div>
      <!-- 公共导航 -->
      <MyMenu/>
      <!-- 路由-出口 -->
      <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '../components/MyMenu.vue'
export default {
    components:{
        MyMenu
    }
}
</script>

<style>

</style>