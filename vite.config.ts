import { defineConfig } from "vite";
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({ root: ".", outDir: "./dist", include: "./src/**/*.ts" }),
  ],
  build: {
    sourcemap: true,
    lib: {
      formats: ["cjs", "es"],
      entry: "src/index.ts",
      fileName: (format) => format === "cjs" ? "index.cjs" : "index.esm.js",
    },
    rollupOptions: {
      external: ["axios"],
    },
  },
});
