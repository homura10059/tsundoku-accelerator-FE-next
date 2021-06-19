import { zodResolver } from '@hookform/resolvers/zod'
import Router from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { IncomingWebhook } from '../../../functions/prisma'
import SubmitButton from '../../atoms/Button/SubmitButton'
import TextButton from '../../atoms/Button/TextButton'
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage'
import NodePage from '../../organisms/Flame/NodePage'

const schema = z.object({
  url: z
    .string()
    .nonempty({ message: '必須です' })
    .url({ message: 'url形式で入力してください' }),
  discountRateThreshold: z.number().min(0).max(100),
  pointsRateThreshold: z.number().min(0).max(100),
  incomingWebhookId: z.string().optional()
})

type FormInputs = z.infer<typeof schema>

type Props = {
  incomingWebhooks: IncomingWebhook[]
}

const Add: React.FC<Props> = props => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors }
  } = useForm<FormInputs>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: {
      url: '',
      discountRateThreshold: 20,
      pointsRateThreshold: 20
    }
  })

  console.log({ isDirty, isValid, errors })

  const onSubmit = async (data, e) => {
    e.preventDefault()
    try {
      await fetch('/api/wishList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      await Router.push('/wishList')
    } catch (error) {
      console.log(error)
    }
  }

  const onError = (errors, e) => console.log(errors, e)

  return (
    <NodePage title={'Add WishList'} basePath={`/wishList/`}>
      <form className={'p-1'} onSubmit={handleSubmit(onSubmit, onError)}>
        <table className={'table-auto'}>
          <tbody>
            <tr>
              <th>url</th>
              <td className={'p-1'}>
                <input
                  className={'text-surface'}
                  type="url"
                  {...register('url')}
                />
                <ErrorMessage error={errors.url} />
              </td>
            </tr>
            <tr>
              <th>閾値(割引率)</th>
              <td className={'p-1'}>
                <input
                  className={'text-surface'}
                  type="number"
                  {...register('discountRateThreshold', {
                    valueAsNumber: true
                  })}
                />
                <ErrorMessage error={errors.discountRateThreshold} />
              </td>
            </tr>
            <tr>
              <th>閾値(ポイト還元率率)</th>
              <td className={'p-1'}>
                <input
                  className={'text-surface'}
                  type="number"
                  {...register('pointsRateThreshold', {
                    valueAsNumber: true
                  })}
                />
                <ErrorMessage error={errors.pointsRateThreshold} />
              </td>
            </tr>
            <tr>
              <th>incomingWebhook</th>
              <td className={'p-1'}>
                <select
                  className={'text-surface'}
                  {...register('incomingWebhookId')}
                >
                  <option value="" key={1}>
                    Select...
                  </option>
                  {props.incomingWebhooks.map(hook => (
                    <option value={hook.id} key={hook.id}>
                      {hook.service}: {hook.id}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={'mt-2 space-x-2'}>
          <SubmitButton
            disabled={!isDirty || Object.keys(errors).length !== 0}
            value="Add"
          />
          <TextButton onClick={() => Router.back()}>Cancel</TextButton>
        </div>
      </form>
    </NodePage>
  )
}

export default Add
