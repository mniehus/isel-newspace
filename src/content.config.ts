import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Áreas, Projetos e Equipas are distinct entities linked by stable slugs.
const areas = defineCollection({
  loader: glob({base:'./src/content/areas',pattern:'*.md'}),
  schema: z.object({title:z.string(),titleEn:z.string().optional(),summary:z.string(),summaryEn:z.string().optional(),order:z.number().default(50)})
});
const teams = defineCollection({
  loader: glob({base:'./src/content/groups',pattern:'*/group.md'}),
  schema: z.object({ title:z.string(),short:z.string(),icon:z.string().optional(),image:z.string().optional(),
    accent:z.string().default('#55d9ec'),contact:z.string().optional(),website:z.string().url().optional(),
    order:z.number().default(50),demo:z.boolean().default(false)})
});
const projects=defineCollection({
  loader:glob({base:'./src/content/projects',pattern:'*.md'}),
  schema:z.object({title:z.string(),summary:z.string(),status:z.enum(['Exploring','Active','Planned','Completed']).default('Active'),
    areas:z.array(z.string()).min(1),teams:z.array(z.string()).default([]),maintainers:z.array(z.string()).default([]),
    tags:z.array(z.string()).default([]),image:z.string().optional(),externalUrl:z.string().url().optional(),
    featured:z.boolean().default(false),demo:z.boolean().default(false)})
});
const events=defineCollection({
  loader:glob({base:'./src/content',pattern:'{shared,groups/*}/events/*.md'}),
  schema:z.object({title:z.string(),date:z.coerce.date(),endDate:z.coerce.date().optional(),
    scope:z.enum(['ISEL NewSpace','ISEL group','Lisbon & regional','Portugal','Europe & international']),
    location:z.string().default('To be announced'),url:z.string().url().optional(),summary:z.string(),featured:z.boolean().default(false),
    areas:z.array(z.string()).default([]),projects:z.array(z.string()).default([]),teams:z.array(z.string()).default([])})
});
const news=defineCollection({
  loader:glob({base:'./src/content',pattern:'{shared,groups/*}/news/*.md'}),
  schema:z.object({title:z.string(),date:z.coerce.date(),summary:z.string(),image:z.string().optional(),
    areas:z.array(z.string()).default([]),projects:z.array(z.string()).default([]),teams:z.array(z.string()).default([])})
});
export const collections={areas,teams,projects,events,news};
