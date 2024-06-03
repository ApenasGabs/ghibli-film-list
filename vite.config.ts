import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sw: resolve(__dirname, "src/serviceWorker.ts"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
  server: {
    open: true,
  },
});
