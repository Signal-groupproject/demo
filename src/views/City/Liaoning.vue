<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">辽宁</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>辽宁省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Liaoning</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>共和国长子、东方鲁尔</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>东北地区南部，黄渤海北岸</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        辽宁省，简称“辽”，取辽河流域永远安宁之意而得其名，是中华人民共和国省级行政区，省会沈阳市；位于东北地区南部，南濒黄海、渤海二海，西南与河北省接壤，西北与内蒙古自治区毗连，东北与吉林省为邻，东南以鸭绿江为界与朝鲜隔江相望；地势大致为自北向南，自东西两侧向中部倾斜，属温带季风气候；截至2022年，全省辖14个地级市，总面积14.87万平方千米，2023年末，辽宁省常住人口4182万人。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.afba176e23b2da93c69170e5b095ab87?rik=jR70bFJtaNJk6Q&riu=http%3a%2f%2fpic.616pic.com%2fys_bnew_img%2f00%2f28%2f02%2fnM2MaxXPoZ.jpg&ehk=m3sSsQR2kE4BfHghT9vmcO9zs%2bm4i%2bzIMeGlTe4ZXW0%3d&risl=&pid=ImgRaw&r=0" alt="辽宁市全景图" />

      <p class="bigger-text">
        据史书《禹贡》记载，辽宁省建制于上古社会，夏商为幽州、营州之地，周分封属燕国。春秋时期，行政区划开始设郡、县，燕国置辽东、辽西两郡，秦置辽东、辽西、右北平三郡。公孙度置平州。伪满洲国期间，辽宁地区分为奉天、锦州、安东3省及关东州等。新中国成立后，辽宁省是新中国工业的摇篮，为新中国贡献“1000多个全国第一”，被誉为“共和国长子”、“辽老大”。辽宁省历史代表文化为“东北文化”。辽宁基础设施完善，在全国率先实现了陆地县全部通高速，拥有6个港口，拥有东北最为通畅完善的空港网络。拥有九门口长城、五女山山城、沈阳故宫和昭陵、福陵、永陵等6处世界文化遗产。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.cc24e88c376601a48efea34b546b3f7b?rik=shKCCM1iGOltbg&riu=http%3a%2f%2fwww.zedsy.com%2fUploadFiles%2f2016-12%2f2%2f2016120518270011886.jpg&ehk=CUu%2fW2fX8dRgstusHCg0KEqyhwIOySHPIw873rsq3Ig%3d&risl=&pid=ImgRaw&r=0" alt="辽宁地形图" />

      <p class="bigger-text">
        北京在中国大陆的政治、经贸、文化、教育和科技领域拥有显著影响力，为中国绝大多数国有企业总部所在地，并且拥有全球最多的财富世界500强企业总部，北京商务中心区聚集了大量国际性金融商务办公设施及摩天大楼，中关村地区则集中了中国大陆重要的高新技术产业，是京津石高新技术产业带的核心区。北京是中国大陆铁路运输和公路交通运输的枢纽城市，拥有北京首都国际机场和北京大兴国际机场两座机场飞行区等级最高级别(4F级)的枢纽机场，北京地铁则是世界上运营里程第二、客运量最多的城市轨道交通系统。北京是中国大陆拥有最多高等院校的城市，校址位于北京的北京大学和清华大学被视为中国顶尖大学的代表。北京在全球政治、经济等社会活动中处于重要地位并具有主导辐射带动能力，在GaWC全球城市排行中排名第6位，与中国的其他城市相比，仅次于香港和上海。北京被世界城市研究机构GaWC评为世界一线城市，联合国报告指出北京人类发展指数居中国城市第二位。北京也是世界上唯一的“双奥之城”，即既主办过夏季奥运会，也主办过冬季奥运会的城市。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.dGBdVGayr9zo8ggvqSVYPgHaEs?rs=1&pid=ImgDetMain" alt="辽宁地理位置图" />


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