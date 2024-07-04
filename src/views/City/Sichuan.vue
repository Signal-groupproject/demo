<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">四川</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>四川省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Sichuan Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>川、蜀</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>西南内陆地区</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        四川省，简称川或蜀，是中华人民共和国西南地区一个省份，省会及最大城市是成都市。有“天府之国”之称。位于长江上游，由四川盆地和川西高原山地两大部分组成，全省人口绝大部分都聚居在四川盆地。常住总人口8374万人，省人民政府驻成都市锦江区督院街30号。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.bf9c0101df4001ac7cb9295cc9c00eb4?rik=QL1vQLFqaGg7RA&riu=http%3a%2f%2fwww.cgzdl.com%2fuploads%2fallimg%2fmap%2f2021041417(24).jpg&ehk=t2L55RoY0FIFjvUuCC8GLlQtOUZs6rq9kIcBiCen2AU%3d&risl=&pid=ImgRaw&r=0" alt="广东全景图" />
      四川地区先秦时曾分属巴、蜀两国，故别称“巴蜀”，后因宋代在此设置的“川峡四路”而得名“四川”。四川地区曾出现过包括蜀汉、前蜀、后蜀在内的多个政权，多次在中国历史上扮演重要角色：南宋四川军民依靠山城抗击蒙军53年，延长了南宋国祚；四川保路运动是辛亥革命推翻清朝统治的导火索；第二次中日战争时期，重庆做为陪都，使得四川成为中国的“大后方”，为抗战胜利做出了重要贡献。1997年，重庆脱离四川省成为直辖市；两省市发展紧密，合称“川渝”。
      <p class="bigger-text">

      </p>
      <img class="centered-image rounded-image" src="https://www.jiuzhai.com/images/a-1.jpg" alt="广东地形图" />

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