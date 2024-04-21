/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gainsboro: "#d9d9d9",
        darkviolet: "#780dbd",
        silver: "#bcbcbc",
        white: "#fff",
        orange: "#ffbb11",
        black: "#000",
        gray: {
          "100": "#010101",
          "200": "rgba(255, 255, 255, 0.1)",
        },
        lightgray: "rgba(211, 211, 211, 0.24)",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
        inter: "Inter",
        poppins: "Poppins",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};