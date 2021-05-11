module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      gray: {
        light: 'hsl(0, 0%, 98%)',
        dark: 'hsl(0, 0%, 52%)',
      },
      blue: {
        text: 'hsl(200, 15%, 8%)',
        dark: 'hsl(209, 23%, 22%)',
        veryDark: 'hsl(207, 26%, 17%)'
      },
    },
    screens: {
      'desktop': '1440px'
    },
    fontFamily: {
      body: ['Nunito Sans', 'sans-serif'],
    },
    fontSize: {
      'base': '14px',
      'detail': '16px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
