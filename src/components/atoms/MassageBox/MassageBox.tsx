import React from 'react'
import styled from 'styled-components'

type Props = {}

const Parallelogram = styled.div`
  clip-path: polygon(6% 0, 100% 0, 95% 100%, 0 87%);
`

const BackgroundWhite = styled(Parallelogram)`
  background-color: ${({ theme }) => theme.colors.border};
  /* position: absolute; */
  width: 100%;
  height: 100%;
  /* z-index: -40; */

  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackgroundBlack = styled(Parallelogram)`
  background-color: ${({ theme }) => theme.colors.surface};
  /* position: absolute; */

  width: calc(100% - 25px);
  height: calc(100% - 12px);
  margin-left: 5px;
  margin-right: 20px;
  margin-top: 5px;
  margin-bottom: 7px;
  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;

  /* z-index: -30; */
`

const TextArea = styled.div`
  color: #fff;
  /*
  font-size: 20px;
  margin-left: 5px;
  margin-right: 50px;
  margin-top: 5px;
  margin-bottom: 7px;

  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 20px;

  line-height: 1.2em;
  */
`

const Box: React.FC<Props> = ({ children }) => {
  return (
    <BackgroundWhite>
      <BackgroundBlack>
        <TextArea>{children}</TextArea>
      </BackgroundBlack>
    </BackgroundWhite>
  )
}

export default Box
