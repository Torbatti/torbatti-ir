// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const shelf = defineCollection({
    type: 'content',
    schema: z.object({
      type:z.string(),
      title: z.string(),
      // description: z.string().optional(),
      // developers: z.array(z.string()).optional(),
      // tags: z.array(z.string())
      img:z.array(z.string()),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  'shelf': shelf,
};