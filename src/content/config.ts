import { defineCollection, z } from "astro:content"

const workCollection = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		details: z.string(),
		image: z.string(),
		link: z.string(),
		repos: z.array(
			z.object({
				name: z.string(),
				link: z.string(),
			})
		),
		techs: z.array(
			z.object({
				name: z.string(),
				icon: z.string(),
			})
		),
	}),
})

const projectCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		techs: z.array(
			z.object({
				name: z.string(),
				icon: z.string(),
			})
		),
		link: z.string().optional(),
	}),
})

export const collections = {
	work: workCollection,
	project: projectCollection
}
