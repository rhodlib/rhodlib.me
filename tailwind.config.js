const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gela: ["Gelasio", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#b4cded",
        secondary: "#f0f4ef",
        contrast: "#344966",
        dark: "#0d1821",
        slate: "#94a3b8",
        white: "#FFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
