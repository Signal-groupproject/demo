<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">安徽</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>安徽省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Anhui Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>皖</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>中国东部、长江下游、淮河中游</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        安徽省，简称“皖”，为中华人民共和国一级行政区，省会为合肥市。全省东西宽约450公里，南北长约570公里，总面积14.01万平方公里，约占全国总面积的1.45%，居华东第3位，全国第22位。安徽省在地理上属于华东地区，地跨淮河和长江，同时在地域文化上有明显差异，从而孕育出省内的四大文化圈，即江淮文化、庐州文化、皖江文化和徽文化；在经济上属于长江三角洲地区和中国中部经济区，北部和南部分属中原经济区和长江经济区。其南部原徽州府的徽商与粤商、晋商、浙商、苏商在历史上合称为“五大商帮”。自21世纪以来，安徽省与上海市、浙江省、江苏省共同构成的长江三角洲城市群已成为世界六大城市群之一。省人民政府驻合肥市包河区中山路1号。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.4e3ae1cedc73c9eadd2f10206dec17e6?rik=YPnhsOdP2XtS7w&riu=http%3a%2f%2fwww.visacits.com%2ftupian%2fallimg%2fc161203%2f14PK5910X0-1BE.jpg&ehk=tnZvICsNUTErVuB0ZarB%2fA01XCeLAqcvtqdPqBen2cI%3d&risl=&pid=ImgRaw&r=0" alt="广东全景图" />

      <p class="bigger-text">
        明代，安徽属南直隶。清初属于江南省。康熙元年（1662年），设安徽巡抚（又称安庆巡抚）。康熙六年（1667年），江南分省，江南左布政使司改设江南安徽等处承宣布政使司。由于当时，省并非清政府的法定行政单位，所以安徽省的建置是在此后逐步成型。除源于安徽巡抚的“安徽”一名外，在乾隆时，源于安徽巡抚驻地——安庆府的安庆省亦是官方文件中使用的省名之一。
      </p>
      <img class="centered-image rounded-image" src="https://img.zcool.cn/community/0104b55b991281a8012099c80cb85b.jpg@1280w_1l_2o_100sh.jpg" alt="广东地形图" />
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