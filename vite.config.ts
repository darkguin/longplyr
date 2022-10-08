import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue({ customElement: true })],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "LongPlyrLib",
      fileName: (format) => `longplyr-lib.${format}.js`,
    },
  },
});
