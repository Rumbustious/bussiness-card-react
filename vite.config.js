import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite.config.js

  // other options...
  server: {
    open: true,
    // set the browser to use for testing and previewing
    browser: "Firefox Developer Edition"
  }

})
