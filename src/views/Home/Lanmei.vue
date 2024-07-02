<template>
  <div class="container">
      <h2 class="title">热门景点</h2>
      <ul class="list">
          <li v-for="(item,index) in list" :key='index'>
              <div class="item">
                 <img :src="item.img" alt="">
                <span>{{ item.title }}</span> 
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:['list']
}
</script>

<style lang='less' scoped>
.container{
    width: 1200px;
    margin:  20px auto;
}
.title{
    text-align: center;
    padding: 10px;
}
.list{
    display: flex;
    flex-wrap: wrap;
    li{
        width: 20%;
        box-sizing: border-box;
        height: 220px;
        padding:10px;
        position: relative;
        margin-bottom: 20px;
        .item{
            background: #eee;
            img{
                width: 100%;
            }
            span{
                position: absolute;
                right: 20px;
                bottom: 0px;
                background: rgba(0,0,0,0.2);
                color: #fff;
                border-radius: 4px;
                padding:4px;
            }
        }
    }
}

</style>