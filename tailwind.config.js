module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        black_900: "#000000",
        blue_200: "#82c3ff",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        black_900_59: "#00000059",
      },
      borderRadius: { radius12: "12px", radius25: "25px", radius195: "19.5px" },
      borderWidth: { bw3: "3px" },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "10px 10px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
