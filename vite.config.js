import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/micro-news-portal/" : "/",
  plugins: [react()],
  alias: {
    "@content": "/src/content",
  },
  css: {
    devSourcemap: true,
  },
  assetsInclude: ["**/*.md"],
  server: {
    hmr: true, // Let Vite handle WebSocket configuration automatically
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@fancyapps/ui", "bootstrap", "aos"],
        },
      },
    },
  },
}));
