import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
`

const MustHead: React.FC<Props> = () => (
  <Header>
    <Image src="/tsundoku_icon.svg" width={64} height={64} />
  </Header>
)

export default MustHead
