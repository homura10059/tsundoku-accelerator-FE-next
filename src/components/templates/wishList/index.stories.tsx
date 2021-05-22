import React from 'react'

import WishLists from './index'

export default {
  title: 'Design System/templates/wishList/index',
  decorators: [
    Story => (
      <div className={'bg-background w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const show = () => (
  <WishLists
    wishLists={[
      {
        id: 'dummy',
        url: '#',
        scrapedAt: 0,
        title: 'タイトル',
        userId: 0,
        discountRateThreshold: 0,
        pointsRateThreshold: 0,
        incomingWebhookId: null
      },
      {
        id: 'dummy',
        url: '#',
        scrapedAt: 0,
        title: 'タイトル',
        userId: 0,
        discountRateThreshold: 0,
        pointsRateThreshold: 0,
        incomingWebhookId: null
      },
      {
        id: 'dummy',
        url: '#',
        scrapedAt: 0,
        title: 'タイトル',
        userId: 0,
        discountRateThreshold: 0,
        pointsRateThreshold: 0,
        incomingWebhookId: null
      },
      {
        id: 'dummy',
        url: '#',
        scrapedAt: 0,
        title: 'タイトル',
        userId: 0,
        discountRateThreshold: 0,
        pointsRateThreshold: 0,
        incomingWebhookId: null
      },
      {
        id: 'dummy',
        url: '#',
        scrapedAt: 0,
        title: 'タイトル',
        userId: 0,
        discountRateThreshold: 0,
        pointsRateThreshold: 0,
        incomingWebhookId: null
      }
    ]}
  />
)
