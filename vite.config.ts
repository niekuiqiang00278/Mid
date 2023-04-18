import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
export default defineConfig({
  plugins: [vue()],
  base: './',
  publicDir: 'public',
  resolve: {
    alias: {
      'store': path.resolve(__dirname, './src/store/index.ts'),
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'widget': path.resolve(__dirname, './src/widget'),
      'utils': path.resolve(__dirname, './src/utils'),
      'scss': path.resolve(__dirname, './src/scss'),
    }
  },
  server: {
    host: '192.168.31.208',
    port: 12012,
    open: false,
    strictPort: false,
    https: false,
    cors: true,
    proxy: {
      '/god': {
        target: 'http://192.168.31.208:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
// npm install --save-dev sass-loader
// npm install --save-dev node-sass
// npm i @nutui/nutui