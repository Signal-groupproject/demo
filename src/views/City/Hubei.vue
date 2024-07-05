<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">湖北</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>湖北省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Hubei Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>鄂、楚、荆楚、千湖之省</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>中国中部，长江中游</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        湖北省，简称“鄂”，别名楚、荆楚，中华人民共和国省级行政区，省会武汉。地处中国中部地区，东邻安徽，西连重庆，西北与陕西接壤，南接江西、湖南，北与河南毗邻，介于北纬29°01′53″—33°6′47″、东经108°21′42″—116°07′50″之间，东西长约740千米，南北宽约470千米，总面积18.59万平方千米，占中国总面积的1.94% 。截至2023年6月，湖北省辖12个地级市、1个自治州、4个省直辖县级行政区。截至2023年末，湖北省常住人口5838万人。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.on8w5UWzRp1BbnVs3LywMgHaHa?rs=1&pid=ImgDetMain" alt="广东全景图" />
      湖北省地势大致为东、西、北三面环山，中间低平，略呈向南敞开的不完整盆地。在全省总面积中，山地占56%，丘陵占24%，平原湖区占20%，属长江水系。湖北省地处亚热带，全省除高山地区属高山气候外，大部分地区属亚热带季风性湿润气候。湖北历史代表文化为“荆楚文化”
      <p class="bigger-text">

      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.c1f10215ba4efecd80b83217d41e7ced?rik=vgfN6KSrvcUJlQ&riu=http%3a%2f%2fa2.peoplecdn.cn%2fc1f10215ba4efecd80b83217d41e7ced.jpg&ehk=WFuIuG4A0y5gPLxbCe%2fUOZ4wf%2bdjoT98Rr3Vx9se09A%3d&risl=&pid=ImgRaw&r=0" alt="广东地形图" />

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