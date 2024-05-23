/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      // container: {
      //   screens: {
      //     xs: "100%",
      //   },
      // },
      colors: {
        gold: {
          100: "#FBF5B7",
          200: "#BF953F",
        },
      },
    },
  },
  plugins: [],
};
