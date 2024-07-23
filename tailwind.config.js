/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FSElliotPro: ["FSElliotPro", "sans"],
        FSElliotProBold: ["FSElliotProBold", "sans"],
        HalvarBreitBd: ["HalvarBreitBd", "sans"],
        HalvarBreitBlk: ["HalvarBreitBlkSuSlanted", "sans"],
        HalvarBreitTh: ["HalvarBreitTh", "sans"]
      },
    },
  },
  plugins: [],
};
