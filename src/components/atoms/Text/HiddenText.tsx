import React from 'react'

type Props = {
  text: string
}

const HiddenText: React.FC<Props> = ({ text }) => (
  <span className={'hidden'}>{text}</span>
)

export default HiddenText
