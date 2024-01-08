/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}",
],

  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        aDLaM: ["ADLaM Display", "cursive"],
        audiowide: ["Audiowide", "cursive"],
        fredoka: ["Fredoka", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    dropShadow: {
      '3xl': '0px 4px 12px rgba(226, 229, 224, 0.5)',
      '4xl': [
        '0px 4px 12px rgba(7, 183, 242, 0.5)'
      ]
  },
  variants: {
    extend: {},
  },

  plugins: [],
  },
};
