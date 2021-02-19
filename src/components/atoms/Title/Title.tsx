import React from 'react'
import styled from 'styled-components'

type Props = {}

const Text = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.on.primary};
`

const Title: React.FC<Props> = ({ children }) => <Text>{children}</Text>

export default Title
