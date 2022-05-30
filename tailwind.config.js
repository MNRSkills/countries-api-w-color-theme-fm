module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      colors: {
        night: "hsl(207, 26%, 17%)",
        wordsNight: "hsl(209, 23%, 22%)",
      },
    },
    fontFamily: {
      display: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
