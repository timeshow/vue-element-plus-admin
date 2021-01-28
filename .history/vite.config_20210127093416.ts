import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    alias: {
                '@/': path.resolve(__dirname, './src')
            },
            plugins: [vue()]
})

// module.exports = {
//     alias: {
//         '@/': path.resolve(__dirname, './src')
//     },
//     plugins: [vue()]
// }