import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// On CI (GitHub Pages) we set BASE_PATH=/navya-materials/.
// Locally + on user/custom-domain hosts we serve at /.
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
          radix: [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-navigation-menu",
          ],
        },
      },
    },
  },
});
