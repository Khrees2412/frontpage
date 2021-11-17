module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: "#2A2A72",
				primary:"#87BFFF",
				pp:"#6E2594",
				ss:"#631A86",
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
// 1B263B
// 415A77
// 0D1B2A