/**
 * "Show me first" switch. Reads/writes ?focus=hardware|software so a tailored
 * link can be sent with each application. Components subscribe with onFocusChange.
 */
export type Focus = "all" | "hardware" | "software"

const listeners = new Set<(focus: Focus) => void>()
const param = new URLSearchParams(location.search).get("focus")
let current: Focus = param === "hardware" || param === "software" ? param : "all"

export const getFocus = () => current

export function onFocusChange(listener: (focus: Focus) => void) {
	listeners.add(listener)
	listener(current)
}

export function setFocus(focus: Focus) {
	current = focus
	const url = new URL(location.href)
	if (focus === "all") url.searchParams.delete("focus")
	else url.searchParams.set("focus", focus)
	history.replaceState(null, "", url)
	listeners.forEach(l => l(focus))
}

/** Sort key per track for each focus: lower comes first */
export const rank: Record<Focus, Record<string, number>> = {
	all: { hardware: 0, software: 0, both: 0, life: 0 },
	hardware: { hardware: 0, both: 1, life: 2, software: 3 },
	software: { software: 0, both: 1, life: 2, hardware: 3 },
}

const activeClass: Record<Focus, string[]> = {
	all: ["bg-black-100", "text-white", "shadow"],
	hardware: ["bg-secondary", "text-white", "shadow"],
	software: ["bg-primary", "text-white", "shadow"],
}

// Buttons
const buttons = document.querySelectorAll<HTMLButtonElement>("[data-focus]")
buttons.forEach(b => b.addEventListener("click", () => setFocus(b.dataset.focus as Focus)))

onFocusChange(focus => {
	buttons.forEach(b => {
		const on = b.dataset.focus === focus
		Object.values(activeClass).flat().forEach(c => b.classList.remove(c))
		b.classList.toggle("text-black-200", !on)
		if (on) b.classList.add(...activeClass[focus])
		b.setAttribute("aria-pressed", String(on))
	})

	// Doors: the focused lab goes first
	const grid = document.querySelector("[data-doors]")
	if (grid) {
		const first = grid.querySelector(`[data-door="${focus === "software" ? "software" : "hardware"}"]`)
		if (first) grid.prepend(first)
	}

	// Résumé button recommends the matching variant
	document.querySelectorAll<HTMLAnchorElement>("[data-focus-resume]").forEach(a => {
		const href = a.dataset[`resume${focus[0].toUpperCase()}${focus.slice(1)}`]
		if (href) a.href = href
	})
})
