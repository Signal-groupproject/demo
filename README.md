## Vue库 Element-ui
1. 介绍：
   Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库

2. Vant库--vue移动端  react移动端 小程序 

3. 安装：
   1. npm直接安装：npm i element-ui -S 
   2. 脚手架安装：新版的 vue-cli 准备了相应的 Element 插件  
      1. 安装vue项目
      2. 安装element: vue add element 
        安装选择：
        1. 选择安装模式  全部安装  按需加载、
        2. 文件覆盖scss (n)  如果写yes -- vue项目配置scss支持 并且 覆盖element-自定义主题
        3. 中文选择


## Vue全家桶
1. 介绍：
    蓝莓派的pc端效果  pc端效果界面

2. 技术
  Vue + vue-router + vuex + Element + axios + (三方插件-swiper)  + node.js后台 

3. 搭建项目依赖：
   1. vue create vue-lanmei-project 
   2. vue add element 
   3. npm i axios -S 
   4. npm i swiper@5.x vue-xxx-swiper -S (可以选择)

4. 项目初始化
   1. css初始化
   2. 无用文件删除
   3. 创建需要的路由模块

## 导航
1. element导航菜单
2. 配置路由模式

## 路由拦截
1. 首页随便进入 
2. 新闻 个人中心 旅游 必须登录才可以进入 
   1. 全局前置守卫 
   2. 路由元信息

## 登录界面


## 后台 （了解）
1. 搭建后台服务:npm i express -S 
2. 生产token: npm i jsonwebtoken -S 
   

后台返回token 
    作用:用户身份标识  


## 前端获取token后 解析token字段
1. 安装：npm i jwt-decode -S 
2. 导入：import jwt from 'jwt-decode'
3. 使用:  jwt(token字段)
