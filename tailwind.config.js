// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pplight: ["PPNeueMachinaLight", ...defaultTheme.fontFamily.sans],
        ppmedium: ["PPNeueMachinaMedium", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
