import React, { FC } from 'react'
import cn from 'classnames'
import history from 'core/history'
import { getBasePath } from 'core/utils'

// styles
import s from './Link.css'

// types
import type { LinkProps } from './types'

export const Link: FC<LinkProps> = ({
  href = '',
  onClick,
  className,
  disabled,
  children,
  ...restProps
}) => {
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()

      if (!disabled && onClick) {
        onClick(event)
      }

      history.push(`${getBasePath()}${href}`)
    },
    [disabled, onClick],
  )

  return (
    <a
      className={cn(className, s.link, { [s.disabled]: disabled })}
      href={`${getBasePath()}${href}`}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </a>
  )
}
