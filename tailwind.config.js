/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./slices/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				heading: ["var(--font-satoshi)"],
				body: ["var(--font-manrope)"],
			},
			backgroundImage: {
				"hero-cover": "url('/cover.jpg')",
			},
		},
	},
	plugins: [],
};
