import { z, defineCollection } from "astro:content";

const schema = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image_url: z.string(),
  }),
});

export const collections = {
  specialties: schema,
};
