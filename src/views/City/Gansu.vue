<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">甘肃</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>甘肃省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Gansu Province</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>甘、陇、陇原</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>西北内陆</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        甘肃省，通称甘肃，简称甘或陇，是中华人民共和国省份，位于中国西北地区、黄河上游，省会为兰州市，面积45万平方公里，排名第7。
      </p>
      <img class="centered-image rounded-image" src="https://pic4.zhimg.com/v2-9fbeab25cb98416dd068249f2ce35c83_r.jpg" alt="广东全景图" />
      甘肃为华夏文明的发祥地，天水的伏羲文化历史久远，被称为伏羲故里。武威的凉州文化源远流长，被称为凉国故地。在甘肃秦安县发现的“大地湾文化遗址”被认为可能和上古时代的伏羲有关。陇东地区的庆阳一带是周人发祥地。礼县大堡子山有早期秦公大墓，秦人发祥地“西犬丘”就在礼县一带。甘肃在春秋时代东南部属于秦国，西部属于西戎，公元前688年在现在天水一带秦国设置了邽县，前280年设置陇西、北地二郡。
      <p class="bigger-text">

      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.2d01b41fa21b58e3a362e048fe0e427e?rik=x%2bZo02Capt7Txw&riu=http%3a%2f%2fpic.kuaizhan.com%2fg3%2f83%2f41%2fe8c1-7767-4ac5-b0e5-431a76816cc461&ehk=jSGYdKMR1QI8CaAwuowP4mKFMwbF1xWGsU7Wvc1o%2bOE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="广东地形图" />

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