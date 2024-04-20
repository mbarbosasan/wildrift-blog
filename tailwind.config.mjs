/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
primary: {
					DEFAULT: '#0070f3',
					dark: '#003c6e',
				},
				secondary: {
					DEFAULT: '#ff0080',
					dark: '#ff0056',
				},
			},
			fontFamily: {
				display: 'Inter'
			}
		},
	},
	dark: 'class',
	plugins: [nextui()],
}
