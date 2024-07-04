<template>
  <div class="nav">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="/tools">
        <template #title>
          <span>工具</span>
        </template>
        <el-menu-item index="/news">新闻</el-menu-item>
        <el-menu-item index="/map">地图搜索</el-menu-item>
        <el-menu-item index="/spots">旅游景区</el-menu-item>
        <el-menu-item index="/ai">AI Chat</el-menu-item>
      </el-submenu>

      <el-submenu index="/guide">
        <template #title>
          <span>攻略</span>
        </template>
        <el-menu-item index="/social">攻略群</el-menu-item>
        <el-menu-item index="/guidebook">旅游攻略</el-menu-item>
      </el-submenu>

      <el-submenu index="/travel">
        <template #title>
          <span>热门旅游</span>
        </template>
        <el-menu-item index="/travel/attractions">热门景点</el-menu-item>
        <el-menu-item index="/travel/food">美食介绍</el-menu-item>
      </el-submenu>

      <el-submenu index="/city">
        <template slot="title">城市介绍</template>
        <el-menu-item index="/city/city">总览</el-menu-item>
        <el-menu-item index="/city/shanghai">上海</el-menu-item>
        <el-menu-item index="/city/beijing">北京</el-menu-item>
        <el-menu-item index="/city/fujian">福建</el-menu-item>
        <el-menu-item index="/city/hainan">海南</el-menu-item>
        <el-menu-item index="/city/hangzhou">杭州</el-menu-item>
        <el-menu-item index="/city/guangzhou">广州</el-menu-item>
        <el-menu-item index="/city/wuhan">武汉</el-menu-item>
        <el-menu-item index="/city/changsha">长沙</el-menu-item>
        <el-menu-item index="/city/liaoning">辽宁</el-menu-item>
        <el-menu-item index="/city/xinjiang">新疆</el-menu-item>
        <el-menu-item index="/city/xizang">西藏</el-menu-item>
        <el-menu-item index="/city/guangdong">广东</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<style lang='less' scoped>
.nav {
  background: #545c64;
}
.el-menu-demo {
  width: 1200px;
  margin: 0 auto;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.nav-right {
  float: right;
  line-height: 60px;
  color: #fff;
  span {
    padding-right: 10px;
  }
  i {
    font-size: 20px;
    vertical-align: middle;
    cursor: pointer;
  }
}
</style>
<script setup lang="ts">
</script>