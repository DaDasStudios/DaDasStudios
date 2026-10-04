import { getCollection } from "astro:content"
import type { Track } from "./schemas"

const month = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" })

/** "Sep 2025 – Present", "Aug – Dec 2024", "Jan 2023 – Dec 2023" */
export function formatPeriod(start: Date, end?: Date) {
	const s = { m: month.format(start), y: start.getUTCFullYear() }
	if (!end) return `${s.m} ${s.y} – Present`
	const e = { m: month.format(end), y: end.getUTCFullYear() }
	return s.y === e.y ? `${s.m} – ${e.m} ${e.y}` : `${s.m} ${s.y} – ${e.m} ${e.y}`
}

export async function getHighlights() {
	const entries = await getCollection("highlights", e => !e.data.draft)
	return entries.sort((a, b) => a.data.order - b.data.order)
}

export async function getExperience() {
	const entries = await getCollection("experience", e => !e.data.draft)
	return entries.sort((a, b) => b.data.start.getTime() - a.data.start.getTime())
}

/** Projects of a track ("both" projects show in both labs). Archive excluded unless asked for. */
export async function getProjects(options: { track?: Exclude<Track, "both" | "life">; archive?: boolean } = {}) {
	const { track, archive = false } = options
	const entries = await getCollection(
		"projects",
		e => !e.data.draft && e.data.archive === archive && (!track || e.data.track === track || e.data.track === "both")
	)
	return entries.sort((a, b) => a.data.order - b.data.order)
}

export async function getStories() {
	const entries = await getCollection("stories", e => !e.data.draft)
	return entries.sort((a, b) => a.data.order - b.data.order)
}

/** Where a story tile points to */
export const storyHref = (story: { id: string; data: { externalUrl?: string; page: boolean } }) =>
	story.data.externalUrl ?? (story.data.page ? `/stories/${story.id}` : undefined)
