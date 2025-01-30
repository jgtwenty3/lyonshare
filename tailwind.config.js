/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
		  fontFamily: {
			montefiore: ['montefiore','montefiore-bold', 'sans-serif'],
			alpina: ['alpina', 'sans-serif'],
		  },
		  colors: {
			darkNavy: '#021D37',
			blackIron: '#1E1E1E',
			manliusLimestone: "#E9E3D7",
			barnishedBrass: '#E1C16E',
			britishRacingGreen: "#0E3802",
		  },
		  
		},
  
	},
	plugins: [],
  }