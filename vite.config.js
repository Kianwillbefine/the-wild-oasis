import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "stats.html", // 生成分析报告文件名
      template: "treemap", // 矩形树图（最直观看包大小）
      gzipSize: true, // 显示 GZIP 压缩后大小
      brotliSize: true, // 显示 Brotli 压缩后大小
      projectRoot: process.cwd(), // 路径更短、不乱
      open: true, // 打包完自动打开浏览器看报告
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    chunkSizeWarningLimit: 1500,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // 关键：不要内联动态导入
        inlineDynamicImports: false,

        // 把重三方库合成稳定 chunk，避免默认拆得过细。
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("recharts") ||
            id.includes("/d3-") ||
            id.includes("react-smooth") ||
            id.includes("decimal.js-light")
          ) {
            return "chart-vendor";
          }
          if (id.includes("@supabase")) return "vendor";
          if (id.includes("react-router") || id.includes("@remix-run/router")) return "router-vendor";
          if (id.includes("@tanstack/query")) return "query-vendor";
          if (id.includes("react-window")) return "window-vendor";
          if (id.includes("react-hot-toast")) return "toast-vendor";

          return "vendor";
        },

        chunkFileNames: "assets/chunks/[name]-[hash].js",
        entryFileNames: "assets/entry/[name]-[hash].js",
        assetFileNames: "assets/static/[name]-[hash][extname]",
      },
    },
  },
});
