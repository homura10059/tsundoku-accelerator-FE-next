import classNames from 'classnames'
import React from 'react'

type Props = {
  color?: string
}

const Title: React.FC<Props> = ({ color = 'text-on-primary', children }) => (
  <h1 className={classNames('text-4xl', 'font-bold', color)}>{children}</h1>
)

export default Title
