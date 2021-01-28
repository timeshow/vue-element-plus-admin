/**
 * 自定义 request 网络请求工具,基于axios
 */
import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessageBox, ElMessage} from 'element-plus'
//import store from '@/store'
import { getToken } from '@/utils/auth'

/**
 * 配置request请求时的默认参数
 */
const request  = axios.create({
    baseURL: process.env.VUE_APP_APIHOST,  // url = api url + request url
    withCredentials: true, // 当跨域请求时发送cookie
    timeout: 50000  // 请求超时时间,5000(单位毫秒) / 0 不做限制
})

export default service