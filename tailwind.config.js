/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    fontFamily: {
      sans: "Inter"
    },

    container: {
      center: true,
      screens: {
        xl: "1170px"
      }
    },
    extend: {
      screens: {
        sm: "360px"
      },
      colors: {
        primary: "#217BF4",
        muted: "#656464",
        dark: "#0A093D"
      }
    }
  },
  plugins: []
};
