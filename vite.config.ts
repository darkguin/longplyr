import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

const root = "./";
const nodeModulesDir = path.resolve(__dirname, root, "node_modules/**");

export default defineConfig({
  plugins: [
    vue({ customElement: true }),
    // typescript({
    //   declaration: true,
    //   exclude: nodeModulesDir,
    //   allowSyntheticDefaultImports: true,
    // }),
  ],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "LongPlyrLib",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `longplyr.${format}.js`,
    },
    // rollupOptions: {
    //   external: ["vue"],
    //   output: {
    //     globals: {
    //       vue: "Vue",
    //     },
    //   },
    // },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
