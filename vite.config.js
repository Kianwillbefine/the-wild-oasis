import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// Vite 配置文档：https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (!id.includes("node_modules")) return;

  //         if (id.includes("@supabase")) return "supabase";
  //         if (id.includes("@tanstack/react-query")) return "query";
  //         if (id.includes("react-icons")) return "icons";
  //         if (
  //           id.includes("react-dom") ||
  //           id.includes("react-router-dom") ||
  //           id.includes("react")
  //         ) {
  //           return "vendor";
  //         }
  //       },
  //     },
  //   },
  // },
});
