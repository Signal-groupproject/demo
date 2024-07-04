<template>
  <div class="container">
    <h1 class="centered-text big-text">海南</h1>
      <!-- 添加表格 -->
      <table class="bigger-text">

        <tr>
          <th>中文名</th>
          <td>海南省</td>
        </tr>
        <tr>
          <th>外文名</th>
          <td>Hainan</td>
        </tr>
        <tr>
          <th>别名</th>
          <td>琼、琼州、琼崖</td>
        </tr>
        <tr>
          <th>地理位置</th>
          <td>中国华南地区、中国最南端</td>
        </tr>
      </table>
      <hr>
    <p class="bigger-text">
      海南省，简称琼，是中华人民共和国唯一全境位于热带的省份，省会位于海口市。海南省是一个以海洋为主体的岛屿省份，亦是中华人民共和国总面积和海洋面积最大的省份。全省户籍总人口约1008.12万人，不过每年冬季会有大量候鸟型流动人口居住。海南省以海洋景观而广为人知，也是中国大陆的热门旅游目的地。
          </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.d3403dde76e4f33678ba9c6d834f8ac1?rik=K1Gk2CkruhR2Rg&riu=http%3a%2f%2fh.hiphotos.baidu.com%2fzhidao%2fpic%2fitem%2f80cb39dbb6fd5266275eec87ab18972bd4073628.jpg&ehk=cYtnNeY1GvXoKdIPkdbu118cMx3km1HCRSgrVZPmUCg%3d&risl=&pid=ImgRaw&r=0" alt="上海市全景图" />

    <p class="bigger-text">
      海南省在地理上可分为海南本岛和南海诸岛（海南离岛），其中本岛位于海南省的西北部，大致等于海南岛及其领海附属岛屿，与周边国家没有领土争议；离岛位于海南省中北部至南部，大致等于三沙市法定管辖的中沙群岛、西沙群岛和南沙群岛，与周边国家尚存领土争议，中华人民共和国实际控制西沙和中沙全部岛礁，但并没有实际控制南沙部分岛礁。海南省人民政府驻海口市美兰区国兴大道9号。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.94f12c3ee22ad6b576ed68af07f11ad2?rik=OVY4iVY5bsfFHA&riu=http%3a%2f%2fwenhui.whb.cn%2fu%2fcms%2fwww%2f201905%2f2418111606cn.jpg&ehk=Sqlfy2EGbqnbIT55OL1CjwkejDxMVSnuun4m%2fGBlknA%3d&risl=&pid=ImgRaw&r=0" alt="上海地形图" />

    <p class="bigger-text">
      海南全省陆地总面积约3.54万平方公里，是中国陆地面积最小的省，其中海南本岛陆地面积3.39万平方公里，约占海南省陆地面积的95%；全省海洋总面积约220万平方公里，南海诸岛领海面积210万平方公里，约占海南省海洋面积的95%。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://th.bing.com/th/id/OIP.DmSvf06XuHskF6TzMtECOwHaE7?rs=1&pid=ImgDetMain" alt="上海地理位置图" />

    <p class="bigger-text">
      1988年，第七届全国人大一次会议通过决议，撤销广东省海南行政区，设立海南省和海南经济特区，海南省成为中华人民共和国第30个省级行政区，也是至今为止中华人民共和国最年轻的省份。2008年，中华人民共和国国务院同意海南建设国际旅游岛。2018年后又设立海南自由贸易港，获得独立的经济事务与行政事务立法权，并被予以特殊管辖，2023年起自贸港开始全岛封关进程，与内地（非海南岛地区）实行海关分辖制度，将被允许采取独立税制、自主管理、特殊法律、专用出入口岸等事项，预计2025年底实现海南成为新兴经济体的目标。
    </p>
    <!-- 插入图片 -->
    <img class="centered-image rounded-image" src="https://th.bing.com/th/id/R.c515440e3ca78c6af4c0cdd5128b0d55?rik=ZPBhtxP32MN6PA&riu=http%3a%2f%2fwww.sznews.com%2fphoto%2fpic%2f2019-12%2f13%2f74c07a4c-5718-4dfa-81aa-024e3411b2db.jpg&ehk=NMF%2b7PSj4ZPXfvcXxf3dAvDXGNrCVcynWIapHLGKwoo%3d&risl=&pid=ImgRaw&r=0" alt="上海行政区划图" />
    <el-backtop></el-backtop>
  </div>
</template>

<script setup>
// JavaScript 逻辑
</script>

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
}

.big-text {
  font-size: 50px;
  display: inline-block; /* 或 display: block; */
  border-bottom: 2px solid black;
  width: 100%; /* 设置横线的宽度为文本容器的80% */
}
.bigger-text {
  text-indent: 2em;
}
.centered-image {
  display: block;
  margin: 0 auto;
  max-width: 70%;
  margin-bottom: 20px;
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