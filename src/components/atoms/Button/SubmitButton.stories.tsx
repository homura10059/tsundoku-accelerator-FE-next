import React from 'react'
import SubmitButton from './SubmitButton'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #9cc;
  width: 400px;
  padding: 10px;
`

export default {
  title: 'Design System/atoms/SubmitButton',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showEnabled = () => (
  <SubmitButton disabled={false} value={'送信ボタン'} />
)

export const showDisabled = () => (
  <SubmitButton disabled={true} value={'送信ボタン'} />
)

export const showDefault = () => <SubmitButton />
