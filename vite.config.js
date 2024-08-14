import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 引入 Node.js 的 path ，轉換文件路徑
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/glass-website-vue/",
  resolve: {
    alias: {
      // alias定義路徑別名
      // 用path.resolve(__dirname, "src")生成絕對路徑
      // "__dirname" 表示當前config文件所在的絕對路徑
      // "src"目標路徑
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
  server: {
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});
