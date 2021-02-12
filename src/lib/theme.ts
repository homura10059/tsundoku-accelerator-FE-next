// https://www.schemecolor.com/black-gray-white-red.php
export const theme = {
  // https://material.io/design/color/the-color-system.html#color-theme-creation
  colors: {
    primary: {
      light: '#C21C0E',
      dark: '#9E1221',
    },
    secondary: {
      light: '#999999',
      dark: '#4C4C4C',
    },
    background: '#FDFDFD',
    surface: '#FDFDFD',
    error: '#33C4B3',
    on: {
      primary: '#FDFDFD',
      secondary: '#FDFDFD',
      background: '#0B0B0B',
      surface: '#0B0B0B',
      error: '#FDFDFD',
    },
  },
  layer: {
    top: 100,
    bottom: 0
  },
} as const

// theme の型推論をできるようにする https://qiita.com/Takepepe/items/eec6e1d2101570e7e241
type AppTheme = typeof theme
declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
