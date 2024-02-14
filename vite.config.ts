import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@/*": resolve(__dirname, "./src"),
      "@/ui": resolve(__dirname, "./src/app/elements"),
      "@/layout": resolve(__dirname, "./src/app/layout"),
      "@/shared": resolve(__dirname, "./src/app/shared"),
      "@/redux": resolve(__dirname, "./src/app/redux"),
      "@/components": resolve(__dirname, "./src/app/components"),
      "@/pages": resolve(__dirname, "./src/pages"),
      "@/context": resolve(__dirname, "./src/context"),
      "@/hooks": resolve(__dirname, "./src/hooks"),
      "@/features": resolve(__dirname, "./src/features"),
      "@/app": resolve(__dirname, "./src/app"),
      "@/types": resolve(__dirname, "./src/types"),
      "@/themes": resolve(__dirname, "./src/app/elements/theme.ts"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
