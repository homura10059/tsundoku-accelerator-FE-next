import React from 'react'
import styled from 'styled-components'
import { hex2rgba } from '../../../../lib/theme'

type Props = {}

const Parallelogram = styled.div`
  clip-path: polygon(6% 0, 100% 0, 95% 100%, 0 87%);

  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Outer = styled(Parallelogram)`
  background-color: ${({ theme }) => theme.colors.border};
`

const OnHover = styled(Parallelogram)`
  background-color: ${({ theme }) => hex2rgba(theme.colors.primary.light, 0)};

  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${({ theme }) => hex2rgba(theme.colors.primary.light, 1)};
    animation-name: moving;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

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

const Inner = styled(Parallelogram)`
  background-color: ${({ theme }) => theme.colors.surface};

  width: 90%;
  height: 90%;
  margin: 5px;
`

const Wrapper = styled.div`
  color: #fff;
`

const Box: React.FC<Props> = ({ children }) => {
  return (
    <Outer>
      <OnHover>
        <Inner>
          <Wrapper>{children}</Wrapper>
        </Inner>
      </OnHover>
    </Outer>
  )
}

export default Box
