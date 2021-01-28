/**
 * 自定义 request 网络请求工具,基于axios
 */
import axios from 'axios'
import { ElMessageBox, ElMessage} from 'element-plus'
//import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,  // url = api url + request url
    withCredentials: true, // 当跨域请求时发送cookie
    timeout: 50000  // 请求超时时间,5000(单位毫秒) / 0 不做限制
})

