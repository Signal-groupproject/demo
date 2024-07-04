<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">河北</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>河北省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Hebei Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>燕赵、冀州、中书省、北直隶、直隶</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>华北地区</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        河北省，简称“冀”，中华人民共和国省级行政区，省会石家庄，位于北纬36°05′-42°40′，东经113°27′-119°50′之间东南部、南部衔山东、河南两省，西倚太行山与山西省为邻，西北与内蒙古自治区交界，东北部与辽宁接壤。总面积18.88万平方千米。截至2023年末，河北省下辖11个地级市，共有49个市辖区、21个县级市、91个县、6个自治县，常住总人口为7393万人。
      </p>
      <img class="centered-image rounded-image" src="https://pic.616pic.com/ys_bnew_img/00/38/10/wEez5zyEVG.jpg" alt="河北全景图" />
      河北省地处华北，漳河以北，东临渤海、内环京津，西为太行山地，北为燕山山地，燕山以北为张北高原，其余为河北平原，有世界文化遗产3处、A级景区共513家 、国家5A级旅游景区12家 、国家4A级旅游景区162家 、国家级历史文化名城6座 。河北在战国时期大部分属于赵国和燕国，又被称为燕赵之地，地处温带大陆性季风气候。河北地处中原地区，自古有“燕赵多有慷慨悲歌之士”之称。
      <p class="bigger-text">

      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.EmmCSn661aKCU_mC9MXz5wHaE3?rs=1&pid=ImgDetMain" alt="河北地形图" />

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