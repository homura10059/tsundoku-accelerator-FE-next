import { Button, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import classNames from 'classnames'
import Router from 'next/router'
import React from 'react'

import SubmitButton from '@/components/atoms/Button/SubmitButton'

import TextButton from '../../atoms/Button/TextButton'
import NodePage from '../../organisms/Flame/NodePage'

type Props = {}

const Label = ({ text }: { text: string }) => (
  <span className={'text-on-surface'}>{text}</span>
)

const Add: React.FC<Props> = () => {
  const form = useForm({
    initialValues: {
      url: '',
      channel: '',
      service: ''
    },

    validationRules: {
      url: value => /^https:\/\/+$/.test(value)
    }
  })

  const onSubmit = async (body: {
    url: string
    channel: string
    service: string | null
  }) => {
    try {
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
      <form onSubmit={form.onSubmit(values => onSubmit(values))}>
        <TextInput
          required
          label={<Label text={'URL'} />}
          labelProps={{ className: 'text-on-surface' }}
          error={form.errors.url && 'Please specify valid email'}
          value={form.values.url}
          onChange={event =>
            form.setFieldValue('url', event.currentTarget.value)
          }
        />
        <TextInput
          required
          label={<Label text={'Channel'} />}
          labelProps={{ className: 'text-on-surface' }}
          error={form.errors.channel && 'Please specify valid email'}
          value={form.values.channel}
          onChange={event =>
            form.setFieldValue('channel', event.currentTarget.value)
          }
        />
        <Select
          data={[
            { value: null, label: '----' },
            { value: 'DISCORD', label: 'DISCORD' }
          ]}
          placeholder="Pick one"
          label={<Label text={'Service'} />}
          onChange={event =>
            form.setFieldValue('service', event.currentTarget.value)
          }
        />

        <div className={classNames('flex', 'space-x-0.5', 'mt-2')}>
          <TextButton onClick={() => Router.back()}>Cancel</TextButton>
          <SubmitButton
            disabled={Object.values(form.errors).some(val => val)}
            value="Add"
          />
        </div>
      </form>
    </NodePage>
  )
}

export default Add
