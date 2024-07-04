<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">河南</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>河南省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Henan Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>中原、中州、中土、豫州</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>中国中东部、华北平原南部的黄河中下游地区</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        河南省，简称“豫”，中华人民共和国省级行政区，省会郑州，位于中国中东部、黄河中下游，东接安徽、山东，北接河北、山西，西连陕西，南临湖北，总面积16.7万平方千米。地势呈望北向南、承东启西之势，西高东低，由平原和盆地、山地、丘陵、水面构成；地跨海河、黄河、淮河、长江四大流域。大部分地处暖温带，南部跨亚热带，属北亚热带向暖温带过渡的大陆性季风气候。截至2023年末，河南省辖17个地级市，21个县级市（含1个省直辖县级市）、82个县、54个市辖区。 全省常住人口9815万人。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.NObA7CIQyHmUvCzhYKMa6QHaGR?rs=1&pid=ImgDetMain" alt="广东全景图" />
      河南省地处沿海开放地区与中西部地区的结合部，是中国经济由东向西梯次推进发展的中间地带，是全国农产品主产区和重要的矿产资源大省，人口大省，重要的综合交通枢纽和人流、物流、信息流中心，全国农业大省和粮食转化加工大省。 2021年12月，科技部发函支持郑州市建设国家新一代人工智能创新发展试验区。
      <p class="bigger-text">

      </p>
      <img class="centered-image rounded-image" src="https://pic4.zhimg.com/v2-7a5e7cc99be32f47e39203fafa7417d8_r.jpg?source=1940ef5c" alt="广东地形图" />

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