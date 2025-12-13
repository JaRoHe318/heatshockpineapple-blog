import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    // We allow date strings (e.g. "2025-05-12") or Date objects
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Jason Hernandez'),
    // Optional cover image
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default([])
  })
});

// IMPORTANT: The key 'posts' matches your folder name "src/content/posts"
export const collections = {
  'posts': postsCollection,
};