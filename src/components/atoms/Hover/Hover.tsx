import classNames from 'classnames'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Hover: React.VFC<Props> = ({ children }) => {
  return (
    // TODO: tailwindcssでbefore/afterが使えるようになったらやり直す
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
