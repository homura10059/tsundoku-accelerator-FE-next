// https://www.schemecolor.com/black-gray-white-red.php
export const theme = {
  // https://material.io/design/color/the-color-system.html#color-theme-creation
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
    border: '#FDFDFD',
    error: '#33C4B3',
    on: {
      primary: '#FDFDFD',
      secondary: '#FDFDFD',
      border: '#0B0B0B',
      background: '#FDFDFD',
      surface: '#FDFDFD',
      error: '#FDFDFD'
    }
  },
  layer: {
    top: 100,
    bottom: 0
  }
} as const

export const hex2rgba = (hex: string, alpha = 1) => {
  let color = []
  // ロングバージョンの場合（例：#FF0000）
  const long = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  if (long) {
    color = long.slice(1, 4).map(x => parseInt(x, 16))
  }
  // ショートバージョンの場合（例：#F00）
  const short = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  if (short) {
    color = short.slice(1, 4).map(x => 0x11 * parseInt(x, 16))
  }
  // 該当しない場合は、nullを返す.
  if (!color) {
    return null
  }
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`
}

// theme の型推論をできるようにする https://qiita.com/Takepepe/items/eec6e1d2101570e7e241
type AppTheme = typeof theme
declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
