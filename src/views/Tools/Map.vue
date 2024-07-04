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
      // 使用浏览器的Geolocation API获取当前位置
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            AMapLoader.load({
              key: "9f8ae46b082f2bf726df4182ac3ba805",
              version: "2.0",
              plugins: ["AMap.Scale","AMap.ToolBar"],
            })
              .then((AMap) => {
                this.map = new AMap.Map("container", {
                  viewMode: "3D",
                  zoom: 11,
                  center: [longitude, latitude], // 使用获取的当前位置作为中心
                });
              })
              .catch((e) => {
                console.log(e);
              });
          },
          (error) => {
            console.error("Error occurred while retrieving geolocation: ", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  },
};
</script>
<style scoped>
#container {
  width: 80%;
  height: 800px;
}
</style>
