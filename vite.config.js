import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
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
});
