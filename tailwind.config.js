module.exports = {
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
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
          DEFAULT: '#CFA616'
        },
        purple: {
          DEFAULT: '#3b3d54'
        },
        lightPurple: {
          DEFAULT: '#6B6C86'
        },
        newGray: {
          DEFAULT: '#ECEEFF'
        }
      }
    }
  },
  plugins: [],
};
