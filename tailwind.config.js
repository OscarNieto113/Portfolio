module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dina: ["Dina", "sans"],
      },
      boxShadow: {
        "custom-light": "0 0 10px #313131",
        "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
      },
    },
    extend: {
      colors: {
        orange: {
          DEFAULT: '#D4933D'
        }
      }
    }
  },
  plugins: [],
};
