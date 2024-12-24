/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alfaSlabOne: ["Alfa Slab One"],
        helvetica: ["Helvetica"],
        helveticaBold: ["Helvetica Bold"],
      },
    },
    screens: {
      xxxl: { max: "3019px" },
      xxl: { max: "2560px" },
      xl: { max: "1920px" },
      "desktop-l": { max: "1880px" },
      "desktop-m": { max: "1680px" },
      "laptop-x": { max: "1440px" },
      "laptop-m": { max: "1280px" },
      lg: { max: "1190px" },
      md: { max: "991px" },
      sm: { max: "767px" },
      xs: { max: "414px" },
      xxs: { max: "375px" },
    },
  },
  plugins: [],
};
