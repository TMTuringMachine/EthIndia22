/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC5252",
        secondary: "#00FFED",
        background: "#141C2A",
        surface: "#000",
        surface2: "#808080",
        text1: "rgba(255, 255, 255, 0.755)",
        surface3: "rgba(255, 255, 255, 0.30)",
      },
      boxShadow: {
        shadow1: "0px 8px 20px rgba(35, 35, 35, 0.1)",
      },
    },
  },
  plugins: [],
};
