import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/herald/",
  plugins: [react()],
  alias: {
    "@content": "/src/content",
  },
  css: {
    devSourcemap: true,
  },
  assetsInclude: ["**/*.md"],
});
