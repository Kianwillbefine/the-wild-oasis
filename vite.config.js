import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// Vite 配置文档：https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
