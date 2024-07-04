/***
 * 接口配置
 */

// export const host='http://localhost:8888';

const base ={
    host:'http://iwenwiki.com',//基础地址
    bannerUrl:'/api/blueberrypai/getIndexBanner.php',//轮播接口
    news:'https://apis.tianapi.com/travel/index?key=3b7e02cb890ff3337c2bae1ccbb3030a&num=10',//实时文旅新闻接口
    randomImage:"https://v2.api-m.com/api/random4kPic?type=wallpaper",//随机4K高清图片接口
    spots:'https://apis.tianapi.com/scenic/index?key=3b7e02cb890ff3337c2bae1ccbb3030a&word='
}

export default base;