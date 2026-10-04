import type { Link, Theme, Track } from "./schemas"

/** Default color for each track. Content can override it with `theme`. */
export const trackTheme: Record<Track, Theme> = {
	hardware: "mint",
	software: "crimson",
	both: "dark",
	life: "dark",
}

export const themeOf = (track: Track, override?: Theme): Theme => override ?? trackTheme[track]

/** Projects are always hardware or software colored; "both" leans on the hardware mint */
export const projectTheme = (track: Track): Theme => (track === "software" ? "crimson" : "mint")

/**
 * Tailwind class sets per theme. Class names must stay as full literals
 * so Tailwind can find them when scanning this file.
 */
export const themes: Record<
	Theme,
	{ panel: string; soft: string; value: string; label: string; pill: string; dot: string; date: string; shadow: string; border: string }
> = {
	crimson: {
		panel: "bg-primary text-white",
		soft: "bg-primary-50 text-primary-900",
		value: "text-primary-600",
		label: "text-primary-700",
		pill: "bg-primary-50 text-primary-700",
		dot: "bg-primary ring-primary-100",
		date: "text-primary",
		shadow: "shadow-primary-50",
		border: "border-primary",
	},
	mint: {
		panel: "bg-secondary-100 text-secondary-950",
		soft: "bg-secondary-100 text-secondary-950",
		value: "text-secondary-900",
		label: "text-secondary-800",
		pill: "bg-secondary-100 text-secondary-900",
		dot: "bg-secondary ring-secondary-200",
		date: "text-secondary-800",
		shadow: "shadow-secondary-100",
		border: "border-secondary",
	},
	circuit: {
		panel: "bg-secondary-950 text-secondary-100",
		soft: "bg-secondary-900 text-white",
		value: "text-secondary-600",
		label: "text-secondary-300",
		pill: "bg-secondary-100 text-secondary-900",
		dot: "bg-secondary-800 ring-secondary-200",
		date: "text-secondary-800",
		shadow: "shadow-secondary-100",
		border: "border-secondary-800",
	},
	dark: {
		panel: "bg-black-100 text-white",
		soft: "bg-black text-white",
		value: "text-white",
		label: "text-zinc-300",
		pill: "bg-black-100 text-white",
		dot: "bg-black-100 ring-zinc-200",
		date: "text-black-100",
		shadow: "shadow-zinc-200",
		border: "border-black-100",
	},
	light: {
		panel: "bg-white text-black-100",
		soft: "bg-zinc-100 text-black-100",
		value: "text-black-100",
		label: "text-black-200",
		pill: "bg-zinc-100 text-black-200",
		dot: "bg-zinc-400 ring-zinc-200",
		date: "text-black-100",
		shadow: "shadow-zinc-200",
		border: "border-zinc-300",
	},
}

export const buttonStyles: Record<NonNullable<Link["style"]>, string> = {
	primary: "bg-primary text-white hover:shadow-primary",
	secondary: "bg-secondary text-white hover:shadow-secondary",
	dark: "bg-black-100 text-white hover:shadow-zinc-400",
	outline: "bg-white text-black-100 border-2 border-zinc-200 hover:shadow-zinc-300",
}

/** Button style that matches a theme when content doesn't pick one */
export const themeButton: Record<Theme, NonNullable<Link["style"]>> = {
	crimson: "primary",
	mint: "secondary",
	circuit: "secondary",
	dark: "dark",
	light: "outline",
}
