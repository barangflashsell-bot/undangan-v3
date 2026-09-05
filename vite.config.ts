import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 8085,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
