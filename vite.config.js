import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    // 修改文件大小限制
    chunkSizeWarningLimit: 1500,
  },
  base: "./",  // 修改執行路徑
  plugins: [react()],
})
