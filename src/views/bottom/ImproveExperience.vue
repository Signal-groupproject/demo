<template>
  <div class="qa-container">
    <!-- 添加图片和文字区块 -->
    <div class="header-image">
      <img src="@/pictures/page1/2.png" alt="Header Image">
      <div class="header-text">
        <h2>欢迎来到优化体验部分</h2>
        <p>以下内容帮助您更好地计划和享受旅程。</p>
      </div>
    </div>

    <!-- 优化体验部分 -->
    <div class="qa-item">
      <h3 class="qa-question">目的地选择与研究</h3>
      <p class="qa-answer">
        在选择旅游目的地时，考虑您的兴趣和偏好。研究目的地的气候、文化特色、安全情况以及适合您的旅行季节。例如，热爱自然风光的旅客可以选择去探索青海湖和周边的景点。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">交通与住宿预订</h3>
      <p class="qa-answer">
        提前预订机票、火车票或租车服务，以获得更好的价格和更好的座位选择。对于住宿，选择符合您需求的酒店或者考虑在当地租房，根据您的预算和舒适度偏好做出选择。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">旅行保险与紧急联系</h3>
      <p class="qa-answer">
        购买包含紧急救援服务的旅行保险，以应对突发状况如疾病、意外或行李遗失。记下当地急救电话和最近的领事馆联系方式，以备不时之需。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">健康与医疗建议</h3>
      <p class="qa-answer">
        在旅行前，咨询医生获取旅行目的地所需的疫苗和药物建议。带上个人医疗保健信息和药品清单，并确保了解当地的医疗服务和药房位置。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">当地文化与习俗</h3>
      <p class="qa-answer">
        尊重并了解您所访问目的地的文化和习俗是非常重要的。了解和尊重当地的宗教和传统，尤其是在参观宗教场所和参与当地节日时。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">礼仪与行为准则</h3>
      <p class="qa-answer">
        在与当地居民交往时，保持礼貌和尊重。学习几个简单的问候语和基本的礼仪可以帮助您更好地融入当地社区。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">可持续旅游实践</h3>
      <p class="qa-answer">
        支持环保旅游活动，如选择环保友好的旅游运营商和参与环境保护项目。尊重自然和文化遗产，避免对环境造成负面影响。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">文化遗产保护</h3>
      <p class="qa-answer">
        保护和尊重当地的文化遗产和历史建筑。遵守当地的保护法律和规定，不干扰或破坏历史遗迹和自然景观。
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

.header-image {
  position: relative;
  margin-bottom: 20px;
}

.header-image img {
  height: 100%;
  bottom: 0;
  right: 0;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}

.header-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.header-text h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.header-text p {
  font-size: 16px;
  line-height: 1.6;
}

img {
  width: 100%;
  height: auto;
}

</style>
<script setup lang="ts">
</script>