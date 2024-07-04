<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">广东</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>广东省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Guangdong Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>南粤</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>中国南岭以南，南海之滨</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        广东省，简称“粤”，中华人民共和国省级行政区，省会广州市。因古地名广信之东，故名“广东”。位于南岭以南，南海之滨，与香港、澳门、广西、湖南、江西及福建接壤，与海南省隔海相望，土地总面积17.98万平方千米。 [141]截至2022年10月，广东省下辖21个地级市、65个市辖区、20个县级市、34个县、3个自治县。 [2] [133]2022年广东户籍人口首次过亿，达10049.7万人 [183]。2023年末，广东常住人口12706万人。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.cb5e1edfe4257c2bcef2a80d4479ecac?rik=B2FLzODCktfWAA&riu=http%3a%2f%2fwww.dljs.net%2fuploads%2fallimg%2f2008%2f0F13340H-0.jpg&ehk=mTIh5wvm%2bjliQCSORd7Bidn5VLXCP9Ld9AU6ZyKbcUY%3d&risl=&pid=ImgRaw&r=0" alt="广东全景图" />

      <p class="bigger-text">
        宋至道三年（997），广南路分为广南东路和广南西路，广东省大部分属广南东路，“广东”即广南东路的简称。明洪武二年（1369），改广东道为广东等处行中书省。清初，“广东省”名称正式使用。
      </p>
      <img class="centered-image rounded-image" src="https://img95.699pic.com/photo/50157/4436.jpg_wh300.jpg!/fh/300/quality/90" alt="广东地形图" />

      <p class="bigger-text">
        广东是岭南文化的重要传承地，在语言、风俗、生活习惯和历史文化等方面都有着独特风格。广东省是中国的南大门，处在南海航运枢纽位置上。汉代时期，徐闻古港是海上丝绸之路始发港，正式翻开了中西方国与国之间海上交流史的第一页。到了清代，广州成为全国唯一的对外通商口岸。改革开放后，广东成为改革开放前沿阵地和引进西方经济、文化、科技的窗口。自1989年起，广东省国内生产总值连续居全国第一位，成为中国第一经济大省，经济总量占全国的1/8。广东省域经济综合竞争力居全国第一。广东省珠三角9市将联手港澳打造粤港澳大湾区，致力于建成与纽约湾区、旧金山湾区、东京湾区并肩的世界第四大湾区。
      </p>
      <img class="centered-image rounded-image" src="https://pic.kuaizhan.com/g3/e7/a3/f469-5414-4b7b-ac29-5e816028fc9895" alt="广东地理位置图" />


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