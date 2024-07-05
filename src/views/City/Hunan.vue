<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">湖南</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>湖南省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Hunan Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>湘、楚、湘楚、潇湘、三湘</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>华中地区</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        湖南省，简称“湘”，是中华人民共和国省级行政区，省会长沙市，东临江西省，西接重庆市、贵州省，南毗广东省、广西壮族自治区，北连湖北省。地处云贵高原向江南丘陵和南岭山脉向江汉平原过渡的地带，地势呈三面环山、朝北开口的马蹄形地貌，由平原、盆地、丘陵地、山地、河湖构成，地跨长江、珠江两大水系，属亚热带季风气候。 截至2021年5月，湖南省下辖13个地级市，1个自治州，总面积21.18万平方千米。2023年末，湖南省常住人口6568万人。
      </p>
      <img class="centered-image rounded-image" src="https://img.zcool.cn/community/01f8f45d849696a801211d53b37c09.jpg@1280w_1l_2o_100sh.jpg" alt="广东全景图" />
      远在旧石器时代湖南就已有古人类活动；两晋时期设有以“湘”命名的“湘州”；唐朝设湖南观察使，为湖南建置之名始；宋朝设“湖南路”，元朝设“湖广行省”，明朝设湖广承宣布政使司（仍称行省）；清分湖广省置湖南省。湖南省历史代表文化为“湖湘文化”。 因大部分区域处于洞庭湖以南而得名“湖南”，因省内最大河流湘江流贯全境而简称“湘”，自古盛植木芙蓉，五代时就有“秋风万里芙蓉国”之说，因此又有“芙蓉国”之称；是华夏文明的重要发祥地之一，相传炎帝神农氏在此种植五谷、织麻为布、制作陶器，坐落于株洲市的炎帝陵成为凝聚中华民族的精神象征；处于东部沿海地区和中西部地区的过渡带、长江开放经济带和沿海开放经济带的结合部，具有承东启西、连南接北的枢纽地位。
      <p class="bigger-text">

      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.faa6dfad5a6f0dae6564fc15dbffd83b?rik=9fMbDtzOq4JGiA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50074%2f5355.jpg_wh1200.jpg&ehk=swoKcP7EMbdm1eqh%2bxvNPNJHdlqgR9xgy0jJDVND5wg%3d&risl=&pid=ImgRaw&r=0" alt="广东地形图" />

    </div>
    <el-backtop></el-backtop>
  </div>

</template>

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
  text-indent: 2em;
}

.big-text {
  font-size: 50px;
  display: inline-block;
  border-bottom: 2px solid black;
  width: 100%;
}

.centered-image {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  margin-bottom: 20px;
  border-radius: 10px;
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
<script setup lang="ts">
</script>