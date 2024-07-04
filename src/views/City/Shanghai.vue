<template>
  <div class="container">
    <h1 class="centered-text big-text">上海</h1>
    <!-- 添加表格 -->
    <table class="bigger-text">

      <tr>
        <th>中文名</th>
        <td>上海市</td>
      </tr>
      <tr>
        <th>外文名</th>
        <td>Shanghai</td>
      </tr>
      <tr>
        <th>别名</th>
        <td>申城</td>
      </tr>
      <tr>
        <th>地理位置</th>
        <td>中国华东地区</td>
      </tr>
    </table>
    <hr>
    <p class="bigger-text">
      上海市地处我国东部海岸中段，长江入海口。自古为海边渔村，春秋时为楚国春申君封邑，宋设镇，始称上海。1927年设市，现为我国四个直辖市之一。为我国对外开放城市之一，同时也是世界大都市之一。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://pic1.zhimg.com/80/v2-ec68a7a9c0cb727d82ddee72edcf26e4_1440w.webp" alt="上海市全景图" />

    <p class="bigger-text">
      上海地处长江三角洲平原东端，平均海拔为4米，仅西部松江区有少数残丘，天马山最高，海拔98.2米。长江口的崇明岛面积为1083多平方千米，是我国仅次于台湾和海南的第三大岛。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://pic1.zhimg.com/80/v2-f56ea27f21013c9b2223bcaedeb349d4_1440w.webp" alt="上海地形图" />

    <p class="bigger-text">
      上海地处太平洋西岸，亚洲大陆东沿，长江三角洲前缘，东濒东海，南临杭州湾，西接江苏、浙江两省，北界长江入海口，长江与东海在此连接。上海正当我国南北弧形海岸线中部，交通便利，腹地广阔，地理位置优越，是一处优良的江海港口。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://pic4.zhimg.com/80/v2-c7a28263bb2849f0db421c17f0bb276b_1440w.webp" alt="上海地理位置图" />

    <p class="bigger-text">
      上海辖黄浦区、卢湾区、徐汇区、长宁区、静安区、普陀区、闸北区、虹口区、杨浦区、宝山区、闵行区、嘉定区、浦东新区、松江区、金山区、青浦区、南汇区(惠南镇)、奉贤区(南桥镇) 18个区和崇明县(城桥镇)一县。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://pic3.zhimg.com/80/v2-7b6c383510f2e3388e16e21c25c11a06_1440w.webp" alt="上海行政区划图" />
    <el-backtop></el-backtop>
  </div>
</template>

<script setup>
// JavaScript 逻辑
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20%;
  background: linear-gradient(to bottom, #c7ddc6, #ffffff);
}

.centered-text {
  margin-bottom: 20px;
}

.bigger-text {
  font-size: 20px;
}

.big-text {
  font-size: 50px;
  display: inline-block; /* 或 display: block; */
  border-bottom: 2px solid black;
  width: 100%; /* 设置横线的宽度为文本容器的80% */
}
.bigger-text {
  text-indent: 2em;
}
.centered-image {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  margin-bottom: 20px;
}

.rounded-image {
  border-radius: 10px;
}
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  border: 1px solid #535b63;
}

th, td {
  border: 1px solid #535b63;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>