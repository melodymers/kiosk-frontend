/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // Scans your login page
    "./*.html",           // All HTML files
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
