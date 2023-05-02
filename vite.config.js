import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  build: {
    outDir: "build",
    // assetsDir: "src/assets"
  },
  base: "",
  server: {
    watch: {
      usePolling: true
    },
    host: true, // Need for docker container port mapping
    strictPort: true,
    // port: 5173
  }
});
