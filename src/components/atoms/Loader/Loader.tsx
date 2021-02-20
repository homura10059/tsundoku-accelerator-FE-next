import React from 'react'
import styled, { css } from 'styled-components'
import HiddenText from '../Text/HiddenText'

type Props = {
  width?: number
  height?: number
}
const Wrapper = styled.div<Required<Props>>`
  background: ${({ theme }) => theme.colors.surface};
  ${(props) =>
    css`
      width: ${props.width}px;
      height: ${props.height}px;
    `}

  /* centering */
  display: flex;
  justify-content: center;
  align-items: center;
`

type SpinnerProps = {
  width: number
}
const Spinner = styled.div<SpinnerProps>`
  ${(props) =>
    css`
      width: ${props.width}px;
      height: ${props.width}px;
    `}
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.on.surface};
  background: -moz-linear-gradient(
    left,
    ${({ theme }) => theme.colors.on.surface} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${({ theme }) => theme.colors.on.surface} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    ${({ theme }) => theme.colors.on.surface} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    ${({ theme }) => theme.colors.on.surface} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.on.surface} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: load 1.4s infinite linear;
  animation: load 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  :before {
    width: 50%;
    height: 50%;
    background: ${({ theme }) => theme.colors.on.surface};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  :after {
    background: ${({ theme }) => theme.colors.surface};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

const Loader: React.FC<Props> = ({ width = 20, height = 20 }) => {
  return (
    <Wrapper width={width} height={height}>
      <Spinner width={width < height ? width : height}>
        <HiddenText text={'Loading...'} />
      </Spinner>
    </Wrapper>
  )
}

export default Loader
