/**
 * 公共的请求方法
 */
import base from './base'
import axios from 'axios'

const api = {
    /**
     * 轮播接口
     */
    getBanner() {
        return axios.get(base.host + base.bannerUrl)
    },
    /**
     * 获取蓝莓酱 blueBerryjam_id
     */
    getLanmei(params) {//{}
        return axios.get(base.host + base.lanmei, {
            params
        })
    },
    getNews() {
        return axios.get(base.news)
    }
}


export default api;