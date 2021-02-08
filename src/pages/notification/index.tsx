import React from 'react'
import styled from 'styled-components'
import LinkButton from '../../components/atoms/Button/LinkButton'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { getIncomingWebhooksByUserId } from '../../domain/service/incomingWebhook'
import { IncomingWebhook } from '../../lib/prisma'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  const incomingWebhooks = !session
    ? []
    : await getIncomingWebhooksByUserId(session.user.id)
  return { props: { incomingWebhooks } }
}

type Props = {
  incomingWebhooks: IncomingWebhook[]
}

const TopBar = styled.div`
  display: flex;
  margin-bottom: 1rem;
  * + * {
    margin-left: 1rem;
  }
`
const Title = styled.h1`
  font-size: 2rem;
`

const Notification: React.FC<Props> = (props) => {
  console.log(props)
  return (
    <main>
      <TopBar>
        <Title>IncomingWebhook</Title>
        <LinkButton href="/notification/add" label={'Add IncomingWebhook'} />
      </TopBar>
      {props.incomingWebhooks.map((hook) => (
        <div>
          <p>id: {hook.id}</p>
          <p>
            service: <a href={hook.incomingWebhookUrl}>{hook.service}</a>
          </p>
          <p>channel: {hook.channel}</p>
        </div>
      ))}
    </main>
  )
}

export default Notification
