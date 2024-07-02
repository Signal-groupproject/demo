<template>
  <div class="card-container">
    <div v-for="(item, index) in data" :key="index" class="card">
      <div class="card-image">
        <a :href="item.href" target="_blank">
          <img :src="item.img_href" alt="景点图片">
        </a>
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-description">{{ item.describe }}</p>
        <p class="card-position">{{ item.position }}</p>
        <div class="card-rating">
          <span class="score">{{ item.score }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  height: 140px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.card-description {
  color: #666666;
  margin-bottom: 10px;
}

.card-position {
  color: #999999;
  font-size: 20px;
  margin-bottom: 10px;
}

.card-rating {
  display: flex;
  align-items: center;
}

.score {
  background-color: #ffcc00;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
}
</style>

<script>

export default {
  name: 'test',

  methods: {
    hello () {

    }
  },
  data () {
    return {
      required: true,
      data: [
        {
          'title': '天坛5A',
          'href': 'https://you.ctrip.com/sight/beijing1/233.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/10040h0000008s9n50143_C_220_140.jpg?proc=autoorient',
          'describe': '明清时期皇帝祭天的地方',
          'position': '北京 · 前门/天坛公园/崇文门',
          'score': '8.9'
        },
        {
          'title': '江西武功山国家风景名胜区',
          'href': 'https://you.ctrip.com/sight/luxi1445977/134040554.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/01015120009i3hpmv3ED6_C_220_140.jpg?proc=autoorient',
          'describe': '地跨萍乡、宜春、吉安三市',
          'position': '芦溪',
          'score': '8.2'
        },
        {
          'title': '香港太空馆',
          'href': 'https://you.ctrip.com/sight/hongkong38/3343.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/100o1f000001gp2l14AC0_C_220_140.jpg?proc=autoorient',
          'describe': '体验太空漫步与火箭发射',
          'position': '香港 · 尖沙咀',
          'score': '8.1'
        },
        {
          'title': '婺女洲度假区',
          'href': 'https://you.ctrip.com/sight/wuyuan446/133831507.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/1lo4212000c99m2ka4DC9_C_220_140.jpg?proc=autoorient',
          'describe': '度假村',
          'position': '婺源 · 婺女洲度假区',
          'score': '8.0'
        },
        {
          'title': '高椅岭旅游区4A',
          'href': 'https://you.ctrip.com/sight/chenzhou336/1714278.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/100c1800000148z1dFB78_C_220_140.jpg?proc=autoorient',
          'describe': '漂亮水洼点缀丹霞地貌奇观',
          'position': '郴州',
          'score': '8.0'
        },
        {
          'title': '《我的阿勒泰》取景地',
          'href': 'https://you.ctrip.com/sight/burqin1010/145751161.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/0103s12000dwujotn4D7B_C_220_140.jpg?proc=autoorient',
          'describe': '',
          'position': '布尔津',
          'score': '7.9'
        },
        {
          'title': '南京博物院4A',
          'href': 'https://you.ctrip.com/sight/nanjing9/19519.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/0102p1200080zopnz5BEA_C_220_140.jpg?proc=autoorient',
          'describe': '赏镇院之宝明鎏金藏式佛塔',
          'position': '南京 · 明故宫/南京博物院地区',
          'score': '7.8'
        },
        {
          'title': 'G.E.M. 邓紫棋 I AM GLORIA 世界巡回演唱会 - 澳门站',
          'href': 'https://you.ctrip.com/sight/macau39/148423667.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/0100q12000eknzdhy683F_C_220_140.jpg?proc=autoorient',
          'describe': '演唱会',
          'position': '澳门',
          'score': '7.8'
        },
        {
          'title': '哈尔滨索菲亚广场',
          'href': 'https://you.ctrip.com/sight/harbin151/2002558.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/10031f000001gs0yh92E9_C_220_140.jpg?proc=autoorient',
          'describe': '城市坐标',
          'position': '哈尔滨 · 中央大街步行街/索菲亚大教堂/防洪纪念塔',
          'score': '7.8'
        },
        {
          'title': '澳门伦敦人度假区',
          'href': 'https://you.ctrip.com/sight/macau39/107330861.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/0105d1200090symaq634B_C_220_140.jpg?proc=autoorient',
          'describe': '感受真正的伦敦体验',
          'position': '澳门',
          'score': '7.8'
        },
        {
          'title': '大柴旦翡翠湖旅游景区',
          'href': 'https://you.ctrip.com/sight/haixiprefecture120012/4331367.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/100a1f000001grm9175BF_C_220_140.jpg?proc=autoorient',
          'describe': '湖水清澈湛蓝，色如翡翠',
          'position': '海西',
          'score': '7.2'
        },
        {
          'title': '螺髻九十九里风景区4A',
          'href': 'https://you.ctrip.com/sight/puge1446232/1407700.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/0102k120009syzihr9273_C_220_140.jpg?proc=autoorient',
          'describe': '自然与探险',
          'position': '普格',
          'score': '7.1'
        },
        {
          'title': '云海谷体育公园',
          'href': 'https://you.ctrip.com/sight/shenzhen26/144168554.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/100p13000000tzz0r7F57_C_220_140.jpg?proc=autoorient',
          'describe': '',
          'position': '深圳 · 大小梅沙/东部华侨城',
          'score': '7.1'
        },
        {
          'title': '邕江夜游4A',
          'href': 'https://you.ctrip.com/sight/nanning166/5028385.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/0100y120009ec8btd17C9_C_220_140.png?proc=autoorient',
          'describe': '畅享邕城游轮时光',
          'position': '南宁 · 朝阳广场/中山路',
          'score': '7.1'
        },
        {
          'title': '西双版纳民族风情园',
          'href': 'https://you.ctrip.com/sight/jinghong2154/1831744.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/01A6p120008sifli61119_C_220_140.jpg?proc=autoorient',
          'describe': '珍贵热带植物融合民族风情',
          'position': '景洪 · 曼听公园/民族风情园',
          'score': '7.1'
        },
        {
          'title': '五一广场',
          'href': 'https://you.ctrip.com/sight/changsha148/126934701.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/0103u12000av636rnCFDE_C_220_140.jpg?proc=autoorient',
          'describe': '交通便利，休闲娱乐的好去处',
          'position': '长沙 · 五一广场/IFS国金中心/长沙站',
          'score': '7.1'
        },
        {
          'title': '北海老城',
          'href': 'https://you.ctrip.com/sight/beihai140/144177596.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/1me1p12000dr0ro7g1F4C_C_220_140.jpg?proc=autoorient',
          'describe': '',
          'position': '北海 · 北海老街/金滩',
          'score': '7.0'
        },
        {
          'title': '海南热带雨林国家公园五指山景区',
          'href': 'https://you.ctrip.com/sight/wuzhishan982/3211.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/100a1f000001grlfw44A4_C_220_140.jpg?proc=autoorient',
          'describe': '享受登高望远的乐趣',
          'position': '五指山',
          'score': '7.1'
        },
        {
          'title': '哈尔滨融创文旅城',
          'href': 'https://you.ctrip.com/sight/harbin151/115987053.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/01030120008i378qs06C9_C_220_140.jpg?proc=autoorient',
          'describe': '游乐场',
          'position': '哈尔滨 · 融创旅游城/太阳岛',
          'score': '7.0'
        },
        {
          'title': '【兰州】林俊杰《JJ20》世界巡回演唱会',
          'href': 'https://you.ctrip.com/sight/lanzhou231/145744711.html?scene=online',
          'img_href': 'https://dimg04.c-ctrip.com/images/0105912000duo6s5qA36E_C_220_140.jpg?proc=autoorient',
          'describe': '演唱会',
          'position': '兰州 · 火车西客站',
          'score': '7.0'
        }
      ]
    }
  }
}

</script>
