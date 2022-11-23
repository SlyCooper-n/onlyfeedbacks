import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    root: "./src",
    coverage: {
      enabled: true,
      exclude: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
  },
});
