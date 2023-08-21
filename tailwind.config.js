/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"text": "var(--text)",
				"background": "var(--background)",
				"primary-button": "var(--primary-button)",
				"secondary-button": "var(--secondary-button)",
				"accent": "var(--accent)",
			},
		},
  },
plugins: [],
}

