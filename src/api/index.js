/**
 * 公共的请求方法
 */
import base from './base'
import axios from 'axios'

const api = {
    /**
     * 轮播接口1
     */
    getBanner() {
        return axios.get(base.host + base.bannerUrl)
    },
    getNews() {
        return axios.get(base.news)
    },
    getBilibili_News() {
        return axios.get(base.bilibili_news)
    },
    getZhihu_News() {
        return axios.get(base.zhihu_news)
    },
    getBaidu_News() {
        return axios.get(base.baidu_news)
    },
    getWeibo_News() {
        return axios.get(base.weibo_news)
    },
    getTodays_News() {
        return axios.get(base.todays_news)
    },
    getRandomImage(){
        return axios.get(base.randomImage)
    }
}


export default api;