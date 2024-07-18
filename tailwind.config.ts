import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/mocks/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/...",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        blue: "#2F4ED8",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#00B873",
        yellow: "#FFB700",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        red: "#D02D16",
        "white-light": "#F4E9D5",
        "black-light": "#141313",
        black: "#000",
        altblack: "#191616",
      },
      fontFamily: {
        Lato: ["Roboto"],
        Oswald: ["Graphik", "sans-serif"],
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "13px",
        navtext: "17px",
        basetext: "20px",
        buttonsize: "25px",
        md: "30px",
        lg: "40px",
        xl: "55px",
        "2xl": "77px",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
