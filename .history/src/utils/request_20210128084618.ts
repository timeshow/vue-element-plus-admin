import axios from 'axios'
import { ElMessageBox, ElMessage} from 'element-plus'
//import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
})

