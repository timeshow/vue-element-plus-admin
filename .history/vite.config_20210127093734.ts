import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'p'

export default defineConfig({
    alias: {
        '@/': 
    },
    plugins: [vue()]
})
