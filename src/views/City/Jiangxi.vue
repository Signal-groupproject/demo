<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">江西</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>江西省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Jiangxi Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>江右、西江、豫章</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>中国东南部、长江中下游</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        江西省（江西， 汉语拼音：Jiāngxī，邮政式拼音：Kiangsi 或 Chianghsi，赣语： Kongsi，客家话：Gong Si），简称赣，是中华人民共和国东南地区的内陆省份及一级行政区，位于长江中下游南岸，东接浙江与福建、北邻安徽和湖北，西连湖南，南毗广东， 是长江三角洲、珠江三角洲和闽南三角地区的腹地，境内最大河流为长江支流赣江，自南向北纵贯全境，注入中国目前第一大淡水湖——鄱阳湖，省会为南昌。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.1TRVEMDJmRBg49sVjflSFQHaKv?rs=1&pid=ImgDetMain" alt="广东全景图" />
      江西最大河流为赣江而简称赣、由于赣江和鄱阳湖，江西也称为“赣鄱大地”，又因为从长江以北往南看，江西在江南的右部而江东在江南的左部， 江西在历史文献中又称为“江右”与江东（“江左”）相对应。
      <p class="bigger-text">

      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.96cfbee022afa430c7223c358eea04c3?rik=eErOQsg7ln0g%2bQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20171114%2fa9cee30cfd214942acaaca3d316aaee8.jpeg&ehk=GT7S1g42tIIl62cfG51OlJakqlM5BEDBbL9wTmAkg0I%3d&risl=&pid=ImgRaw&r=0" alt="广东地形图" />

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