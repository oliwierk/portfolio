/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./projects.html",
		"./timeline.html",
		"./contact.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		darkMode: "class",
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "black"],
	},
};
