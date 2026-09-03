import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const archiveCollection = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/piezas" }),
  schema: () => z.object({
    code: z.string(),
    title: z.string(),
    subject: z.string(),
    coords: z.string(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    date_captured: z.string().optional(),
    error_message: z.string(),
    manifest_text: z.string(),
    grid_version: z.string().default("RMB-V1.2"),
    image: z.string().transform(v => v.replace(/^\//, '')),
    media_type: z.enum(['image', 'video']).default('image'),
    accent_color: z.string().default('#C41E1E'),
    status: z.enum(['CORRUPTED', 'ARCHIVED', 'SYSTEM_FAIL']).default('CORRUPTED'),
  }),
});

export const collections = {
  'piezas': archiveCollection,
  'archive': archiveCollection,
};
