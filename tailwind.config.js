const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gela: ["Gelasio", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#d7bea8",
      secondary: "#b49286",
      contrast: "#c78283",
      dark: "#744253",
      slate: "#94a3b8",
      white: "#FFF",
    },
  },
  plugins: [],
};
