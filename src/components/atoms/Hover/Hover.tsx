import classNames from 'classnames'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Hover: React.VFC<Props> = ({ children }) => {
  return (
    // TODO: tailwindcssでbefore/afterが使えるようになったらやり直す
    <div className={classNames('hover-anime')}>
      <div className={classNames('hover-anime__inner')}>{children}</div>
    </div>
  )
}

export default Hover
