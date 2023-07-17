const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			screens: {
				xs: "480px",
			},
			colors: {
				"black-100": colors.zinc[800],
				"black-200": colors.zinc[700],
				background: "#fafafa",
				primary: {
					50: "#FDEDF0",
					100: "#FAD6DE",
					200: "#F5AEBD",
					300: "#EF859C",
					400: "#EA5C7B",
					500: "#E5345A",
					600: "#C7193F",
					700: "#95132F",
					800: "#630D20",
					900: "#320610",
					950: "#1B0309",
					DEFAULT: "#E5345A",
				},
				secondary: {
					50: "#F6FEFC",
					100: "#EDFDF9",
					200: "#E0FBF5",
					300: "#CEF8EF",
					400: "#C0F6EB",
					500: "#AEF4E5",
					600: "#66EACE",
					700: "#1EDCB3",
					800: "#149478",
					900: "#0A483A",
					950: "#05241D",
					DEFAULT: "#66EACE",
				},
				accent: "#95132F",
			},
			backgroundImage: {
				blurry: "url('/images/backgrounds/bg-blurry.svg')",
				"blurry-2": "url('/images/backgrounds/bg-blurry-2.svg')",
				plane: "url('/images/backgrounds/bg-plane.svg')",
				print: "url('/images/backgrounds/bg-print.svg')"
			},
		},
	},
	plugins: [],
}
