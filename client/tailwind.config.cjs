/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/*.jsx",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e63946",
        primaryLight: "#40916c",
        secondary: "#ee9b00",
        secondaryLight: "#ee9b50",
      },
      height:{
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      }
    },
  },
  plugins: [],
};
