<template>
  <div class="container">
    <div class="body">
      <h1 class="centered-text big-text">西藏</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>西藏自治区</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Xizang Autonomous Region</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>藏、乌斯藏、吐蕃、བོད་རང་སྐྱོང་ལྗོངས（藏）།</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>西南地区边疆</td>
        </tr>
      </table>
      <hr>
      <p class="bigger-text">
        西藏自治区（Xizang Autonomous Region），简称“藏”，中华人民共和国自治区，是中国五个少数民族自治区之一，位于中华人民共和国西南地区，素有“世界屋脊”之称的青藏高原的西南部，地处北纬26°50′至36°53′，东经78°25′至99°06′之间，平均海拔在4000米以上。面积120.28万平方公里，辖6个地级市、1个地区，首府拉萨市。截至2023年末，西藏自治区常住人口为365万人。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.fb30475e8f47a18d3772932e6f08bfd3?rik=mMK%2bAea5lCLBbg&riu=http%3a%2f%2fwww.dljs.net%2fuploads%2fallimg%2f2008%2f12030155X-0.jpg&ehk=8K1BTvx%2fG9jCcxBIPPuePeZOsCphNRlead2%2bSu9%2b0AM%3d&risl=&pid=ImgRaw&r=0" alt="西藏全景图" />

      <p class="bigger-text">
        西藏是中国领土不可分割的一部分。自元朝始，中央政权始终对西藏行使着有效管辖。藏族人民是中华民族大家庭中的重要一员。西藏唐宋时期称为“吐蕃”，元明时期称为“乌斯藏”，清代称为“唐古特”“图伯特”等。清朝康熙年间起称“西藏”。1951年5月23日，西藏和平解放。1959年西藏叛乱平定后，中央政府开始对西藏进行全面直接管辖。1965年9月9日，西藏自治区正式宣告成立。2019年12月23日，西藏已基本消除绝对贫困，全域实现整体脱贫。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.a8cadcfe7dbee4f8aa454a3c230fa60f?rik=SoigV5QTMSU%2bQw&riu=http%3a%2f%2ftest.scctt.net.cn%2fapi%3f_api%3dxcd-module-filemanager-file-download%26_apiVersion%3dv1.0.0%26id%3d1f960e51ed63418f908568cf9b219fbf&ehk=oQpo2CT0Rwlf7ts%2b9w6CmauluE09d2kYzh6xTA%2byjVU%3d&risl=&pid=ImgRaw&r=0" alt="西藏地形图" />

      <p class="bigger-text">
        西藏自治区不仅有世界屋脊奇异的地质地貌和独特的自然风光，而且有别具一格的社会人文景观，仅寺庙在历史上最盛时就有2700多座，还有不少宫殿、园林、城堡、要塞、古墓、古碑等。
      </p>
      <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.2c77ab2aaaba4aadcec285214aaba7fc?rik=TdWdRHuY7y%2fLhg&pid=ImgRaw&r=0" alt="西藏地理位置图" />


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