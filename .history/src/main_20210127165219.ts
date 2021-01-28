import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router'
//import store from '@/store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import 'nprogress/nprogress.css'
import '@/index.css'

import i18n from '@/config/i18n'

const app = createApp(App)
app.use(router)
//app.use(store)
app.use(ElementPlus, { size: 'small', locale: elementPlusMessages[i18n.global.locale] })
app.use(i18n)
app.mount('#app')
