const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "nose":"#ffffff",
      },
      fontFamily: {
        nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
});
