/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        p1: "#FF4081", // rosa Festiva
        dark: "#0D0D0D",
        darkB0: "#0F0F0F",
        darkB1: "#161616",
        grey1: "#494949",
        card: "#737373",
        yellow: "#F4C520",
        blue: "#1463FE",
        green: "#00C64F",
        orange: "#FD8B06",
        grey2: "#D9D9D9"
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
