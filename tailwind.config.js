/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
const config = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C21C0E',
          dark: '#9E1221'
        },
        reverse: {
          light: '#3DE3F1',
          dark: '#61EDDE'
        },
        secondary: {
          light: '#4C4C4C',
          dark: '#0B0B0B'
        },
        background: '#9E1221',
        surface: '#0B0B0B',
        error: '#33C4B3',
        on: {
          primary: '#FDFDFD',
          secondary: '#FDFDFD',
          background: '#FDFDFD',
          surface: '#FDFDFD',
          error: '#FDFDFD'
        }
      },
      keyframes: {
        parallelogram: {
          '0%, 100%': {
            'clip-path': 'polygon(5% 5%, 100% 0%, 85% 100%, 0% 85%)'
          },
          '25%': {
            'clip-path': 'polygon(6% 5%, 100% 0%, 84% 100%, 0% 86%)'
          },
          '50%': {
            'clip-path': 'polygon(5% 6%, 100% 0%, 85% 99%, 0% 85%)'
          },
          '75%': {
            'clip-path': 'polygon(5% 5%, 99% -1%, 85% 100%, 1% 85%)'
          }
        }
      },
      animation: {
        parallelogram: 'parallelogram 1s linear infinite'
      }
    }
  },
  variants: {
    extend: {
      animation: ['motion-safe', 'hover']
    }
  },
  plugins: []
}

module.exports = config
