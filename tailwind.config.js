module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
        75: "18.75rem",
      },
      backgroundColor: {
        tertiary: "#202225",
        secondary: "#2f3136",
        primary: "#36393f",
      },
    },
  },
  plugins: [],
};
