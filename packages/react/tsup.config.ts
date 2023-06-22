import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts", "./src/components.ts"],
  clean: false,
  format: ["esm"],
  minify: true,
  dts: true,
  external: ["react", "react-dom"],
});
