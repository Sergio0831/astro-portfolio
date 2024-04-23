import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    projectTitle: z.string(),
    shortDesc: z.string(),
    previewImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    projectLogo: z.string(),
    createdDate: z.date(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = {
  project: projectCollection,
  blog: blogCollection,
};
