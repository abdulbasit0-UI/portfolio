/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        secondary: "#1f2937",
        primary: "111827",
      },
      height: {
        screen: "80vh",
        screenSm: "40vh",
        screenMd: "40vh",
        screenLg: "80vh",
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
    },
  },
  plugins: [],
};
