module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      gray: {
        light: "#fafafa",
        dark: "#858585",
      },
      blue: {
        text: "#111517",
        dark: "#2b3945",
        veryDark: "#202c37",
      },
    },
    screens: {
      tablet: "768px",
      "tablet-lg": "1024px",
      desktop: "1440px",
    },
    fontFamily: {
      body: ["Nunito Sans", "sans-serif"],
    },
    fontSize: {
      small: "14px",
      base: "16px",
      h1: "25px",
      h2: "22px",
      h3: "20px",
    },
    extend: {
      boxShadow: {
        simple: "0 0 3px 1px rgba(0, 0, 0, 0.1)",
      },
      minWidth: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
