/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",  // harmless if unused
    "./src/**/*.{js,jsx}",    // include if you keep src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};