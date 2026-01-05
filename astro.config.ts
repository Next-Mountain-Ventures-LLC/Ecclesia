// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://ecclesia.ntmt.dev",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize bundle size
      minify: "esbuild",
      // Enable compression
      chunkSizeWarningLimit: 1000,
    },
  },
  // Image optimization settings
  image: {
    // Use Sharp for image optimization (already in dependencies)
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  // Optimize for static hosting
  output: "static",
});
