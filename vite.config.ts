import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "calculator",
        short_name: "calculator app",
        start_url: "/",
        display: "standalone",
        lang: "en",
        scope: "/",
        icons: [
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
