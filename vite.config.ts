import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...VitePluginNode({
      adapter: "nest",
      appPath: "src/main.ts",
      tsCompiler: "swc",
    }),
  ],
});
