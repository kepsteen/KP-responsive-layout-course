/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        beige: "#f3eed9",
        darkgreen: "#222c2a",
        mud: "#824936",
      },
      fontFamily: {
        roboto: ["Roboto", "serif"],
        robotomono: ["Roboto Mono", "Roboto", "serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
