/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      
  ],
  theme: {
    extend: {
      fontFamily: {
        montecarlo: ['"MonteCarlo"', 'sans-serif'], // Déclarez la police ici
    },
    },
  },
  plugins: [],
}

