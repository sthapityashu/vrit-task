/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import colors from "./src/assets/colors";
import { animation, keyframes, screens, zIndex } from "./src/assets/styles";
import { fontFamily } from "./src/assets/fonts/nextjs-fonts";
import { fontSize } from "./src/assets/fonts";

const tailwindCssconfig: Config = {
  content: ["./src/**/*.{css,js,ts,jsx,tsx,mdx}"],
  theme: {
    screens,
    extend: {
      // colors,
      // fontSize,
      // fontFamily,
      // zIndex,
      // keyframes,
      // animation,
    },
  },
  plugins: [],
};

export default tailwindCssconfig;
