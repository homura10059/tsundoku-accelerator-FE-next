import React from 'react'
import styled from 'styled-components'

type Props = {}

const Parallelogram = styled.div`
  clip-path: polygon(6% 0, 100% 0, 95% 100%, 0 87%);
`

const Outer = styled(Parallelogram)`
  background-color: ${({ theme }) => theme.colors.border};

  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Inner = styled(Parallelogram)`
  background-color: ${({ theme }) => theme.colors.surface};

  width: 90%;
  height: 90%;
  margin: 5px;

  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  color: #fff;
`

const Box: React.FC<Props> = ({ children }) => {
  return (
    <Outer>
      <Inner>
        <Wrapper>{children}</Wrapper>
      </Inner>
    </Outer>
  )
}

export default Box
