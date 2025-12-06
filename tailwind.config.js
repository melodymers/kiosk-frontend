/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'kiosk': '1024px',  // Custom kiosk breakpoint
      }
    },
  },
  plugins: [],
}
