import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['es', 'en']),
    tags: z.array(z.string()),
    description: z.string(),
    image: z.string().optional(),
    urlSlug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
