// // vite.config.js
// import { defineConfig } from 'vite'
// export default defineConfig({
//   // Directorio raíz de tu proyecto
//   root: './src'
// })
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  base: "./",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  plugins: []
});