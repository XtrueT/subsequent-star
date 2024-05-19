import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional().default(''),
		author: z.string().default('miao'),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage:z.string().nullable().optional().default(''),
		tags:z.array(z.string()).optional().default([]),
		categories:z.array(z.string()).optional().default([])
	}),
});

export const collections = { blog };


