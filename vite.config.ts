import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: 'https://rainbow-dash-partnernet.github.io/integration-example-vuejs/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    },
    
    // lib: {
    //   entry: resolve(__dirname, 'src/main.ts'),
    //   name: 'Integration Example VueJS',
    //   fileName: 'integration-example-vuejs',
    //   formats: ['es', 'umd'],
    //   },
  }
})
