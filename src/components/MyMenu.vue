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
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="/about">我的</el-menu-item>
      <el-menu-item index="/travel">旅游</el-menu-item>
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