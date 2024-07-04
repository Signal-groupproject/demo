<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">吉林</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>吉林省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Jilin Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>白山松水</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>东北地区</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        吉林省，简称“吉”，是中华人民共和国省级行政区，省会长春市；位于中国东北地区中部，与辽宁省、内蒙古自治区、黑龙江省相连，并与俄罗斯、朝鲜接壤，地处东北亚地理中心位置；地势由东南向西北倾斜，呈现出东南高、西北低的特征，属于温带大陆性季风气候；截至2022年末，全省辖8个地级市、1个自治州，面积18.74万平方千米。 2023年末，吉林省总人口为2339.41万人。 截至2023年末全省乡镇情况：总计607个乡镇，其中镇426个、乡153个、民族乡28个，街道办事处363个。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.528e4d90cd4ad6645f6e22beb5979ff9?rik=sMIxlRzW1wr8xw&riu=http%3a%2f%2fp2.cri.cn%2fM00%2f59%2f82%2fCqgNOlds7YaABGf8AAAAAAAAAAA805.864x647.png&ehk=LeofN4jwagYU9P%2flNEIDNQ7lk8mXaVwQ53h9HPC2bfQ%3d&risl=&pid=ImgRaw&r=0" alt="广东全景图" />
      吉林省具有沿边近海优势，是全国9个边境省份之一，是国家“一带一路”向北开放的重要窗口，是吉林乃至中国对外贸易、对外交流的重要通道。吉林省具有老工业基地振兴优势，加工制造业比较发达，汽车、石化、食品、装备制造、医药健康为五大重点产业，尤其是汽车、高铁制造在国内处于领先水平；吉林省是国家重要的商品粮生产基地，人均粮食占有量、粮食商品率、粮食调出量及玉米出口量连续多年居全国首位；吉林省是国家生态建设试点省，长白山自然保护区被联合国确定为“人与生物圈”自然保留地。2022年3月，中央支持吉林省创建中国冰雪经济高质量发展试验区。
      <p class="bigger-text">

      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.ZMEw-Zdxn6rTBaQNXqVRfQHaEJ?rs=1&pid=ImgDetMain" alt="广东地形图" />

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