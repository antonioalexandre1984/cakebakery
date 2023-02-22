/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
       body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      ss: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        hero: '#FFC0CB',
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        header: '#DB7093',
        accent: {
          DEFAULT: '#DC143C',
          hover: '#F9629F',
        },
        cart: {
          DEFAULT: '#F9629F',
          hover: '##F88379',
        },
        paragraph: '#878e99',
        topcard: '#E6E6FA',
        banner: '#D8BFD8',
        /*
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        }, */
      
      },
    },
  },
  plugins: [],
}
