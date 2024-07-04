<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">新疆</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>新疆维吾尔自治区</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Xinjiang Uygur Autonomous Region</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>柱州、西域、安西、新疆省</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>中国西北部，亚欧大陆腹地</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        新疆维吾尔自治区（维吾尔语：شىنجاڭ ئۇيغۇر ئاپتونوم رايونى ），简称“新”，是中华人民共和国自治区，首府乌鲁木齐市，位于中国西北地区，是中国五个少数民族自治区之一。面积166.49万平方千米，是中国陆地面积最大的省级行政区，约占中国国土总面积的六分之一。截至2022年末，自治区常住人口为2587万人。截至2023年1月，新疆维吾尔自治区辖4个地级市、5个地区、5个自治州、12个自治区直辖县级市，自治区人民政府驻乌鲁木齐市。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.tzwU2PtB0t1f3-G3M_1uMQHaGC?rs=1&pid=ImgDetMain" alt="新疆全景图" />

      <p class="bigger-text">
        新疆是中国领土不可分割的一部分。西汉神爵二年（公元前60年），西汉在乌垒（今轮台县境内）设立西域都护府，标志着新疆地区正式纳入中国版图。清光绪十年（1884年），清政府正式在新疆设省，并取“故土新归”之意，改称西域为“新疆”，1949年9月，新疆和平解放。1955年10月1日，成立新疆维吾尔自治区。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.0262128264325b76d015b3197808e923?rik=CWy1AnJdMLEacA&pid=ImgRaw&r=0" alt="新疆地形图" />

      <p class="bigger-text">
        新疆维吾尔自治区地处亚欧大陆腹地，陆地边境线5600多千米，周边与俄罗斯、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、巴基斯坦、蒙古、印度、阿富汗八国接壤，在历史上是古丝绸之路的重要通道，是第二座“亚欧大陆桥”的必经之地，战略位置十分重要。新疆维吾尔自治区有56个民族，主要居住有汉族、维吾尔族、哈萨克族、回族、蒙古族、柯尔克孜族、锡伯族、塔吉克族、乌孜别克族、满族、达斡尔族、塔塔尔族、俄罗斯族等民族。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.bI6uXz1aZqLz2o_Ryu-P_QHaE8?rs=1&pid=ImgDetMain" alt="新疆地理位置图" />


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