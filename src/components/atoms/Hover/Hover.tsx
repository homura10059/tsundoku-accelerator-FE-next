import classNames from 'classnames'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Hover: React.VFC<Props> = ({ children }) => {
  return (
    <div
      className={classNames(
        'motion-safe:hover:animate-parallelogram',
        'hover:bg-reverse-light'
      )}
    >
      {children}
    </div>
  )
}

export default Hover
