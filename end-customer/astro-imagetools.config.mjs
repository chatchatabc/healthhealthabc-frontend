import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  format: ["webp"],
  fallbackFormat: "webp",
  includeSourceFormat: false,
  layout: "fill",
});
