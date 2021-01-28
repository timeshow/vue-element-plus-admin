import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


export default defineConfig({
    alias: [
        {find: '@', replacement: path.resolve(_)}
    ],
    plugins: [vue()]
})
