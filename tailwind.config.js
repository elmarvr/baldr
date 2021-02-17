const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.red.900"),
            },
            "a:hover": {
              color: theme("colors.red.1000"),
            },
            "li:before": {
              backgroundColor: "transparent !important",
              background: `linear-gradient(to right bottom, ${theme(
                "colors.yellow.300"
              )}, ${theme("colors.yellow.500")}) !important`,
            },
          },
        },
      }),
      rotate: {
        135: "135deg",
      },
      fontFamily: {
        heading: "'Bebas Neue', cursive",
      },
      colors: {
        gray: colors.warmGray,
        red: {
          1000: "#320B0B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
};
