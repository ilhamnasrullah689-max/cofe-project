/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffeeCream: "#F5F5DC",
        deepBrown: "#3E2723",
        charcoal: "#262626",
        purpleDark: "#2c026d",
      },
    },
  },
  plugins: [],
}