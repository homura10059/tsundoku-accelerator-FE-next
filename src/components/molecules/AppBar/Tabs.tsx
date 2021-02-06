import React from 'react'
import styled from 'styled-components'
import Tab from '../../atoms/Tab/Tab'

type Props = {
  session: boolean
  loading: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  * + * {
    margin-left: 0.5rem;
  }
`

const Tabs: React.FC<Props> = ({ session, loading }) => {
  if (session && !loading) {
    return (
      <Wrapper>
        <Tab href={'/'}>Home</Tab>
        <Tab href={'/notification'}>Notification</Tab>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Tab href={'/'}>Home</Tab>
    </Wrapper>
  )
}

export default Tabs
