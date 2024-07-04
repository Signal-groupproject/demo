<template>
  <div class="qa-container">
    <!-- 添加图片和文字区块 -->
    <div class="header-image">
      <img src="@/pictures/page1/1.jpg" alt="Header Image">
      <div class="header-text">
        <h2>欢迎来到常见问题解答</h2>
        <p>这里有关于旅行的一些常见问题和解答，帮助您更好地计划和享受旅程。</p>
      </div>
    </div>

    <!-- 常见问题和解答部分 -->
    <div class="qa-item">
      <h3 class="qa-question">如何制定旅游预算？</h3>
      <p class="qa-answer">
        制定旅游预算时，考虑交通费用（如机票、火车票、汽车租赁等）、住宿费用、餐饮费用、景点门票以及预留的备用金。在计划预算时，还要考虑可能的额外费用，如购物、娱乐活动或者小费。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">旅游时如何保障安全？</h3>
      <p class="qa-answer">
        在旅行前，建议了解目的地的安全情况，避免前往安全风险较高的地区。保持贵重物品的安全，避免在公共场所炫耀财物。可以购买旅行保险以应对突发情况，如意外受伤、疾病或行李丢失。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">旅游时应该注意什么文化礼仪？</h3>
      <p class="qa-answer">
        不同地区有不同的文化礼仪和习惯，应尊重当地的风俗习惯和宗教信仰。在参观宗教场所时，要穿着适当，避免不恰当的行为或言语。在与当地人交流时，保持礼貌和友好，可以增加与他们的沟通和互动。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">如何处理旅途中的紧急情况？</h3>
      <p class="qa-answer">
        在旅行前，记下紧急联系电话（如当地急救、警察局等）。如果遇到紧急情况，保持镇静并及时联系当地的紧急服务机构。建议提前规划好紧急联系人，如家人或朋友的联系方式。
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">推荐的旅游线路和旅行建议</h3>
      <ul class="route-list">
        <li>青海甘肃大环线: 青海湖 - 大柴旦翡翠湖 - 水上雅丹 - 察尔汗盐湖 - 莫高窟</li>
        <li>北疆大环线: 天山天池 - 喀纳斯湖 - 五彩滩 - 禾木村 - 赛里木湖 - 那拉提草原</li>
        <li>稻亚环线: 红海子 - 格底拉姆 - 塔公草原 - 墨石公园 - 雅拉雪山观景台 - 四姑娘山 - 猫鼻梁观景台</li>
      </ul>
      <p class="travel-tips">
        旅行建议：<br/>
        1. 提早预订酒店和机票，越早定价格越实惠<br/>
        2. 带好证件，可以带一些常备药以备不时之需<br/>
        3. 稻城亚丁属于高海拔地区，做好防晒和保暖<br/>
        4. 目的地适合自驾游的可以考虑租车
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

.route-list li {
  color: #666; /* 设置推荐线路文字颜色为深灰色 */
}
</style>
