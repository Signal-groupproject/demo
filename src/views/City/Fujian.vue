<template>
  <div class="container">
    <h1 class="centered-text big-text">福建</h1>
    <!-- 添加表格 -->
    <table class="bigger-text">

      <tr>
        <th>中文名</th>
        <td>福建省</td>
      </tr>
      <tr>
        <th>外文名</th>
        <td>Fujian</td>
      </tr>
      <tr>
        <th>别名</th>
        <td>闽、八闽、海西</td>
      </tr>
      <tr>
        <th>地理位置</th>
        <td>中国东南沿海</td>
      </tr>
    </table>
    <hr>
    <p class="bigger-text">
      福建省（闽东语：福建省，平话字：Hók-gióng-sēng；闽南语：福建省，白话字：Hok-giàn Séng；客家话：福建省，白话字：Fuk-kien Sén），简称闽，为中华人民共和国东南沿海省份，省会为福州。东西最宽为480公里，南北最长为530公里，陆域面积12.4万平方公里。北与浙江省毗邻，西与江西省相连，西南与广东省接界，东隔台湾海峡与台湾相望。福建省下辖8个普通地级市，1个副省级城市和平潭综合实验区。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.qmC8QtLM6-vsY-mgR_dQXwHaE8?rs=1&pid=ImgDetMain" alt="上海市全景图" />

    <p class="bigger-text">
      福建地理特点是“依山傍海”。福建多山，全省90％的土地是山地丘陵；这些山地多为森林所覆盖，使得福建的森林覆盖率达62.96%，居全国第一。福建的大陆海岸线长度居全国第二位，海岸曲折，岛屿众多。而且由于福建位于东海与南海的交通要冲，是历史上海上丝绸之路、郑和下西洋的起点，也是海上商贸集散地，和中国其他地方不同，福建沿海的文明是海洋文明而内地客家地区是农业文明。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.fb4c582d25e13009b1490cbd319a22cc?rik=IYR7hGJm9Rffsw&riu=http%3a%2f%2fp1.itc.cn%2fimages01%2f20200716%2fb25d8e145ea9406f9913807a7834703d.jpeg&ehk=1V7d7QXlBEQKDi9bwQRK6L55SPw5hQrxM8EG4Vw1ww0%3d&risl=&pid=ImgRaw&r=0" alt="上海地形图" />

    <p class="bigger-text">
      福建经济总量位居全国第8位，是中国经济发展最快的省份之一。2014年12月12日，国务院决定设立中国（福建）自由贸易试验区（福州片区共31.26平方公里、平潭片区共43平方公里，厦门片区共43.78平方公里），继上海自由贸易试验区后，中国第二批三个自由贸易试验区之一。福建旅游资源丰富，仅世界遗产就有武夷山、鼓浪屿、福建土楼、中国丹霞（泰宁）和泉州：宋元中国的世界海洋商贸中心五处。福建的汉族居民，主要可分为闽海、客家二大族群，此外还有不同的少数民族，如畲族为该省最主要的少数民族，其它少数民族多为近现代以后迁居而来。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.aa1fa24bf36bc69520491954892e86eb?rik=cPiI22kJDGf1ww&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180820%2ff1edd13559c549d2878d13653b2159a6.jpeg&ehk=Ih8OOkJTtURxU7HZQma6su6rnakTKUqv%2bwNI2YX4DL0%3d&risl=&pid=ImgRaw&r=0" alt="上海地理位置图" />

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
.bigger-text {
  text-indent: 2em;
}
.centered-text {
  margin-bottom: 20px;
}

.bigger-text {
  font-size: 20px;
}

.centered-image {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  margin-bottom: 20px;
}

.big-text {
  font-size: 50px;
  display: inline-block; /* 或 display: block; */
  border-bottom: 2px solid black;
  width: 100%; /* 设置横线的宽度为文本容器的80% */
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