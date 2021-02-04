import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from '@/router'
import store from '@/store'

import '@/mock/index'


import 'element-plus/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import '@/index.css'

import i18n from '@/config/i18n'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
