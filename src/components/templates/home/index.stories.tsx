import React from 'react'

import Home from './index'

export default {
  title: 'Design System/templates/home/index',
  decorators: [
    Story => (
      <div className={'bg-background w-full p-2'}>
        <Story />
      </div>
    )
  ]
}

export const show = () => (
  <Home
    items={[
      {
        url: '#',
        title: 'title',
        scrapedAt: 0,
        price: 1000,
        discount: 100,
        discountRate: 10,
        points: 2,
        pointsRate: 1
      },
      {
        url: '#',
        title: 'title2',
        scrapedAt: 0,
        price: 10001,
        discount: 1100,
        discountRate: 110,
        points: 21,
        pointsRate: 11
      }
    ]}
  />
)
