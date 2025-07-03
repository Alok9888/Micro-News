import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Micro-News/", // ✅ Always use this
  plugins: [react()],
  resolve: {
    alias: {
      "@content": "/src/content",
    },
  },
  css: {
    devSourcemap: true,
  },
  assetsInclude: ["**/*.md"],
  server: {
    hmr: true,
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
});
