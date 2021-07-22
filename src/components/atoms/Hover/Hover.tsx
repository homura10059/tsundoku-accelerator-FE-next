import classNames from 'classnames'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Hover: React.VFC<Props> = ({ children }) => {
  return (
    <div
      className={classNames(
        'block',
        'relative',
        'no-underline',
        'w-full',
        'h-full',
        'z-0',
        'hover:before:absolute',
        'hover:before:w-full',
        'hover:before:h-full',
        'hover:before:top-0',
        'hover:before:left-0',
        'hover:before:z-10',
        'hover:before:bg-reverse-light',
        'hover:before:animate-pentagon',
        'hover:after:absolute',
        'hover:after:w-full',
        'hover:after:h-full',
        'hover:after:top-0',
        'hover:after:left-0',
        'hover:after:z-20',
        'hover:after:mix-blend-color-dodge',
        'hover:after:bg-primary-light',
        'hover:after:animate-parallelogram'
      )}
    >
      <div
        className={classNames(
          'relative',
          'py-2',
          'px-[8%]',
          'z-30',
          'text-on-background',
          'hover:text-surface'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Hover
