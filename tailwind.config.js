/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        primary: "#E30016",
        secondary: "#E3001640",
        dim_grey: "#F0F0F0",
        disabled: "#BBBBBB",
      },
    },
  },
  plugins: [],
};
