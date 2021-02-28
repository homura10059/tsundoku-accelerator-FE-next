import { css } from 'styled-components'

export const parallelogram = css`
  clip-path: polygon(2% 15%, 100% 0%, 100% 95%, 0% 90%);
`
export const animationMoving = css`
  @keyframes moving {
    0% {
      clip-path: polygon(
        calc(2% + 0%) calc(15% + 0%),
        calc(100% + 0%) calc(0% + 0%),
        calc(100% + 0%) calc(95% + 0%),
        calc(0% + 0%) calc(90% + 0%)
      );
    }
    25% {
      clip-path: polygon(
        calc(2% + 1%) calc(15% + 0%),
        calc(100% + 0%) calc(0% + 0%),
        calc(100% - 1%) calc(95% + 0%),
        calc(0% + 0%) calc(90% + 1%)
      );
    }
    50% {
      clip-path: polygon(
        calc(2% + 0%) calc(15% + 1%),
        calc(100% + 0%) calc(0% + 0%),
        calc(100% + 0%) calc(95% - 1%),
        calc(0% + 0%) calc(90% + 0%)
      );
    }
    75% {
      clip-path: polygon(
        calc(2% + 0%) calc(15% + 0%),
        calc(100% - 1%) calc(0% - 1%),
        calc(100% + 0%) calc(95% + 0%),
        calc(0% + 1%) calc(90% + 0%)
      );
    }
    100% {
      clip-path: polygon(
        calc(2% + 0%) calc(15% + 0%),
        calc(100% + 0%) calc(0% + 0%),
        calc(100% + 0%) calc(95% + 0%),
        calc(0% + 0%) calc(90% + 0%)
      );
    }
  }
`
