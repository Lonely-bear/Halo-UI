import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
        allow: ['../../Halo-UI']
    }
  }
})
