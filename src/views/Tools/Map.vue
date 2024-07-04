<template>
  <div>
    <div id="container"></div>
    <div>
      <input type="text" placeholder="请输入加载地点" v-model="place">
      <button @click="loadMap">加载地图</button>
      <button @click="getCurrentLocation">当前位置</button>
    </div>
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import axios from "axios";

export default {
  name: "map-view",
  data() {
    return {
      place: "",
      map: null,
    };
  },
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
      AMapLoader.load({
        key: "9f8ae46b082f2bf726df4182ac3ba805",
        version: "2.0",
        plugins: ["AMap.Scale"],
      }).then((AMap) => {
        this.map = new AMap.Map("container", {
          viewMode: "3D",
          zoom: 17,
          scale:2
        });
      }).catch((e) => {
        console.log(e);
      });
    },
    async loadMap() {
      // 调用接口获取经纬度信息
      const apiUrl = `https://restapi.amap.com/v3/geocode/geo?address=${this.place}&output=json&key=49495b005f7739d2efd37cc043057791`;

      try {
        const response = await axios.get(apiUrl);
        if (response.data.status === '1' && response.data.geocodes.length > 0) {
          const location = response.data.geocodes[0].location.split(',');
          this.map.setCenter(location);
        } else {
          console.error('未找到该地址的地理位置信息.');
        }
      } catch (error) {
        console.error('获取地理位置信息失败:', error);
      }
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              const {latitude, longitude} = position.coords;
              this.map.setCenter([longitude, latitude]);
            },
            (error) => {
              console.error("获取当前位置出错:", error);
            }
        );
      } else {
        console.error("浏览器不支持地理位置信息获取.");
      }
    },
  },
};
</script>

<style scoped>
#container {
  width: 80%;
  height: 600px;
  border-radius: 10px;
  margin: 20px auto;
}

input, button {
  margin: 5px;
}
</style>
