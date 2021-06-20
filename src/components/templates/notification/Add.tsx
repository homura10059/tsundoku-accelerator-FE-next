import Router from 'next/router'
import React, { useState } from 'react'

import SubmitButton from '../../atoms/Button/SubmitButton'
import TextButton from '../../atoms/Button/TextButton'
import NodePage from '../../organisms/Flame/NodePage'

type Props = {}

const Add: React.FC<Props> = () => {
  const [url, setUrl] = useState('')
  const [channel, setChannel] = useState('')
  const [service, setService] = useState('DISCORD')

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = { url, channel, service }
      await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      await Router.push('/notification')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NodePage title={'Add IncomingWebhook'} basePath={`/notification/`}>
      <form onSubmit={onSubmit}>
        <div>
          url :
          <input
            autoFocus
            onChange={e => setUrl(e.target.value)}
            placeholder="url"
            type="url"
            value={url}
          />
          channel :
          <input
            onChange={e => setChannel(e.target.value)}
            placeholder="channel"
            type="text"
            value={channel}
          />
          service :
          <select name="service" onChange={e => setService(e.target.value)}>
            <option value="DISCORD">Discord</option>
          </select>
        </div>
        <SubmitButton disabled={!url && !channel && !service} value="Add" />
        <TextButton onClick={() => Router.back()}>Cancel</TextButton>
      </form>
    </NodePage>
  )
}

export default Add
