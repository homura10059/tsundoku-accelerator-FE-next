import React from 'react'
import styled from 'styled-components'

type Props = {}

const MainArea = styled.main`
  color: ${({ theme }) => theme.colors.on.background};
`

const Main: React.FC<Props> = () => {
  return <MainArea>セール情報を収集してくれるサイト</MainArea>
}

export default Main
