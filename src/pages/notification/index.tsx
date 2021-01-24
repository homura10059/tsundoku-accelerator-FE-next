import React from 'react'
import Layout from '../../components/Page/Layout'
import styled from 'styled-components'
import LinkButton from '../../components/atoms/Button/LinkButton'

type Props = {}

const TopBar = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
const Title = styled.h1`
  font-size: 2rem;
`
const ButtonWrapper = styled.div`
  &:not(:last-child) {
    margin-right: 0.2rem;
  }
`

const Notification: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        <TopBar>
          <Title>IncomingWebhook</Title>
          <ButtonWrapper>
            <LinkButton
              href="/notification/add"
              label={'Add IncomingWebhook'}
            />
          </ButtonWrapper>
        </TopBar>
      </main>
    </Layout>
  )
}

export default Notification
