<template>
  <div class='page'>
      <!-- 
            background 可以为分页按钮添加背景色
            layout="prev, pager, next" 
            total="1000"  总条目数	number
            page-size	  每页显示条目个数， 	number	—	10
            layout	组件布局，子组件名用逗号分隔	String
       -->
    <el-pagination background 
        layout="total,prev, pager,next,jumper" 
        :total="total" 
        :page-size='pageSize'
        @current-change='changePage'
        >

    </el-pagination>
  </div>
</template>

<script>
export default {
    props:{
        total:{
            type:Number,
            default:100
        },
        pageSize:{
            type:Number,
            default:10
        }
    },
    methods:{
        changePage(num){
            console.log(num);
            //传递给父组件---页码
            this.$emit('getPage',num)
        }
    }
};
</script>

<style lang='less' scoped>
.page{
    text-align: center;
    margin: 30px;
}
</style>