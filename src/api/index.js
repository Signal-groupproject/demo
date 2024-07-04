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
    getRandomImage(){
        return axios.get(base.randomImage)
    },
    getLocation(){
        return axios.get(base.location)
    }
}


export default api;