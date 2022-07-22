/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      sizes: {
        sm: "16px",
        md: "18px",
        lg: "24px",
        xl: "36px",
      },
      fontFamily: {
        primary: "Raleway"
      },
      colors: {
        basic: "black",
        author: "#4F4F4F",
        category: "#828282",
        yellow: "#F7DF94",
        white: "#F2F2F2",
        black: "#333333"
      }

    },
  },
  plugins: [],
}
