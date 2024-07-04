<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">北京</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>北京市</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Beijing</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>北平、燕京、蓟、幽州</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>中国华北地区，华北平原北部</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        北京市，通称北京，简称“京”，曾称“北平”，中华人民共和国的首都及直辖市，是中国的政治、文化、科技、教育、军事和国际交往中心。北京是一座全球城市，是世界人口第三多的城市和人口最多的首都。北京位于华北平原的北部边缘，背靠燕山，永定河流经老城西南，毗邻天津市、河北省，为京津冀城市群的重要组成部分。
      </p>
      <img class="centered-image rounded-image" src="https://pic.baike.soso.com/ugc/baikepic2/15626/20220421153906-1310095742_png_563_375_115704.jpg/1284" alt="上海市全景图" />

      <p class="bigger-text">
        北京是中国古都，是拥有三千余年建城历史、八百六十余年建都史的历史文化名城，有辽、金、元、明、清五个朝代在此定都。北京荟萃了自元明清以来的近世中华文化，拥有众多历史名胜古迹和人文景观，拥有7项世界遗产，是世界上拥有文化遗产项目数最多的城市。北京古迹众多，著名的有紫禁城、天坛、颐和园、圆明园、北海公园等；胡同和四合院作为北京老城的典型民居形式，已经是北京历史重要的文化符号。北京是中国重要的旅游城镇，被《米其林旅游指南》评为“三星级旅游推荐”（最高级别）目的地。市人民政府驻通州区运河东大街57号。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th?id=OIP.CCkvQRulOcfAQJA6_IhUnAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="上海地形图" />

      <p class="bigger-text">
        北京在中国大陆的政治、经贸、文化、教育和科技领域拥有显著影响力，为中国绝大多数国有企业总部所在地，并且拥有全球最多的财富世界500强企业总部，北京商务中心区聚集了大量国际性金融商务办公设施及摩天大楼，中关村地区则集中了中国大陆重要的高新技术产业，是京津石高新技术产业带的核心区。北京是中国大陆铁路运输和公路交通运输的枢纽城市，拥有北京首都国际机场和北京大兴国际机场两座机场飞行区等级最高级别(4F级)的枢纽机场，北京地铁则是世界上运营里程第二、客运量最多的城市轨道交通系统。北京是中国大陆拥有最多高等院校的城市，校址位于北京的北京大学和清华大学被视为中国顶尖大学的代表。北京在全球政治、经济等社会活动中处于重要地位并具有主导辐射带动能力，在GaWC全球城市排行中排名第6位，与中国的其他城市相比，仅次于香港和上海。北京被世界城市研究机构GaWC评为世界一线城市，联合国报告指出北京人类发展指数居中国城市第二位。北京也是世界上唯一的“双奥之城”，即既主办过夏季奥运会，也主办过冬季奥运会的城市。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th?id=OIP.3NXGz7K3aeJBfVL_C2Nm8AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="上海地理位置图" />


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