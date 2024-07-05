<template>
  <div class="qa-container">
    <!-- 添加图片和文字区块 -->
    <div class="header-image1">
      <img src="./Dimage/美食背景图.png" alt="Header Image">
      <div class="header-text1">
        <h2>舌尖带动脚步，“味蕾游”才是最难忘的到此一游</h2>
        <p>美食旅游是满足人民美好生活新需求的重要载体，也是促进旅游产业高质量发展的新动能</p>
      </div>
    </div>

    <!-- 常见问题和解答部分 -->
    <div class="qa-item">
      <h3 class="qa-question">美食旅游蕴藏巨大的市场潜力</h3>
      <p class="qa-answer">
        食，在中国人的生活观念里一直处于特殊地位，位居旅游六要素之首也有其中之意。中国古代盛行的“游宴”“船宴”，实为美食旅游的雏形。以疫情前的2019年为产业和数据基本面来分析，2019年，中国国内旅游人数60.06亿人次，其中八成以上的游客已经跨越单纯欣赏美丽风景的初级阶段，开始进入感受美好生活的中高级阶段，以旅游的方式享受异地美食成为重要选项。国家统计局数据显示，2019年餐饮业收入达4.6亿元，同比增长9.4%，国人的餐饮消费能力逐年提高，“吃”成为愈发重要的主题。中国旅游研究院和马蜂窝旅游联合成立的“自由行大数据联合实验室”发布的报告表明：2019年，游客对于旅行的关注点不再只是聚焦于价格，而是更注重出行品质和深度文化体验。美食一直是游客最关注的体验因素，45.5%的游客重视旅途中的美食体验。“本地味道”和“网红美食”成为旅游美食关键词，甚至“为一顿美食赴一个村”。种种迹象和调研数据表明美食旅游正在成为中国人的旅游习惯和生活方式。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">美食在旅行中扮演了怎样的角色？</h3>
      <p class="qa-answer">
        美食不仅是满足口腹之欲的工具，它还是文化的载体和交流的桥梁。每一道地方特色菜背后都蕴含着当地人的智慧和生活方式，通过品尝美食，我深入体验到了当地的风土人情。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">美食如何影响了旅行路线和体验？</h3>
      <p class="qa-answer">
        我常常根据美食来规划我的旅行路线。比如听说广东有许多独特的美食，我就特意安排了时间去探索这些地方，并且通过品尝当地的特色菜肴，更加深入地了解了当地的文化和历史。
      </p>
    </div>




  </div>
</template>

<style scoped>
.qa-container {
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px;
}

.qa-item {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.qa-question {
  font-size: 18px;
  margin-bottom: 8px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
  color: black; /* 设置问题文字颜色为黑色 */
}

.qa-answer {
  color: #666; /* 设置回答文字颜色为深灰色 */
  line-height: 1.6;
}

.route-list {
  margin-top: 10px;
  padding-left: 5px;
  text-align: left;
}

.travel-tips {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
}

.header-image1 {
  position: relative;
  height: 800px;
  margin-bottom: 20px;
}

.header-image1 img {
  position: relative;
  height: 100%;
  bottom: 0;
  right: 0;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}

.header-text1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #000000;
}

.header-text1 h2 {
  font-size: 40px;
  margin-bottom: 10px;
}

.header-text1 p {
  font-size: 16px;
  line-height: 1.6;
}

img {
  width: 100%;
  height: auto;
}

.route-list li {
  color: #666; /* 设置推荐线路文字颜色为深灰色 */
}
</style>
<script setup lang="ts">
</script>