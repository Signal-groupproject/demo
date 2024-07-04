<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">青海</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>青海省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Qinghai Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>西海、中华水塔</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>青藏地区北部</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        青海省，简称青，为中国一级行政区，位于中国西部、青藏高原东北部。因境内有全中国最大的内陆咸水湖——青海湖而得名，省会是西宁。青海是长江、黄河、澜沧江的发源地，故被称为“三江源”。省人民政府驻西宁市城中区西大街12号。
      </p>
      <img class="centered-image rounded-image" src="https://pic1.zhimg.com/v2-c6b1832447b7832a6690a4100a8b9210_r.jpg" alt="广东全景图" />

      <p class="bigger-text">
        青海位于青藏高原东北部，全省均属高原范围之内。地形复杂，地貌多样。全省平均海拔3000多米，最高点昆仑山的布喀达板峰为6860米，最低点在民和下川口村，海拔为1650米。境内山脉高耸，地形多样，河流纵横，湖泊棋布。巍巍昆仑山横贯中部，唐古拉山峙立于南，祁连山矗立于北，茫茫草原起伏绵延，柴达木盆地浩瀚无限。长江、黄河及澜沧江（湄公河）（因此被称作“三江源”）之源头在青海。巴颜喀拉山为长江和黄河的分水岭。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.68358c1a81df34b7f09ac60c89c5d091?rik=EB%2bhy8zL%2bggZIw&riu=http%3a%2f%2fwww.1810516.com%2fuploads%2f180525%2f1-1P525161543X1.jpg&ehk=2M6gZaymyh3iYpmNl3GF7a1Z2oWlSl2OPOcrujycTH8%3d&risl=&pid=ImgRaw&r=0" alt="广东地形图" />
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