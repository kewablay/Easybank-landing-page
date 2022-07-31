/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      publicSans: ["Quicksand", "sans-serif"],
      mainFont: ["BhuTuka Expanded One", "cursive"],
    },
    colors: {
      primary_900: "hsl(233, 26%, 24%)",
      primary_500: "hsl(233, 8%, 62%)",
      primary_100: "hsl(220, 16%, 96%)",
      secondary_100: "hsl(0, 0%, 98%)",
      neutral_500: "hsl(136, 65%, 51%)",
      neutral_100: "hsl(192, 70%, 51%)",
      btn_gradient: "linear-gradient(hsl(136, 65%, 51%), hsl(192, 70%, 51%)) ",
    },
  },
  plugins: [],
};
