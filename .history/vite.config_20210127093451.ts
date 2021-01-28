import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    alias: {
        '@/': repath.resolve(__dirname, './src')
    },
    plugins: [vue()]
})
