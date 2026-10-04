import { z } from "astro/zod"

/**
 * Which side of the portfolio an entry belongs to.
 * Drives colors and the "Show me first" focus switch.
 */
export const track = z.enum(["hardware", "software", "both", "life"])

/**
 * Color backdrop for panels and media frames.
 * crimson = software, mint = hardware, circuit = dark PCB green, dark = black, light = white.
 */
export const theme = z.enum(["crimson", "mint", "circuit", "dark", "light"])

const caption = z.string().optional()

/** Text that may be typed as a bare number in YAML (2024, 4.6) */
export const text = z.union([z.string(), z.number()]).transform(String)

/**
 * Anything visual: a photo, a render, an iframe embed, raw HTML, a big number,
 * a big sentence, or a dashed placeholder until the real image exists.
 */
export const media = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("image"),
		/** Path inside /public, e.g. /images/projects/bci/render.png */
		src: z.string(),
		alt: z.string(),
		/** cover crops to fill the frame, contain shows the whole image */
		fit: z.enum(["cover", "contain"]).default("cover"),
		/** CSS object-position, e.g. "50% 30%" */
		position: z.string().optional(),
		/** Color behind the image (useful for transparent PNG/SVG) */
		backdrop: theme.optional(),
		/** Perspective tilt, made for PCB renders */
		tilt: z.boolean().default(false),
		caption,
	}),
	z.object({
		type: z.literal("embed"),
		/** URL of an HTML page, e.g. /embeds/bci-signals.html or a KiCad/3D viewer link */
		src: z.string(),
		title: z.string(),
		caption,
	}),
	z.object({
		type: z.literal("html"),
		/** Inline HTML/SVG snippet rendered as-is */
		html: z.string(),
		backdrop: theme.optional(),
		caption,
	}),
	z.object({
		type: z.literal("stat"),
		value: text,
		label: z.string(),
		badge: z.string().optional(),
		chips: z.array(z.string()).default([]),
		backdrop: theme.default("crimson"),
		caption,
	}),
	z.object({
		type: z.literal("statement"),
		text: z.string(),
		chips: z.array(z.string()).default([]),
		backdrop: theme.default("dark"),
		caption,
	}),
	z.object({
		type: z.literal("placeholder"),
		label: z.string(),
		caption,
	}),
])

export const link = z.object({
	label: z.string(),
	href: z.string(),
	/** primary = crimson button, secondary = mint button, outline = bordered */
	style: z.enum(["primary", "secondary", "outline", "dark"]).optional(),
})

export const keyValue = z.object({ label: z.string(), value: text })

export const metric = z.object({
	value: text,
	suffix: z.string().optional(),
	label: z.string(),
})

/** Tech chip: plain string or { name, track, icon } */
export const tech = z.union([
	z.string().transform(name => ({ name, track: undefined, icon: undefined })),
	z.object({
		name: z.string(),
		track: track.optional(),
		/** File name inside /public/images/techs */
		icon: z.string().optional(),
	}),
])

/** "2025-09" or "2025-09-15" */
export const yearMonth = z
	.union([z.string(), z.date()])
	.transform(v => (v instanceof Date ? v : new Date(`${v.length === 7 ? `${v}-01` : v}T00:00:00Z`)))

/**
 * Standard "How it works" diagram: steps left to right, each step can
 * have branches hanging below it (e.g. a desktop app fed by step 2).
 */
export const flowDiagram = z.object({
	type: z.literal("flow"),
	title: z.string().optional(),
	steps: z
		.array(
			z.object({
				label: z.string(),
				detail: z.string().optional(),
				track: track.optional(),
				branches: z
					.array(
						z.object({
							label: z.string(),
							detail: z.string().optional(),
							track: track.optional(),
						})
					)
					.default([]),
			})
		)
		.min(2),
	caption,
})

/** A project's architecture: the standard flow diagram or any media (image, embed, html) */
export const architecture = z.union([flowDiagram, media])

export type Media = z.infer<typeof media>
export type Track = z.infer<typeof track>
export type Theme = z.infer<typeof theme>
export type FlowDiagram = z.infer<typeof flowDiagram>
export type Architecture = z.infer<typeof architecture>
export type Link = z.infer<typeof link>
