/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        800: "800px",
      },
      colors: {
        main: "#efefef",
        primary: "#2c3e50",
        secondary: "#34495e",
        "light-red": "#e74c3c",
        "strong-red": "#c0392b",
        warning: "#ffc107",
        success: "#28a745",
        info: "#2a7ddbb3",
        gray: "rgb(88, 88, 88)",
        white: "#fff",
      },
    },
    plugins: [],
  },
};
