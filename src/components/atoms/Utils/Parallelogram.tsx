import { css } from 'styled-components'

export const parallelogram = css`
  clip-path: polygon(5% 5%, 100% 0%, 85% 100%, 0% 85%);
`
export const parallelogramAnimation = css`
  animation-name: parallelogramAnimation;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  @keyframes parallelogramAnimation {
    0% {
      clip-path: polygon(
        calc(5% + 0%) calc(5% + 0%),
        calc(100% + 0%) calc(0% + 0%),
        calc(85% + 0%) calc(100% + 0%),
        calc(0% + 0%) calc(85% + 0%)
      );
    }
    25% {
      clip-path: polygon(
        calc(5% + 1%) calc(5% + 0%),
        calc(100% + 0%) calc(0% + 0%),
        calc(85% - 1%) calc(100% + 0%),
        calc(0% + 0%) calc(85% + 1%)
      );
    }
    50% {
      clip-path: polygon(
        calc(5% + 0%) calc(5% + 1%),
        calc(100% + 0%) calc(0% + 0%),
        calc(85% + 0%) calc(100% - 1%),
        calc(0% + 0%) calc(85% + 0%)
      );
    }
    75% {
      clip-path: polygon(
        calc(5% + 0%) calc(5% + 0%),
        calc(100% - 1%) calc(0% - 1%),
        calc(85% + 0%) calc(100% + 0%),
        calc(0% + 1%) calc(85% + 0%)
      );
    }
    100% {
      clip-path: polygon(
        calc(5% + 0%) calc(5% + 0%),
        calc(100% + 0%) calc(0% + 0%),
        calc(85% + 0%) calc(100% + 0%),
        calc(0% + 0%) calc(85% + 0%)
      );
    }
  }
`

export const widePentagon = css`
  clip-path: polygon(10% 0, 95% 35%, 100% 60%, 5% 100%, 0 85%);
`

export const widePentagonAnimation = css`
  animation-name: widePentagonAnimation;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  @keyframes widePentagonAnimation {
    0% {
      clip-path: polygon(
        calc(10% + 1%) calc(0% + 0%),
        calc(95% + 0%) calc(35% + 0%),
        calc(100% + 0%) calc(60% + 0%),
        calc(5% + 0%) calc(100% + 0%),
        calc(0% + 0%) calc(85% + 0%)
      );
    }
    25% {
      clip-path: polygon(
        calc(10% + 0%) calc(0% + 0%),
        calc(95% + 0%) calc(35% + 0%),
        calc(100% - 1%) calc(60% + 0%),
        calc(5% + 0%) calc(100% + 1%),
        calc(0% + 0%) calc(85% + 0%)
      );
    }
    50% {
      clip-path: polygon(
        calc(10% + 0%) calc(0% + 1%),
        calc(95% + 0%) calc(35% + 0%),
        calc(100% + 0%) calc(60% - 1%),
        calc(5% + 0%) calc(100% + 0%),
        calc(0% + 0%) calc(85% + 0%)
      );
    }
    75% {
      clip-path: polygon(
        calc(10% + 0%) calc(0% + 0%),
        calc(95% - 1%) calc(35% - 1%),
        calc(100% + 0%) calc(60% + 0%),
        calc(5% + 0%) calc(100% + 0%),
        calc(0% + 1%) calc(85% + 0%)
      );
    }
    100% {
      clip-path: polygon(
        calc(10% + 0%) calc(0% + 0%),
        calc(95% + 0%) calc(35% + 0%),
        calc(100% + 0%) calc(60% + 0%),
        calc(5% + 0%) calc(100% + 0%),
        calc(0% + 0%) calc(85% + 0%)
      );
    }
  }
`
