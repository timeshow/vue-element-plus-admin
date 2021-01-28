import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

im

import './index.css'


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
