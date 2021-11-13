module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: "#BA55D3",
				solid: "#0B132A",
			},
			fontFamily: {
				logo: ["Ranchers", "cursive"],
				brand: ["Rubik", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
