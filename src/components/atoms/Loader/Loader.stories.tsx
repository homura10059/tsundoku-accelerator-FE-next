import React from 'react'
import styled from 'styled-components'
import Loader from './Loader'

const Background = styled.div`
  background-color:  #9cc;
  padding: 10px;
`

export default {
  title: 'Design System/atoms/Loader',
  decorators: [
    (Story) => (
      <Background>
        <Story />
      </Background>
    ),
  ],
}

export const showLoader = () => (
  <Loader />
)

export const showLoaderWidth = () => (
  <Loader width={350} height={30}/>
)