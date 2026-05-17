import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Custom domain navyamaterials.com serves at root. Local dev: also root.
// BASE_PATH env override kept for fallback (e.g. preview deploys at
// /navya-materials/ on the github.io subpath).
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
