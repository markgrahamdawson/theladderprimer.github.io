/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      // change default tailwind font (sans) to poppins as is by far the most common font family
      sans: ['AmaticSC', 'Arial', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        mizzle: '#bfc5b8',
        offwhite: '#f0ece3',
        teal: '#4da4a4',
        richblack: '#13100d',
        brightyellow: '#FFEE00',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};