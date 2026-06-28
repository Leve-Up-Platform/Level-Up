import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  build: {
    // Raise chunk warning limit to 600kb
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting: vendor libs in their own chunk
        manualChunks(id) {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom")
          ) {
            return "react-vendor";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
        },
      },
    },
  },

  // Pre-bundle these for faster dev server cold starts
  optimizeDeps: {
    include: ["react", "react-dom", "lucide-react"],
  },
});
