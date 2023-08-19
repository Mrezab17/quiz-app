/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/App.jsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#252422", secondary: "#ccc5b9", tertiary: "#eb5e28" },
      backgroundImage: {
        ironman: "url('../assets/ironman.jpg')",
        captain: "url('../assets/captain.jpg')",
      },
    },
  },
  plugins: [],
};
