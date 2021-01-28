import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    alias: {
        '@': path.resolve('src')
      },
      plugins: [vue()]
});