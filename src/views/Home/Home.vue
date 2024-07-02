<template>
  <div class="home">
    <!-- 1. 轮播图 -->
    <Banner :banner="banner" />

    <!-- 2. 蓝莓酱 -->
    <Lanmei :list="list" />

    <!-- 3. 分页 -->
    <MyPagination :total="total" :pageSize="pageSize" @getPage="getPage" />

    <!-- 4. 返回顶部 -->
     <el-backtop></el-backtop>

  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Lanmei from "./Lanmei.vue";
import MyPagination from "../../components/MyPagination.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Lanmei,
    MyPagination,
  },
  data() {
    return {
      banner: [],
      list: [], //蓝莓数据
      total: 100,
      pageSize: 10,
    };
  },
  created() {
    //轮播图数据
    this.$api.getBanner().then((res) => {
      console.log(res.data);
      let banner = res.data.banner;
      //http://www.wwtliu.com/sxtstu  http://iwenwiki.com/api
      for (let i = 0; i < banner.length; i++) {
        banner[i].img = banner[i].img.replace(
          "http://www.wwtliu.com/sxtstu",
          "http://iwenwiki.com/api"
        );
      }
      console.log(banner);
      this.banner = banner;
    });
    //蓝莓酱数据---------
    this.getHttp(1);
  },
  methods: {
    //获取点击的页码-----------------
    getPage(num) {
      //请求对应的页码的接口数据----
      this.getHttp(num);
      //返回顶部
      document.documentElement.scrollTop=0;
    },
    //请求蓝莓数据方法
    getHttp(page) {
      this.$api
        .getLanmei({
          blueBerryjam_id: page,
        })
        .then((res) => {
          console.log("--蓝莓--", res.data);
          //蓝莓数据数组
          let arr = res.data.blueBerryJam;
          arr.forEach((ele) => {
            ele.img = ele.img.replace(
              "http://iwen.wiki/sxtstu",
              "http://iwenwiki.com/api"
            );
          });
          this.list = arr; //[{},..]
          this.total = res.data.maxPage;
          this.pageSize = 1;
        });
    },
  },
};
</script>
