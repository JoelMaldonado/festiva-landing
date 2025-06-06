/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        p1: "#FF4081", // rosa Festiva
        dark: "#0D0D0D",
        darkB0: "#0F0F0F",
        grey1: "#494949",
        card: "#737373",
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
