/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter"],
      },
      colors: {
        hijau: "#29BF08",
        hijau_muda: "#10CA9C",
        red2: "#E52121",
        pink: "#EC5757",
        orange: "#F24E1E",
        abu2: "#D9D9D9",
        kuning: "#FFC700",
        biru: "#699BF7",
        ungu: "#9747FF",
        secondary: "#19182580",
      },
    },
  },
  plugins: [],
};
