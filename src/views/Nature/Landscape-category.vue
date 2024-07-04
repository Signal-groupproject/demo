<template>
  <div class="container">
    <h1 class="Dtitle">自然<span>景观</span>之旅</h1>
    <div class="content">
      <div class="intro-content">
        探索地球的美丽角落，感受大自然的神奇魅力！<br>
        各地的自然景观仿佛是大自然的杰作，让人惊叹不已! <br>
        在这篇文章里，让我们一起踏上一段<span class="intro-highlight">奇妙的旅程</span>，领略世界各地的自然景观吧！<br><br><br><br>
      </div>
    </div>

    <h2 class="sub-title">国内六大经典地貌</h2>
    <div class="image-grid">
      <div v-for="(image, index) in images" :key="index" class="image-item">
        <img :src="image.url" @click="showImageName(index)" class="grid-image" alt="Image">
        <div v-if="image.showName" class="image-name">{{ image.name }}</div>
      </div>
    </div>


    <div class="qa-item">
      <h3 class="qa-question">1.喀斯特地貌</h3>
      <p class="qa-answer">
        相对集中分布于广西、贵州、云南 <br>
        代表﹣石林风景区<br>
        由于地下水与地表水对可溶性岩石的溶蚀与沉淀、侵蚀与沉积、重力崩塌、重力坍塌、重力堆积等作用形成的地貌，主要分地表和地下两大类，地表有石芽、溶沟、喀斯特漏斗、落水洞、溶蚀洼地、喀斯特盆地、喀斯特平原、峰丛、峰林、孤峰等，地下有溶洞、地下河、暗湖等
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">2.丹霞地貌</h3>
      <p class="qa-answer">
        相对集中分布在东南、西南和西北地区 <br>
        代表﹣丹霞山、武夷山、龙虎山、良山、江郎山、赤水丹霞、张掖丹霞<br>
        由于地壳运动和气候变化的影响，经过长时间的风化、侵蚀、沉积作用形成的以陡崖坡为特征的红层地貌，又根据成型时间和表现状态，被划分为幼年期丹霞、青年期丹霞、壮年丹霞、老年丹霞，是三大砂岩地貌之一
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">3．雅丹地貌</h3>
      <p class="qa-answer">
        相对集中分布在新疆、甘肃、青海、内蒙古<br>
        代表﹣白龙堆、乌尔禾、三垄沙雅丹群<br>
        由于对河湖土状沉积物所形成的地面进行风化作用、间歇性流水冲刷和风蚀作用，形成了与盛行风向平行排列、相间排列的风蚀土墩和风蚀凹地的地貌组合，"雅丹"在维语中的意思是"具有陡壁的小山包"
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">4．岱崗地貌</h3>
      <p class="qa-answer">
        主要分布在山东鲁中南低山丘陵区域<br>
        代表﹣岱崮山<br>
        山峰顶部平展开阔如平原，峰巅周围峭壁如刀削，峭壁以下是逐渐平缓的山坡，是山东沂蒙地区独有的一种特异地貌景观
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">5．张家界地貌</h3>
      <p class="qa-answer">
        主要分布在湖南张家界市<br>
        代表﹣张家界<br>
        由于流水侵蚀、重力崩塌、风化等作用力，对以石英砂岩为成景的母岩形成的以棱角平直的、高大石柱林为主、以及深切嶂谷、石墙、天生桥、方山、平台等造型的地貌景观，是三大砂岩地貌之一
      </p>
    </div>

    <div class="qa-item">
      <h3 class="qa-question">6．嶂石岩地貌</h3>
      <p class="qa-answer">
        主要分布在河北中南部赞皇县太行山深山区<br>
        代表﹣太行山<br>
        由于风化作用对易于风化的薄层砂岩和页岩形成，多形成绵延数公里的岩墙峭壁、三叠崖壁，除顶层为石灰岩外，多由红色石英岩构成，是三大砂岩地貌之
      </p>
    </div>




  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: require('./natureImg/喀斯特地貌.jpg'), name: '喀斯特地貌', showName: false },
        { url: require('./natureImg/丹霞地貌.jpg'), name: '砂岩地貌·丹霞', showName: false },
        { url: require('./natureImg/雅丹地貌.jpg'), name: '雅丹地貌', showName: false },
        { url: require('./natureImg/岱崮地貌.jpg'), name: '岱崮地貌', showName: false },
        { url: require('./natureImg/张家界地貌.png'), name: '砂岩地貌·张家界', showName: false },
        { url: require('./natureImg/嶂石岩地貌.jpg'), name: '砂岩地貌·嶂石岩', showName: false },
      ],
    };
  },
  methods: {
    showImageName(index) {
      this.images[index].showName = !this.images[index].showName;
    },
  },
};
</script>

<style>
.container {
  text-align: center;
}

.Dtitle {
  font-size: 46px;
  font-weight: bold;
  color: #52bdf6;
  text-align: center;
  margin-bottom: 20px;
}

.sub-title {
  font-size: 24px;
  font-weight: bold;
  color: #666;
  text-align: center;
  margin-bottom: 50px;
}

.content {
  /* 内容部分样式（根据你的要求进行美化） */
}

.intro-highlight {
  color: #029df2;
  font-weight: bold;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 200px;
}

.image-item {
  position: relative;
  margin: 10px;
}

.grid-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}

.image-name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}


.qa-item {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.qa-question {
  font-size: 18px;
  margin-bottom: 8px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

.qa-answer {
  color: #666;
  line-height: 1.6;
}





</style>