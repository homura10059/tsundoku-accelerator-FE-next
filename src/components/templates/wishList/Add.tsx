import React from 'react'
import Router from 'next/router'
import TextButton from '../../atoms/Button/TextButton'
import SubmitButton from '../../atoms/Button/SubmitButton'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { IncomingWebhook } from '../../../functions/prisma'
import NodePage from '../../organisms/Flame/NodePage'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage'

const schema = z.object({
  url: z
    .string()
    .nonempty({ message: '必須です' })
    .url({ message: 'url形式で入力してください' }),
  discountRateThreshold: z.number().min(0).max(100),
  pointsRateThreshold: z.number().min(0).max(100),
  incomingWebhookId: z.string().optional(),
})

type FormInputs = z.infer<typeof schema>

type Props = {
  incomingWebhooks: IncomingWebhook[]
}

const FromArea = styled.form`
  padding: 5px;
`
const InputArea = styled.table`
  th {
    padding: 5px;
  }

  td {
    padding: 5px;
  }
`
const ButtonArea = styled.div`
  margin-top: 5px;
  * + * {
    margin-left: 10px;
  }
`
const Add: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormInputs>({
    mode: 'onTouched',
    resolver: zodResolver(schema),
    defaultValues: {
      url: '',
      discountRateThreshold: 20,
      pointsRateThreshold: 20,
    },
  })

  console.log({ isDirty, isValid, errors })

  const onSubmit = async (data, e) => {
    e.preventDefault()
    try {
      await fetch('/api/wishList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      await Router.push('/wishList')
    } catch (error) {
      console.error(error)
    }
  }

  const onError = (errors, e) => console.log(errors, e)

  return (
    <NodePage title={'ActionIcon WishList'} basePath={`/wishList/`}>
      <FromArea onSubmit={handleSubmit(onSubmit, onError)}>
        <InputArea>
          <tbody>
            <tr>
              <th>url</th>
              <td>
                <input type="url" {...register('url')} />
                <ErrorMessage error={errors.url}/>
              </td>
            </tr>
            <tr>
              <th>閾値(割引率)</th>
              <td>
                <input
                  type="number"
                  {...register('discountRateThreshold', {
                    valueAsNumber: true,
                  })}
                />
                <ErrorMessage error={errors.discountRateThreshold}/>
              </td>
            </tr>
            <tr>
              <th>閾値(ポイト還元率率)</th>
              <td>
                <input
                  type="number"
                  {...register('pointsRateThreshold', {
                    valueAsNumber: true,
                  })}
                />
                <ErrorMessage error={errors.pointsRateThreshold}/>
              </td>
            </tr>
            <tr>
              <th>incomingWebhook</th>
              <td>
                <select {...register('incomingWebhookId')}>
                  <option value="" key={1}>
                    Select...
                  </option>
                  {props.incomingWebhooks.map((hook) => (
                    <option value={hook.id} key={hook.id}>
                      {hook.service}: {hook.id}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </InputArea>
        <ButtonArea>
          <SubmitButton
            disabled={!isDirty || Object.keys(errors).length !== 0}
            value="ActionIcon"
          />
          <TextButton
            label={'Cancel'}
            href={'#'}
            onClick={() => Router.back()}
          />
        </ButtonArea>
      </FromArea>
    </NodePage>
  )
}

export default Add
