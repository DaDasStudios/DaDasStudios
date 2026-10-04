import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { architecture, keyValue, link, media, metric, tech, text, theme, track, yearMonth } from "./lib/schemas"

/**
 * Landing page carousel. Each file is one slide; `cards` feed the stats strip below it.
 * Body (Markdown) = slide description.
 */
const highlights = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/highlights" }),
	schema: z.object({
		order: z.number(),
		title: z.string(),
		/** Small label shown on the slide and on the progress bar: Project, Award, Experience... */
		tag: z.string(),
		track,
		/** Overrides the color derived from `track` */
		theme: theme.optional(),
		/** Extra pills next to the tag, e.g. "Hardware + Software" */
		pills: z.array(z.string()).default([]),
		/** split = visual left, split-reverse = visual right, overlay = full-bleed visual with text on top */
		layout: z.enum(["split", "split-reverse", "overlay"]).default("split"),
		visual: media,
		cta: link.optional(),
		/** Stat cards shown in the strip under the carousel */
		cards: z.array(metric.extend({ theme: theme.optional() })).default([]),
		draft: z.boolean().default(false),
	}),
})

/**
 * Career timeline. Each file is one role. Body (Markdown) = details, usually bullet points.
 * `frame` decides how the role is presented.
 */
const experience = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		start: yearMonth,
		/** Omit while the role is ongoing */
		end: yearMonth.optional(),
		location: z.string(),
		track,
		/** Overrides the color derived from `track` */
		theme: theme.optional(),
		/** One or two sentences shown prominently before the details */
		lead: z.string().optional(),
		tags: z.array(z.string()).default([]),
		metrics: z.array(metric).default([]),
		links: z.array(link).default([]),
		/** Small italic note, e.g. confidentiality */
		note: z.string().optional(),
		frame: z
			.discriminatedUnion("layout", [
				/** Text only: lead + details + tags */
				z.object({ layout: z.literal("text") }),
				/** Visual beside the text (laptop mockups, photos, renders) */
				z.object({
					layout: z.literal("media"),
					media,
					side: z.enum(["left", "right"]).default("left"),
				}),
				/** Visual panel + spec sheet, made for hardware */
				z.object({
					layout: z.literal("showcase"),
					media,
					specs: z.array(keyValue).default([]),
				}),
				/** Stack of tilted photos, made for people-centered roles */
				z.object({
					layout: z.literal("polaroids"),
					photos: z.array(z.object({ media, caption: z.string() })).min(1).max(4),
				}),
			])
			.default({ layout: "text" }),
		draft: z.boolean().default(false),
	}),
})

/**
 * Hardware lab and software studio. Body (Markdown) = the deep dive.
 * Non-archive projects must have an `architecture` ("How it works").
 */
const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z
		.object({
			title: z.string(),
			/** One line used on cards and under the page title */
			summary: z.string(),
			track,
			/** Old practice projects: listed in /projects/archive only */
			archive: z.boolean().default(false),
			order: z.number().default(100),
			period: text.optional(),
			tags: z.array(z.string()).default([]),
			/** Image used on cards */
			cover: media,
			tldr: z.object({ problem: z.string(), built: z.string(), result: z.string() }).optional(),
			specs: z.array(keyValue).default([]),
			stack: z.array(tech).default([]),
			links: z.array(link).default([]),
			/** Catalog: items are grouped into tabs by `category` (3D render, PCB layout, Schematic, Code...) */
			gallery: z.array(z.object({ category: z.string(), media, caption: z.string().optional() })).default([]),
			architecture: architecture.optional(),
			draft: z.boolean().default(false),
		})
		.refine(p => p.archive || p.architecture, {
			message: "Non-archive projects need an `architecture` (flow diagram, image, embed or html).",
			path: ["architecture"],
		}),
})

/**
 * "Beyond the code": bento tiles on the landing page, each with an optional in-depth page.
 * Body (Markdown) = the story. Every `##` heading becomes a numbered chapter.
 */
const stories = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
	schema: z.object({
		order: z.number(),
		title: z.string(),
		eyebrow: z.string(),
		summary: z.string(),
		/** If set, the tile links here instead of to a story page */
		externalUrl: z.string().optional(),
		/** false = tile only, no page */
		page: z.boolean().default(true),
		tile: z.object({
			size: z.enum(["large", "wide", "small", "full"]).default("small"),
			theme: theme.default("light"),
			/** Big number or word on the tile */
			value: text.optional(),
			label: z.string().optional(),
			/** Up to 3 photos for a collage (large tiles) */
			images: z.array(z.object({ src: z.string(), alt: z.string(), position: z.string().optional() })).max(3).default([]),
			cta: z.string().optional(),
			decoration: z.enum(["piano", "grid"]).optional(),
		}),
		hero: media.optional(),
		facts: z.array(keyValue).default([]),
		stats: z.array(metric).default([]),
		photos: z.array(z.object({ media, caption: z.string() })).max(3).default([]),
		quote: z.string().optional(),
		gallery: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).default([]),
		links: z.array(link).default([]),
		draft: z.boolean().default(false),
	}),
})

export const collections = { highlights, experience, projects, stories }
