<template>
  <div>
    <el-alert
       v-if="success"
      :title="'经纬度为: ' + location"
      type="success"
      center
      show-icon>
    </el-alert>
    <!-- 警告框 -->
    <el-alert
      v-if="showAlert"
      title="请输入一个指定位置"
      type="error"
      center
      show-icon>
    </el-alert>
    <el-alert
      v-if="showAlert1"
      title="获取当前位置出错或浏览器不支持地理位置信息获取"
      type="error"
      center
      show-icon>
    </el-alert>
    <div class="input-container">
      <input type="text" placeholder="请输入指定位置" v-model="place" @keyup.enter="loadMap" class="centered-input">
    </div>
    <div class="button-group">
       <el-button @click="loadMap" type="primary">加载指定位置</el-button>
       <el-button @click="getCurrentLocation" type="primary">加载当前位置</el-button>
    </div>
    <div id="container"></div>
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
      showAlert: false,
      showAlert1: false,
      success:false,
      location:"",
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
          viewMode: "2D",
          zoom: 17,
          scale:2,
          center:[118.0941,24.5754]
        });
      }).catch((e) => {
        console.log(e);
      });
    },
    async loadMap() {
      // 调用接口获取经纬度信息
      const apiUrl = `https://restapi.amap.com/v3/geocode/geo?address=${this.place}&output=json&key=49495b005f7739d2efd37cc043057791`;
      if (this.place.trim() === '') { // 检查输入框是否为空
        this.showAlert = true; // 显示警告框
        // 可选：在几秒后隐藏警告框
        setTimeout(() => {
          this.showAlert = false;
        }, 3000); // 3秒后隐藏
      } else {
        this.showAlert = false; // 隐藏警告框（如果已经显示的话）
        try {
          const response = await axios.get(apiUrl);
          if (response.data.status === '1' && response.data.geocodes.length > 0) {
            this.location = response.data.geocodes[0].location.split(',');
            this.map.setCenter(this.location);
            this.success = true;
            setTimeout(() => {
                this.success = false;
            }, 3000); // 3秒后隐藏
          } else {
            console.error('未找到该地址的地理位置信息.');
          }
        } catch (error) {
          console.error('获取地理位置信息失败:', error);
        }
      }
    },
    getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              const {latitude, longitude} = position.coords;
              this.location = `${longitude}, ${latitude}`;
              this.map.setCenter([longitude, latitude]);
              this.showAlert = false;
              this.success = true;
              setTimeout(() => {
                this.success = false;
            }, 3000); // 3秒后隐藏
            },
            (error) => {
              this.showAlert1 = true; // 显示警告框
              // 可选：在几秒后隐藏警告框
              setTimeout(() => {
                this.showAlert1 = false;
              }, 3000); // 3秒后隐藏
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 600px;
  border-radius: 30px;
  margin: 20px auto;
}

.input-container{
  text-align: center;
}

.centered-input {
  width: 300px; /* 设置输入框的宽度 */
  margin-bottom: 5px; /* 让输入框和按钮之间有一些空间 */
  text-align: center; /* 使输入框中的文字居中 */
  border-radius: 5px;
  padding: 5px; /* 增加一点内边距，让文字更好看 */
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px; /* 按钮之间的间距 */
  margin-top: 10px; /* 按钮组与输入框之间的间距 */
}
</style>
