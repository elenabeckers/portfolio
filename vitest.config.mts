import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "html", "lcov"],
      include: ["**/*.{ts,tsx}"],
      exclude: [
        "node_modules/",
        ".next/",
        "coverage/",
        "dist/",
        "**/*.d.ts",
        "next-env.d.ts",
        "next.config.ts",
      ],
    },
  },
});
