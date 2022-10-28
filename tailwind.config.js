/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "index.html",
    "./src/main.css",
    "./src/main.js",
  ],
  theme: {
    extend: {},
    minWidth: {
      375: "375px",
    },
    colors: {
      BrightRed: "hsl(12, 88%, 59%)",
      DarkBlue: "hsl(228, 39%, 23%)",
      DarkGrayishBlue: "hsl(227, 12%, 61%)",
      VeryDarkBlue: "hsl(233, 12%, 13%)",
      VeryPaleRed: "hsl(13, 100%, 96%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
      White: "hsl(0, 0%, 100%)",
      noColor: "hsla(0, 0%, 0%, 0)",
    },
    fontWeight: {
      400: "400",
      500: "500",
      700: "700",
    },
  },
  plugins: [],
}
