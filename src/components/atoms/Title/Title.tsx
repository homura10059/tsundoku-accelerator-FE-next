import React from 'react'
import classNames from 'classnames'

type Props = {
  color?: string
}

const Title: React.FC<Props> = ({ color = 'on-primary', children }) => (
  <h1 className={classNames('text-4xl', 'font-bold', `text-${color}`)}>
    {children}
  </h1>
)

export default Title
