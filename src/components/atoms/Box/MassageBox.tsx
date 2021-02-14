import React from 'react'
import styled from 'styled-components'

type Props = {}

const MessageWindow = styled.div`
  width: 300px;
  position: relative;
`
const MessageArea = styled.div`
  position: absolute;
  left: 20px;
`

const Content = styled.div`
  position: relative;
`
const Arrow = styled.div`
  clip-path: polygon(
    62% 43%,
    100% 17%,
    100% 73%,
    50% 100%,
    44% 56%,
    0 71%,
    55% 8%
  );
`

const ArrowWhite = styled(Arrow)`
  background-color: #fff;
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 20px;
  left: -17px;

  z-index: -20;
`

const ArrowBlack = styled(Arrow)`
  background-color: #000;
  position: absolute;
  width: 28px;
  height: 20px;
  bottom: 22px;
  left: -17px;

  z-index: -10;
`

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
    // <MessageWindow>
    //   <MessageArea>
    //     <Content>
    //       <ArrowWhite></ArrowWhite>
    //       <ArrowBlack></ArrowBlack>
    //       <BackgroundWhite></BackgroundWhite>
    //       <BackgroundBlack></BackgroundBlack>
    //       <TextArea>{children}</TextArea>
    //     </Content>
    //   </MessageArea>
    // </MessageWindow>
    <BackgroundWhite>
      <BackgroundBlack>
        <TextArea>{children}</TextArea>
      </BackgroundBlack>
    </BackgroundWhite>
  )
}

export default Box
