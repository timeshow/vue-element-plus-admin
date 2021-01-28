/**
 * 自定义 request 网络请求工具,基于axios
 */
import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessageBox, ElMessage} from 'element-plus'
//import store from '@/store'
import { getToken } from '@/utils/auth'
import settings from '@/config/settings'

export interface ResponseData {
    code: number;
    data?: any;
    msg?: string;
    token?: string;
}

const customCodeMessage: {[key: number]: string} = {
    10002: '当前用户登入信息已失效，请重新登入再操作', // 未登陆
  };
  
  const serverCodeMessage: {[key: number]: string} = {
    200: '服务器成功返回请求的数据',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: '服务器发生错误，请检查服务器(Internal Server Error)',
    502: '网关错误(Bad Gateway)',
    503: '服务不可用，服务器暂时过载或维护(Service Unavailable)',
    504: '网关超时(Gateway Timeout)',
  };
  

/**
 * 配置request请求时的默认参数
 */
const request  = axios.create({
    baseURL: process.env.VUE_APP_APIHOST,  // url = api url + request url
    withCredentials: true, // 当跨域请求时发送cookie
    timeout: 50000  // 请求超时时间,5000(单位毫秒) / 0 不做限制
})

/**
 * 异常处理程序
 */
const errorHandler = (error: any) => {
    const { response, message } = error
}


//export default request