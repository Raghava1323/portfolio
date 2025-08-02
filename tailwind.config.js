/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'civil-blue': '#1e40af',
        'civil-green': '#059669',
        'civil-orange': '#ea580c',
      }
    },
  },
  plugins: [],
}