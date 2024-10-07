/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: '640px',
		md: '640px',
		lg: '960px',
		xl: '1200px',
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},

  	extend: {
  		colors: {
  			primary: '#1c1c22',
			accent: {
				DEFAULT: "#00ff99",
				hover: "00e187",
			}
  		},
  		keyframes: {
			"accordino-down": {
				from: {height: "0"},
				to: {height: "var(--radix-accordion-content-height)" },
			},
			"accordino-up": {
				from: {height: "var(--radix-accordion-content-height)"},
				to: {height: "0"},
			},
		},
		animation: {
			"accordino-down": "accordino-down 0.2s ease-out",
			"accordino-up": "accordino-up 0.2s ease-out"
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
