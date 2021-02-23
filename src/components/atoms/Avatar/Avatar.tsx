import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  size?: {
    height: number
    width: number
  }
  name: string
  image?: string
}

const Wrapper = styled.div<NonNullable<Props['size']>>`
  ${(props) =>
    css`
      width: ${props.width}px;
      height: ${props.height}px;
    `}
  border-radius: 50%;
`

const AvatarWrapper = styled(Wrapper)``

const AvatarImage = styled.img`
  display: block;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`

const InitialWrapper = styled(Wrapper)`
  display: inline-block;
  vertical-align: middle;
  position: relative;

  border: solid 1px ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.on.surface};
`

const InitialText = styled.div`
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Avatar: React.FC<Props> = ({
  name,
  size = { height: 32, width: 32 },
  image = null,
}) => {
  if (image) {
    return (
      <AvatarWrapper {...size}>
        <AvatarImage src={image} />
      </AvatarWrapper>
    )
  }
  return (
    <InitialWrapper {...size}>
      <InitialText>{name.slice(0, 1)}</InitialText>
    </InitialWrapper>
  )
}

export default Avatar
