/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      // screens: {
      //   sm: "576px",
      //   md: "768px",
      //   lg: "992px",
      //   xl: "1200px",
      //   "2xl": "1400px",
      // },
      colors: {
        primary: "#0aad0a",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
