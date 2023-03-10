import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
  integrations: [tailwind(), mdx(), astroImageTools],
});
