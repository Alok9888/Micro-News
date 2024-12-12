import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Vite configuration
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically open the report in the browser
    }),
  ],
  alias: {
    "@content": "/src/content",
  },
  css: {
    devSourcemap: true,
  },
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          bootstrap: ["bootstrap"], // Example for Bootstrap-specific chunk
        },
      },
    },
  },
});
