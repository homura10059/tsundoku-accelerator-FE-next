import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
}

const Text = styled.span`
  visibility: hidden;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  height: 0;
  opacity: 0;
  text-indent:100%;
`

const HiddenText: React.FC<Props> = ({ text }) => <Text>{text}</Text>

export default HiddenText
