/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
const config = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C21C0E',
          dark: '#9E1221',
        },
        reverse: {
          light: '#3DE3F1',
          dark: '#61EDDE',
        },
        secondary: {
          light: '#4C4C4C',
          dark: '#0B0B0B',
        },
        background: '#9E1221',
        surface: '#0B0B0B',
        error: '#33C4B3',
        on: {
          primary: '#FDFDFD',
          secondary: '#FDFDFD',
          background: '#FDFDFD',
          surface: '#FDFDFD',
          error: '#FDFDFD',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = config
