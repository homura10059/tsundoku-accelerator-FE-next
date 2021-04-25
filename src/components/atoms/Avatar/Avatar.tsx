import React from 'react'
import classNames from 'classnames'

type Props = {
  size?: {
    height: number
    width: number
  }
  name: string
  image?: string
  color?: string
}

const Avatar: React.FC<Props> = ({
  name,
  size = { height: 10, width: 10 },
  image = null,
  color = 'on-surface',
}) => {
  const { width, height } = size
  if (image) {
    return (
      <img
        className={classNames(
          `w-${width}`,
          `h-${height}`,
          'rounded-full',
          'flex',
          'items-center',
          'justify-center'
        )}
        src={image}
        width={size.width}
        height={size.height}
      />
    )
  }
  return (
    <div
      className={classNames(
        `w-${width}`,
        `h-${height}`,
        'border-solid',
        'border-2',
        `border-${color}`,
        'rounded-full',
        'flex',
        'items-center',
        'justify-center',
        'align-middle'
      )}
    >
      <div className={classNames(`text-${color}`, 'text-3xl', 'text-center')}>
        {name.slice(0, 1)}
      </div>
    </div>
  )
}

export default Avatar
