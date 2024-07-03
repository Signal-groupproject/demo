<template>
  <div id="container"></div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "map-view",
  mounted() {
    this.initAMap();
  },
  unmounted() {
    if (this.map) {
      this.map.destroy();
    }
  },
  methods: {
    initAMap() {
      window._AMapSecurityConfig = {
        securityJsCode: "e513336f295f9f736d81b08c81f50ad2",
      };
      AMapLoader.load({
        key: "9f8ae46b082f2bf726df4182ac3ba805", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            // 设置地图容器id
            viewMode: "3D", // 是否为3D地图模式
            zoom: 11,
            center: [116.397428, 39.90923],
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style scoped>
#container {
  width: 80%;
  height: 800px;
}
</style>
