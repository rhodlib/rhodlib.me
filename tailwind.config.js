const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gela: ["Gelasio", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
