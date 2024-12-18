const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        montecarlo: ['"MonteCarlo"', 'sans-serif'], // Déclarez la police ici
    },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

