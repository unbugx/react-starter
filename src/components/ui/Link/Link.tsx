import React, { FC } from 'react'
import cn from 'classnames'

// utils
import history from 'utils/history'
import { getBasePath } from 'utils/core'

// styles
import s from './Link.css'

// types
import type { LinkProps } from 'components/ui/Link/Link.types'

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

      if (disabled) {
        return
      }

      if (onClick) {
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
