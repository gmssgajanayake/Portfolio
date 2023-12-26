/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgba(2,29,58,0.82)",
        headingColor: "#000000",
        smallTextColor: "rgba(2,29,58,0.82)",
      },
    },
  },
  plugins: [],
}

