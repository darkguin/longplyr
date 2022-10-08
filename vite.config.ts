import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue({ customElement: true })],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "LongPlyrLib",
      fileName: (format) => `longplyr.${format}.js`,
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
});
