import { css } from 'styled-components'

export const parallelogram = css`
  clip-path: polygon(6% 0, 100% 0, 95% 100%, 0 87%);
`
export const animationMoving = css`
  @keyframes moving {
    0% {
      clip-path: polygon(6% 0, 100% 0, 95% 100%, 0 87%);
    }
    25% {
      clip-path: polygon(7% 0, 100% 0, 94% 100%, 0 88%);
    }
    50% {
      clip-path: polygon(6% 1%, 100% 0, 95% 99%, 0 87%);
    }
    75% {
      clip-path: polygon(6% 0, 99% 1%, 95% 100%, 1% 87%);
    }
    100% {
      clip-path: polygon(6% 0, 100% 0, 95% 100%, 0 87%);
    }
  }
`
